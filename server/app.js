import express from 'express'
const app = express()

app.get('/search', (req, res) => {
  const key = req.params
  res.json({success: true, data: { value: `${key}-${new Date()}` }})
})

app.listen(7777)
