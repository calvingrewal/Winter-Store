const express = require('express')
const path = require('path')

const app = express()

app.get('/api/products', (req,res) => {
  console.log('received response api');
  return res.json({
    date: Date.now()
  })
})
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || 8081, () => {
  console.log('**************server running on Port 8081**************');
})
