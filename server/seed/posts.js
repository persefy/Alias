const db = require('../db')
const { CondoUnit, UnitRep, UnitStyle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //unit styles -- update names once styles are named!
  const bensyCottage = await UnitStyle.find({name: 'Bensy Cottage'})
  const tammyHome = await UnitStyle.find({name: 'Tammy Home'})
  const georgieFlair = await UnitStyle.find({name: 'Georgie Flair'})
  const dorseyVilla = await UnitStyle.find({name: 'Dorsey Villa'})

  //unit reps
  const robertPence = await UnitRep.find({name: 'Robert Pence'})
  const emilieLark = await UnitRep.find({name: 'Emilie Lark'})
  const teddyJones = await UnitRep.find({name: 'Teddy Jones'})
  const laraGomez = await UnitRep.find({name: 'Lara Gomez'})
  
  const condoUnits = [
    {
      unitRep_id: robertPence[0]._id,
      unitStyle_id: bensyCottage[0]._id,
      unitNumber: 1,
      
    },  ]
 
    await CondoUnit.insertMany(condoUnits)
  
    console.log('Created condominium units!')
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  
  run()