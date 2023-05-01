//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

// var posts=[];

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare. ";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesqueLacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.Lacus vel facilisis volutpat est velit egestas dui id ornare.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var posts=[];

app.get("/",function(req,res){
  res.render("home",{
    startingContent:homeStartingContent,
    posts:posts

  });
})




app.get("/about",function(req,res){
  res.render("about",{
    boutContent:aboutContent
  });
})


app.get("/contact",function(req,res){
res.render("contact",{
  contactContent:contactContent
});
})



app.get("/compose",function(req,res){
  res.render("compose")
})

app.get("/posts/:day",function(req,res){
  const requestedTittle=_.lowerCase(req.params.day) ;


  posts.forEach(function(post){
    const storedTittle=_.lowerCase(post.tittle);
    if(requestedTittle===storedTittle){
      console.log("match Found!");
      res.render("post", {
        tittle: post.tittle,
        content: post.content
      });
    }
  })
})

app.get("/posts/:day",function(req,res){
  const requestedTittle=_.lowerCase(req.params.day) ;


  posts.forEach(function(post){
    const storedTittle=_.lowerCase(post.tittle);
    // if(requestedTittle===storedTittle){
      console.log("match Found!");
      res.render("post", {
        tittle: post.tittle,
        content: post.content
      });
    // }
  })
})
app.post("/compose",function(req,res){
  const compose={
    tittle:req.body.write,
    content:req.body.bady
  }
  posts.push(compose);
  res.redirect("/");
})







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
