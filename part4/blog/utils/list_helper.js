const favoriteBlog = (blogs) => {
  const max = {
    title: blogs[0].title,
    author: blogs[0].author,
    likes: blogs[0].likes
  }

  const result = blogs.reduce((blog, max) => blog.likes > max.likes ? blog : max, blogs[0])

  max.title = result.title
  max.author = result.author
  max.likes = result.likes

  return max
}

const totalLikes = (blogs) => {
  if (Array.isArray(blogs) && blogs.length > 0) {
    return blogs.reduce(
      (acc, cur) => acc + cur.likes, 0
    )
  } else {
    return 1
  }
}

module.exports = {
  favoriteBlog,
  totalLikes
}
