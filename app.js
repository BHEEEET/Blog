fetch(`./Posts/`)
  .then((response) => response.text())
  .then((data) => {
    //Parse the data to html
    var parser = new DOMParser();
    var posts = parser.parseFromString(data, "text/html");

    // Get the files
    var files = posts.querySelector("ul");
    var li = files.querySelectorAll("li");
    var content = document.querySelector("main");

    //Seperate titles and push them in a array
    var list = [];
    for (var i = 0; i < li.length; i++) {
      var text = li[i].innerText;

      //split the innerText from ".md"
      var titles = text.split(".md");
      var title = titles[0];
      list.push(title);
      var name = li[i].getElementsByClassName("name");

      //change the innerHTML of the "name" span's
      name.item(0).innerHTML = title;
      content.append(li[i]);
    }

    //Parse data throught .md parser
    fetch(`./Posts/sample.md`)
      .then((response) => response.text())
      .then((md) => {
        var mark = marked.parse(md);
        //console.log(mark);
      });

      fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts`)
      .then((response) => response.json())
      .then((GitPosts) => {
        GitPosts.forEach(Post => {
          Post.name = Post.name.slice(0,(Post.name.length - 3))
        });
        console.log("Title lists")
        console.log(GitPosts);
      });
      let Gcontent= [];
      fetch(`https://api.github.com/repos/KRKBHEET/Blog/contents/Posts/sample.md?ref=master`)
      .then((response) => response.json())
      .then((md) => {
        console.log("__________________")
        var decoded = atob(md.content)
        console.log(decoded)
      });


  });
