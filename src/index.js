import express from 'express'

import app from './app.js'



app.listen(app.get('port'),() => {console.log("server")})