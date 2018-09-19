
vm_postList = new Vue({
  el: '#sidebar',
  data: {
    posts: posts
  },
  methods: {
    getSubs: function(post){
      if(post == ''){
        console.log('no post available, please check your code and try again.')
      } else {
        const text = post.content;
        // closing </h1> tag
        const stringToMatch = '(<\\/h2>)';
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
    },
    setContent: function(post){
      vm_postDisplay.$data.id = post.id
      vm_postDisplay.$data.title = post.title
      vm_postDisplay.$data.date = setLocalDate(post.published)
      vm_postDisplay.$data.body = post.content
    }
  }
})

function setLocalDate(date){
  newDate = new Date(date);
  cleanedDate = newDate.toDateString()
  return cleanedDate
}