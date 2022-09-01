import http from 'http'
import app from '../app.js'
import origin from '../keys/origin.js'
import useSocketIo from '../functions/useSocketIo.js'
import * as socket from 'socket.io'

var httpServer = http.createServer(app)

httpServer.listen(process.env.PORT)

httpServer.on('listening',() => {
  console.log('ready to use')

})

httpServer.on('error',(err) => {
  console.log(err.message)
  return process.exit(1)
})

app.socket = new socket.Server(
  httpServer,{cors:{origin}}
)  
.on('connect',(client) => {
  return useSocketIo(
    client
  )
})
