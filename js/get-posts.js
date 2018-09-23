
const btn_getPosts = document.getElementById('get-posts')

const blogPostDisplay = document.getElementById('content')
const postList = document.getElementById('post-list')

// using let instead of const to be able to empty and fill the array as needed. YES. it is mutable. for this app its acceptable
let posts = []
function getPosts(){
  fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    posts.unshift(...data.items)
    vm_postDisplay.$data.id = posts[0].id
    vm_postDisplay.$data.title = posts[0].title
    vm_postDisplay.$data.date = setLocalDate(posts[0].published)
    vm_postDisplay.$data.body = posts[0].content;
  });
}
