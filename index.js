const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'shop')))

app.get('/first', (req, res) =>{
  res.sendFile(path.join(__dirname,'/shop/first.html'))
  console.log('__dirname',__dirname)
})

app.listen(3000,() =>{
  
})
