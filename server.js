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
        name: 'Pants',
        description: 'Waterproof pants to keep you warm and dry',
        img: 'pants.jpg'
      },
      {
        id: 2,
        name: 'Sweatshirt',
        description: 'A nice and cozy sweatshirt, perfect for winter',
        img: 'sweatshirt.jpg'
      },
      {
        id: 3,
        name: 'Gloves',
        description: 'Warm gloves to keep your hands warm',
        img: 'gloves.jpg'
      },
      {
        id: 4,
        name: 'Sunglasses',
        description: 'Protect your eyes from the sun\'s harsh rays',
        img: 'sunglasses.jpg'
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
