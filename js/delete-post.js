

function deletePostFromBlog(postId, postTitle) {
  if(confirm(`Are you sure you want to delete ${postTitle}`)){
    console.log("post deleted: " + postId, postTitle)
    gapi.client.blogger.posts.delete({
      'blogId': '1909841251606783944',
      'postId': postId
    })
    .then(function(response) {
      console.log(`Post "${postTitle}" has successfully been deleted!`)
      responseInfo = JSON.stringify(response)
    }, function(reason){
      console.log('Error ' + reason)
    })
  } else {
    return
  }
}