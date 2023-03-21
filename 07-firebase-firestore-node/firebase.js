const {initializeApp, cert} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')

const serviceAccount = require('./sandwich-app-808be-firebase-adminsdk-mare3-65cfc1b6cb.json')

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()

module.exports = {db}