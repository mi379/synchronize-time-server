import cors from 'cors'
import express from 'express'
import requestLogger from 'morgan'
import origin from './keys/origin.js'


export default express().use(
  requestLogger(
    'dev'
  )
)
.use((req,res) => {
  res.status(404).send(
    'this server has no route'
  )
})