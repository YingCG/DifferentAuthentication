const base64 = require('base-64')
 
function decodeCredentials(authHeader){
    const encodedCredentials = authHeader
    .trim()
    .replace(/Basic\s+/i,'')
    console.log(encodedCredentials)

    const decodeCredentials = base64.decode(encodedCredentials)
    console.log(decodeCredentials)

    return decodeCredentials.split(':')
    
}

module.exports = function authMiddleware(req, res, next){
    const [username, password] = decodeCredentials(req.headers.authorization || '')
    console.log(username, password)
    if (username === 'admin' && password === 'admin'){
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="user_pages"')
    res.status(401).send('Authentication required.')
 }