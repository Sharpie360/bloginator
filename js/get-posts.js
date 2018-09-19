
const btn_getPosts = document.getElementById('get-posts')

const blogPostDisplay = document.getElementById('content')
const postList = document.getElementById('post-list')

const posts = []

fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  posts.unshift(...data.items)
  vm_postDisplay.$data.title = posts[0].title
  vm_postDisplay.$data.date = setLocalDate(posts[0].published)
  vm_postDisplay.$data.body = posts[0].content;
});
