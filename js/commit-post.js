
// Commits a new post to Blogger database
// Uses GAPI client and Oauth2 for authorization



function commitPostToBlog(postData){
  if(postData.title == ''){
    setMessage('warning', "Your post title cannot be empty")
    return
  }
  else if (postData.content == ''){
    setMessage('warning', "Your post body cannot be empty")
    return
  }
  console.log('committing post to server... standby...')
  gapi.client.blogger.posts.insert({
    'blogId': '1909841251606783944',
    'title': postData.title,
    'content': postData.content
  })
  .then(function(response) {
    responseInfo = JSON.stringify(response)
    //console.log(responseInfo)
    vm_postList.$data.posts = [] // reset array / refactoring in v2
    getPosts()
  }, function(reason) {
    setMessage('error', "Uh-oh.. It seems there was an error, please try again")
    console.log('Error' + reason);
  })
}