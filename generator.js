const crypto = require('crypto')
const data = require('./data')

const encryptedMessageGenerator = () => {

    const randomNameIndex = Math.round(Math.random() * 100)
    const randomOriginIndex = Math.round(Math.random() * 100)
    const randomDestinationIndex = Math.round(Math.random() * 100)




    const obj = {
        name: data.names[randomNameIndex],
        origin: data.cities[randomOriginIndex],
        destination: data.cities[randomDestinationIndex],
    }

    const secret_key = crypto.createHmac('sha256', 'node').update(JSON.stringify(obj)).digest('hex')

    const objWithSecretKey = {
        ...obj,
        secret_key
    }

    return objWithSecretKey

}

console.log(encryptedMessageGenerator())

module.exports = encryptedMessageGenerator