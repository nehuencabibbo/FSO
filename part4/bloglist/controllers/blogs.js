const Blog = require('../models/blog')

// The router is in fact a middleware, that can be used for defining 
// "related routes" in a single place, which is typically placed in its 
// own module.
const blogRouter = require('express').Router()

blogRouter.get('/', (_, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = blogRouter