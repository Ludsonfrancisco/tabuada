const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuada')
//routes
app.use('/', indexRouter)
app.use('/tabuadas', tabuadaRouter)


//css
app.use(express.static(path.join(__dirname, 'public')))

//view engine
app.set('viwes', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(port, console.log('running'))