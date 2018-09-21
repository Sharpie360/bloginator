
function commitPostToBlog(postData){
  const request = new Request(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`, {
    method: 'POST',
    headers: new Headers({
      // temp access key - now invalid
      'Authorization': 'Bearer ya29.GlseBkURyQHFiZ1RFo2oA6Deo7q4AK4_SNbxMtsrgKxEktsteL2w3GC-8EprhkQ33vSuKuUwxcOSPqMssMW-Hp6fvT_ZzePFpKkrIq18DeBMUG8j_Wn1NyEvjoi7',
      'Content-Type':'application/json'
    }),
    body: JSON.stringify(postData)
  })
  fetch(request)
  .then(response => response.json())
  .then(data => console.log(data))
}