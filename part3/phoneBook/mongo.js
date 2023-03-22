const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://haradayasuo2010:${password}@cluster0.sdcwovp.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)  

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.id
        delete returnedObject.__v
    }
})

const Person = mongoose.model('Person', personSchema)

if(process.argv.length == 3){
    Person.
        find({}).
        then(persons => 
            persons.forEach(person => {
                console.log(person)
        mongoose.connection.close()
    }))
}else if( process.argv.length == 5){
    const person = new Person({
        name: name,
        number: number,
    })

    person.save().then(result => {
        console.log(`Added ${name}:${number}`)
        console.log(result)
        mongoose.connection.close()
    })
}else{
    console.log("Missing info")
    process.exit(1)
}