import http from 'http'
import express from 'express'
import origin from './keys/origin.js'
import useSocket from './functions/useSocketIo.js'
import {Server} from 'socket.io'


var httpServer = http.createServer(
  express().use((req,res) => {
  	res.status(200).send(
      'ready to serve'
  	)
  })
)

httpServer.listen(process.env.PORT)

httpServer.on('listening',() => {
  return useSocket(new Server(
    httpServer,{cors:{
      origin
    }}
  ))
})

