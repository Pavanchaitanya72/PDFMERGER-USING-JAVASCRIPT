const express = require('express')
const path = require('path')
const multer  = require('multer')
const {mergePdfs} = require('./merge.mjs')
const upload = multer({ dest: 'uploads/' })
const app = express()
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})


app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  console.log(req.files)
  await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect("http://localhost:3000/static/merged.pdf" )
  // res.send ({data: req.files})
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})
// app.post('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, "templates/index.html"))
// })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})