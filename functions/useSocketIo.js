import {exec} from 'child_process'


export default function useSocket(socket){
  socket.on('connect',(client) => {
    console.log('connected..')
    client.on('sync',(ts) => {
      return parseTimestamp(
        new Date(ts)
      )
    })
  })
}

async function synchronizeTime(cmd){
  try{
    await exec(
      cmd
    )
  }
  catch(err){
    console.log(
      err
    )
  }
}


function parseTimestamp(time){
  return setCmdCommand(
    time.getHours(),
    time.getMinutes()
  )
}

function setCmdCommand(h,m){
  return synchronizeTime(
    `time = ${h}:${m}`
  )
}