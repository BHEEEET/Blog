import dotenv from 'dotenv';

var content = document.querySelector("main");
let li;
let a;
//Parse data throught .md parser
fetch(`./Posts/sample.md`)
  .then((response) => response.text())
  .then((md) => {
    var mark = marked.parse(md);
    //console.log(mark);
  });

fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts/`, {
  'headers': {
    'Authorization': process.env.GITHUB_ACCES_TOKEN
  }
})
  .then((response) => response.json())
  .then((GitPosts) => {
    //Itterating the json
    GitPosts.forEach(Post => {
      //Removing the .md from titles
      Post.name = Post.name.slice(0, (Post.name.length - 3))

      //Creating the elements 
      li = document.createElement("li");
      a = document.createElement("a");

      //Appending the titles
      li.append(a);
      a.innerText = Post.name;
      a.href = Post.path;
      content.append(li);
      fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts/${Post.name}.md?ref=master`, {
        'headers': {
          'Authorization': process.env.GITHUB_ACCES_TOKEN
        }
      })
        .then((response) => response.json())
        .then((md) => {

          //Decode base64
          var decoded = atob(md.content);
          console.log(Post.name)
          console.log("__________________");
          console.log(decoded);
        });
    });
    console.log("Title lists");
    console.log(GitPosts);
    a.href = "template.html"
    console.log(li)
    return GitPosts;
  });