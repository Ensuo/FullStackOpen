const listHelper = require('../utils/list_helper')

test('totalLikes is summing all likes in list', () => {
  const blogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      _title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '64272d1c8e4842722fbb1fe6',
      title: 'harry and the potter',
      author: 'JK clinton',
      url: 'google.com',
      likes: 2,
      __v: 0
    },
    {
      _id: '643737fe64d1c51e97fc86fe',
      title: 'the hungry movies',
      author: 'Bob rowser',
      url: 'google.com',
      likes: 15,
      __v: 0
    }
  ]

  const result = listHelper.totalLikes(blogs)
  expect(result).toBe(22)
})

test('favoriteBLog returns most liked blog', () => {
  const blogs = [
    {
      id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '64272d1c8e4842722fbb1fe6',
      title: 'harry and the potter',
      author: 'JK clinton',
      url: 'google.com',
      likes: 2,
      __v: 0
    },
    {
      _id: '643737fe64d1c51e97fc86fe',
      title: 'the hungry movies',
      author: 'Bob rowser',
      url: 'google.com',
      likes: 15,
      __v: 0
    }
  ]

  const result = listHelper.favoriteBlog(blogs)

  expect(result).toEqual(
    {
      title: 'the hungry movies',
      author: 'Bob rowser',
      likes: 15
    }
  )
})
