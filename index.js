const express = require('express')
const { defaultMaxListeners } = require('stream')
const app = express()
const port = 5000

app.set ('view engine', 'hbs')
app.set ('views', 'src/views')

app.use ('/assets', express.static('src/assets'))

app.get('/', home)
app.get('/contact', contact)
app.get('/addproject', project)
app.get('/project-detail', projectDetail)
app.get('/testimonial', testimonial)



function home(req, res){
    res.render('index')
}

function contact(req, res){
    res.render('contact')
}

function project(req, res) {
    const data = [
        {
            id: 1,
            title: "Data 1",
            content: "Content 1"
        },
        {
            id: 2,
            title: "Data 2",
            content: "Content 2"
        },
        {
            id: 3,
            title: "Data 3",
            content: "Content 3"
        }
    ]
    res.render('addproject', { data })
}

function projectDetail(req, res){
    const { id } = req.params

    res.render('project-detail', { id })
}   

function testimonial(req, res){ 
    res.render('testimonial')
}

app.listen (port, () => {
    console.log('server berjalan di ${port}')
})