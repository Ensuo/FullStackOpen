const listHelper = require('../utils/list_helper')

test('dummy returns 1', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

test('allLikes is summing all likes in list', () => {
    const blogs = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
    ]

    const result = listHelper.allLikes(blogs)
    expect(result).toBe(5)
})