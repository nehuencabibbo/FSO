const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => total += blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  const mostLikedBlog = blogs.reduce((mostLikedBlog, blog) => 
    (mostLikedBlog.likes || 0) > blog.likes ? mostLikedBlog : blog
  , {})

  const mostLikedBlogMapped = {
    title: mostLikedBlog.title,
    author: mostLikedBlog.author,
    likes: mostLikedBlog.likes
  }

  return mostLikedBlogMapped
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null
  const authorBlogCount = new Map()

  blogs.forEach((blog) => {
    let blogCount = authorBlogCount.get(blog.author) 

    authorBlogCount.set(blog.author, blogCount ? blogCount + 1 : 1)
  })

  let authorWithTheMostBlogs = {}
  for (const [author, blogs] of authorBlogCount.entries()) {
    if (blogs > (authorWithTheMostBlogs.blogs || 0)) {
      authorWithTheMostBlogs = {
        author: author,
        blogs: blogs
      }
    }
  }

  return authorWithTheMostBlogs
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null
  const authorLikeCount = new Map()

  blogs.forEach((blog) => {
    let likeCount = authorLikeCount.get(blog.author) 

    authorLikeCount.set(blog.author, likeCount ? likeCount + blog.likes : blog.likes)
  })

  let authorWithTheMostLikes = {}
  for (const [author, likes] of authorLikeCount.entries()) {
    if (likes > (authorWithTheMostLikes.likes || 0)) {
      authorWithTheMostLikes = {
        author: author,
        likes: likes
      }
    }
  }

  return authorWithTheMostLikes
}

module.exports = {dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes}