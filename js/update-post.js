

function pushUpdateToBlog(postData){
  gapi.client.blogger.posts.patch({
    'kind': 'blogger#post',
    'blogId': blogId,
    'postId': postData.postId,
    'title': postData.title,
    'content': postData.content

  }).then(function(response){
    responseInfo = JSON.stringify(response)
    console.log('Your post has been successfully updated!')
  }, function(reason){
    console.log('There\'s been an error, please try again.. ' + reason)
  })
}


