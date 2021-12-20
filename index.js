const express = require('express')
const path = require('path')
const PORT = 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  .get('/data', (req, res) => res.sendFile('./data/data.json', {root:__dirname}))
  .listen(PORT, () => console.log(`Listening on localhost:${ PORT }`))
