const express = require('express')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
  res.send('This is the index at /breads')
})

module.exports = breads

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  