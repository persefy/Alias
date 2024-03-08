const express = require('express');
//morgan
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')

//initial declaration of constants for condo unit, unit reps, unit styles controllers
const { CondoUnit, UnitRep, UnitStyle } = require('./models')
const condoUnitController = require('./controllers/condoUnitController')
const unitRepController = require('./controllers/unitRepController')
const unitStyleController = require('./controllers/unitStyleController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express()
//
app.use(cors())
app.use(express.json())
//morgan
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('This is the landing page!'))

//Routes for Condo Unit (CondoUnit)
app.get('/condoUnit', condoUnitController.getAllCondoUnit)
app.get('/condoUnit/:id', condoUnitController.getCondoUnitById)
app.post('/condoUnit', condoUnitController.createCondoUnit)
app.put('/condoUnit/:id',condoUnitController.updateCondoUnit)
app.delete('/condoUnit/:id',condoUnitController.deleteCondoUnit)

//Routes for Unit Rep (UnitRep)
app.get('/unitRep', unitRepController.getAllUnitRep)
app.get('/unitRep/:id', unitRepController.getUnitRepById)
app.post('/unitRep', unitRepController.createUnitRep)
app.put('/unitRep/:id',unitRepController.updateUnitRep)
app.delete('/unitRep/:id',unitRepController.deleteUnitRep)

//Routes for Unit Style (UnitStyle)
app.get('/unitStyle', unitStyleController.getAllUnitStyle)
app.get('/unitStyle/:id', unitStyleController.getUnitStyleById)
app.post('/unitStyle', unitStyleController.createUnitStyle)
app.put('/unitStyle/:id',unitStyleController.updateUnitStyle)
app.delete('/unitStyle/:id',unitStyleController.deleteUnitStyle)

//catch error routes
app.get('*', (req, res) => {
    res.send('404 Not Found')
  })