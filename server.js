const express = require('express')
const path = require('path')

const app = express()

app.get('/api/products', (req,res) => {

  return res.json({
      50289449: {
        id: 50289449,
        name: 'Jacket',
        description: 'An outdoor jacket to protect you from the elements',
        img: 'jacket.jpg',
        price: 25
      },
      39944168: {
        id: 39944168,
        name: 'Boots',
        description: 'Rugged boots, perfect for winter',
        img: 'boots.jpg',
        price: 35
      },
      79871482: {
        id: 79871482,
        name: 'Sweater',
        description: 'A nice and cozy sweater, perfect for winter',
        img: 'sweater.jpg',
        price: 20
      },
      14211949: {
        id: 14211949,
        name: 'Gloves',
        description: 'Warm gloves to keep your hands warm',
        img: 'gloves.jpg',
        price: 15
      },
      68868330: {
        id: 68868330,
        name: 'Googles',
        description: 'Protect your eyes from the sun\'s harsh rays',
        img: 'goggles.jpg',
        price: 20
      },
      22732905: {
        id: 22732905,
        name: 'Water Bottle',
        description: 'A bottle to keep you hydrated throughout the day',
        img: 'water-bottle.jpg',
        price: 5
      },

  })
})
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || 8081, () => {
  console.log('**************server running on Port 8081**************');
})
