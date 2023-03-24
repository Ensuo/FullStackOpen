require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const Person = require('./models/person')

app.use(cors())
app.use(morgan(':method :status :res[header]'))
app.use(express.static('build'))
app.use(express.json())

let contacts = []

app.get('/api/persons', (request, response) => {
    Person
        .find({})
        .then(persons => {
            persons.forEach(person => {
                contacts = contacts.concat(person)
            })
            response.json(persons)
        })
})

app.get('/api/persons/:id', (request, response, next) => {

    Person.findById(request.params.id)
        .then(person => {
            if(person){
                response.json(person)
            }else{
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', async (request, response, next) => {
    Person
        .findByIdAndRemove(request.params.id)
        .then(
            response.status(204).end()
        )
        .catch(error => next(error))

    contacts = contacts.filter(person => person.id.toString() !== request.params.id)
    console.log(contacts)

})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if(contacts.some(p => p.name === body.name)){
        return response.status(400).json({
            error: 'Name already exists'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

    contacts = contacts.concat(person)

    person.save()
        .then(result => {
            console.log(result)
            response.json(result)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person,{ new: true, runValidators: true, context: 'query' })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error : 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }else if(error.name === 'ValidationError') {
        return response.status(400).json({ error : error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
