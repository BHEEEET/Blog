   var content = document.querySelector("main");
   import key from "./token.json" assert {type: 'json'};
    //Parse data throught .md parser
    fetch(`./Posts/sample.md`)
      .then((response) => response.text())
      .then((md) => {
        var mark = marked.parse(md);
        //console.log(mark);
      });

      fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts/`,{
        'headers': {
          'Authorization': key.GITHUB_ACCES_TOKEN 
        }
        })
      .then((response) => response.json())
      .then((GitPosts) => {
        GitPosts.forEach(Post => {
          Post.name = Post.name.slice(0,(Post.name.length - 3))
          let li = document.createElement("li");
          let a = document.createElement("a");
          li.append(a);
          a.innerText = Post.name;
          a.href = Post.path;
          content.append(li);
        });
        console.log("Title lists");
        console.log(GitPosts);
      });
      let Gcontent= [];
      fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts/sample.md?ref=master`,{
        'headers': {
          'Authorization': key.GITHUB_ACCES_TOKEN 
        }
        })
      .then((response) => response.json())
      .then((md) => {
        console.log("__________________");
        var decoded = atob(md.content);
        console.log(decoded);
      });
