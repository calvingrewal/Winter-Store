const express = require('express')
const path = require('path')

const app = express()

app.get('/api/products', (req,res) => {

  return res.json({
    products: [
      {
        id: 0,
        name: 'Jacket',
        description: 'An outdoor jacket to protect you from the elements',
        img: 'jacket.jpg'
      },
      {
        id: 1,
        name: 'Boots',
        description: 'Rugged boots, perfect for winter',
        img: 'boots.jpg'
      },
      {
        id: 2,
        name: 'Sweater',
        description: 'A nice and cozy sweater, perfect for winter',
        img: 'sweater.jpg'
      },
      {
        id: 3,
        name: 'Gloves',
        description: 'Warm gloves to keep your hands warm',
        img: 'gloves.jpg'
      },
      {
        id: 4,
        name: 'Googles',
        description: 'Protect your eyes from the sun\'s harsh rays',
        img: 'goggles.jpg'
      },
      {
        id: 5,
        name: 'Water Bottle',
        description: 'A bottle to keep you hydrated throughout the day',
        img: 'water-bottle.jpg'
      },

    ]
  })
})
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || 8081, () => {
  console.log('**************server running on Port 8081**************');
})
