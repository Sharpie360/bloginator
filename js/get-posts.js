
const btn_getPosts = document.getElementById('get-posts')

const blogPostDisplay = document.getElementById('content')
const postList = document.getElementById('post-list')

// using let instead of const to be able to empty and fill the array as needed. YES. it is mutable. for this app its acceptable
// let posts = []
function getPosts(){
  fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    vm_postList.$data.posts.unshift(...data.items)
    setContentOnAction()
  });
}

function setContentOnAction(){
  vm_postDisplay.$data.id = vm_postList.$data.posts[0].id
  vm_postDisplay.$data.title = vm_postList.$data.posts[0].title
  vm_postDisplay.$data.date = setLocalDate(vm_postList.$data.posts[0].published)
  vm_postDisplay.$data.body = vm_postList.$data.posts[0].content;
}