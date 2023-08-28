const events = require('events')
const encryptedMessageGenerator = require('./generator')

const eventObj = new events()

eventObj.on('custom', (data) => {
    console.log(data)
} )



eventObj.emit('custom', { name: "Nazim", session: 120 })
eventObj.emit('custom', { name: "Nazim", session: 120 })



// Timing function to be used here.....

const setIntervalId = setInterval( encryptedMessageGenerator, 1000 )
