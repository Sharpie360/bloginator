
const API_KEY = 'AIzaSyA7PU1092yJ27gf9lgj_iOD5cpdn7K9Y64';

const userId = '16179518082151825482'

const blogId = '1909841251606783944'


const blog = document.getElementById('blog')

const posts = []
fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}`)
.then(response => response.json())
.then(data => posts.push(...data.items));


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



setTimeout(() => {getSubtitle(posts[0].content)}, 500)