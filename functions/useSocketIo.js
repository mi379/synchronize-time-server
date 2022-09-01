import {exec} from 'child_process'

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


export default function(socket){
  console.log('connected..')
  socket.on('sync',(ts) => {
   return parseTimestamp(
      new Date(ts)
    )
  })
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