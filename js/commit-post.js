
// Commits a new post to Blogger database
// Uses GAPI client and Oauth2 for authorization



function commitPostToBlog(postData){
  if(postData.title == ''){
    console.log('Post must included a Title')
    return
  }
  else if (postData.content == ''){
    console.log('Post body cannot be empty')
    return
  }
  console.log('committing post to server... standby...')
  gapi.client.blogger.posts.insert({
    'blogId': '1909841251606783944',
    'title': postData.title,
    'content': postData.content
  })
  .then(function(response) {
    console.log('Post has been commited successfully!')
    responseInfo = JSON.stringify(response)
    //console.log(responseInfo)
    vm_postList.$data.posts = [] // reset array / refactoring in v2
    getPosts()
  }, function(reason) {
    console.log('Error' + reason);
  })
}