const express       = require('express')
const path          = require('path')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const routeList     = require('./app-server/route-list')

const app = express()
      app.use(bodyParser.json())
      app.use(cors())
      app.use(routeList)
 
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
      })

app.use(express.static(path.join(__dirname, "./dist/project-app/")))

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname,'./dist/project-app/index.html'))
})

const port = process.env.PORT || 5000

const server = app.listen(port, (req, res) => {
  console.log('running ', port)
})