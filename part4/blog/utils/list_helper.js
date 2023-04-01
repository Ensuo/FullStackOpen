const dummy = (blogs) => {
    return 1
}

const allLikes = (blogs) => {
    return blogs.reduce(
        (acc, cur) =>  acc + cur.likes, 0
    )
}

module.exports = {
    dummy,
    allLikes
}