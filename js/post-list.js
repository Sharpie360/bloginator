// vanillaJS script
postList.addEventListener('click', function(e){
  console.log(e.target)
  if (e.target.parentElement.classList.contains('pl-link')){

    targetBlogID = e.target.parentElement.dataset.postid;
    console.log(targetBlogID)
    // loop thru posts and find matching id
    for (let i = 0; i < posts.length; i++){
      if (targetBlogID === posts[i].id){
        newContent = posts[i].content;
        console.log(newContent)
        // vanilla js
        // blogPostDisplay.innerHTML = posts[i].content;

        //vue.js
        vm.$data.body = posts[i].content;
      }
    }
  }
})

// vm_postList = new Vue({
//   el: '#sidebar',
//   data: {
//     posts: posts
//   }
// })