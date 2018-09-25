

function pushUpdateToBlog(postData){
  gapi.client.blogger.posts.patch({
    'kind': 'blogger#post',
    'blogId': blogId,
    'postId': postData.postId,
    'title': postData.title,
    'content': postData.content

  }).then(function(response){
    responseInfo = JSON.stringify(response)
    vm_postList.$data.posts = [] // reset array / refactoring in v2
    getPosts()
  }, function(reason){
    setMessage('error', "Uh-oh.. It seems there was an error, please try again")
    console.log('There\'s been an error, please try again.. ' + reason)
  })
}


