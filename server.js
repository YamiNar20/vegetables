require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Vegetable = require('./models/ vegetable')
const PORT = process.env.Port || 3000


const app = express()


app.get('/', (req, res) => {
    res.send('')
  })

  app.use(express.urlencoded({ extended: true }))// build a ssr website
  // app.use(express.json()) //build an api

  
  mongoose.connect(processs.env.MONGO_URI)
  mongoose.connection.once('open', () =>{
      console.log('connected to mongodb')
  })
  
//INDUCES




//INDEX
//list all vegetable




//NEW
//show the user a form to fill out to create  a vegetable

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})


//DELETE
//backend only functionality that is used tod delete a vegetable





//UPDATE
//backend only functionality that is used to update a vegetable






//CREATE
//backend only functionality that is used to create a vegetable

app.post('/vegetables', async (req, res)) => {
    if(req.body.readyToEat ==='on'){
        req.body.readyToEat = true
    }else {
        req.body.readyToEat = false
    }}
    try {
       const createdVegetable = await Vegetable.create(req.body)
       res.send(createdVegetable)
    }catch(error){
        res.status(400).send ({message: error.message})
    }



//EDIT
// show you a form that will allow you to edit the vegetable


//SHOW
// shows you the individual vegetable






app.listen(PORT, () =>{
    console.log('Yass the Port at ${PORT} is lit')
})
