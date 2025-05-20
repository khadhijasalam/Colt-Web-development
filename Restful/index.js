const express=require('express');
const app= express();
const path= require('path');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

const comments=[{
  username: 'Todd',
  comment: 'lol'
},
{
  username: 'Bodd',
  comment: 'Cant wait to get this over!'
},
{
  username: 'Tera',
  comment: 'Cotta'
}

]

app.get('/comments',(req,res)=>{
  // res.send(comments)
  // const {name,comment}=comments
  res.render('comments/index',
    {comments}
  )
})
app.get('/comments/new',(req,res)=>
{
  res.render('comments/new')
})

app.post('/comments',(req,res)=>{
  // console.log(req.body);
  const {username,comment}=req.body
  comments.push({username,comment})
  console.log(username,comment)
//  res.send('It worked')
//redirect sts-302
res.redirect('/comments')
})


app.listen('3005',(req,res)=>{
  console.log('listening on port 3005')
})