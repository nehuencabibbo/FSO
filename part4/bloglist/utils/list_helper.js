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
    if (authorBlogCount.has(blog.author)) {
      authorBlogCount.set(blog.author, authorBlogCount.get(blog.author) + 1)
    } else {
      authorBlogCount.set(blog.author, 1)
    }
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

module.exports = {dummy, totalLikes, favoriteBlog, mostBlogs}