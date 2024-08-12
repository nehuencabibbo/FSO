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

module.exports = {dummy, totalLikes, favoriteBlog}