
const vm_actionBar = new Vue({
  el: '#action',
  data: {
    isSignedIn: false // refactor to global state in V2
  },
  methods: {
    createNewPost: function(){
      vm_postDisplay.$data.viewMode = false
      vm_postCreate.$data.createMode = true
      vm_postCreate.$data.editMode = false

      this.$refs.editBtn.disabled = true
      vm_actionBar.$refs.deleteBtn.disabled = true


      vm_postCreate.$data.title = ''
      vm_postCreate.$data.subtitle = ''
      vm_postCreate.$data.body = ''

    },
    editPost: function(){
      vm_postDisplay.$data.viewMode = false
      vm_postCreate.$data.createMode = false
      vm_postCreate.$data.editMode = true
      
      vm_postCreate.$data.id = vm_postDisplay.id
      vm_postCreate.$data.title = vm_postDisplay.title
      vm_postCreate.$data.subtitle = extractSubtitle(this.getBody())
      vm_postCreate.$data.body = parseBody(vm_postDisplay.body) 

    },
    getId: function(){
      return vm_postDisplay.$data.id
    },
    getTitle: function(){
      return vm_postDisplay.$data.title
    },
    getBody: function(){
      return vm_postDisplay.$data.body
    },
    deletePost: function(postId, postTitle){
      deletePostFromBlog(postId, postTitle)
    }
  }
})

function extractSubtitle(post){
  if(post == ''){
    console.log('no post available, please check your code and try again.')
  } else {
    const text = post;
    // closing </h2> tag
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
}

function parseBody(post){
  if(post == ''){
    console.log('no post available, please check your code and try again.')
  } else {
    const text = post;
    // closing </h2> tag
    const stringToMatch = '(<\\/h2>)';
    // searches post content for closing h1 tag
    const regex = new RegExp(stringToMatch, ["i"]);
    const match = text.split(regex)
    if (match != null) {
      // console.log(match)
      bodyString = match.splice(1, 2).join('')
      // create ghost dom element
      let ghost = document.createElement('span')
      //set ghost html to 
      ghost.innerHTML = bodyString
      parsedBody = ghost.textContent
      return parsedBody
    } 
  }
}