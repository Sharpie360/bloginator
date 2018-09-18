
const btn_getPosts = document.getElementById('get-posts')

const blogPostDisplay = document.getElementById('content')
const postList = document.getElementById('post-list')

const posts = []

fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  posts.unshift(...data.items)
  loadPosts();
});

function loadPosts(){
  vm.$data.body = posts[0].content;
  let list = '';
  posts.forEach(post => {
    getSubtitle(post.content)
    list += `
    <li class="post-list-item">
      <a href="#" data-postID="${post.id}" class="pl-link">
        <h3 class="pl-item-title">${post.title}</h3>
        <span class="pl-item-subtitle">${subtitle}</span>
      </a>
    </li>`
  })
  postList.innerHTML = list;
}


function getSubtitle(post){
  if(post == ''){
    console.log('no post available, please check your code and try again.')
  } else {
    const text = post;
    // closing </h1> tag
    const stringToMatch = '(<\\/h1>)';
    // searches post content for closing h1 tag
    const regex = new RegExp(stringToMatch, ["i"]);
    const match = text.split(regex)
    if (match != null) {
      // console.log(match)
      subtitleString = match.splice(0, 2).join('')
      // create ghost dom element
      let ghost = document.createElement('span')
      //set ghost html to 
      ghost.innerHTML = subtitleString
      subtitle = ghost.textContent
      return subtitle
    } else {
      subtitle = 'No Subtitle Available'
    }
  }
}



// setTimeout(() => {getSubtitle(posts[0].content)}, 500)