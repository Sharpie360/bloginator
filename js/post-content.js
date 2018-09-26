
const vm_postDisplay = new Vue({
  el: '#view-post',
  data: {
    id: '',
    title: 'Welcome to Bloginator',
    subtitle: '',
    date: '',
    body: 'built with the power of Vue.js and google\'s api client',
    viewMode: true // refactor to global state in V2
  }
})

const vm_postCreate = new Vue({
  el: '#create-post',
  data: {
    id: '',
    title: '',
    subtitle: '',
    body: '',
    createMode: false, // refactor to global state in V2
    editMode: false, // refactor to global state in V2
    displayUserMsg: false
  },
  methods: {


    saveDraft: function(){
      // grab values from inputs
      postData = {
        title: this.title,
        subtitle: this.subtitle,
        body: this.body
      }
      // check to see if values are empty
      if(!postData.title || !postData.body){
        setMessage('error', 'Saving a draft requires at least a title and body')
        return
      }
      // checks if existing draft in LS, confirm overwrite, or return
      if(localStorage.getItem('savedDraftData')){
        preview = JSON.parse(localStorage.getItem('savedDraftData'))
        if(confirm(`Overwrite last saved draft? Title: ${preview.title} | Body: ${preview.body}`)){
          savedDraft_LS = JSON.stringify(postData)
          localStorage.setItem('savedDraftData', savedDraft_LS)
          setMessage('success', 'You draft was successfully saved')
        } else {
          return
        }
      } else {
        // if no existing draft in LS, just save draft
        savedDraft_LS = JSON.stringify(postData)
        localStorage.setItem('savedDraftData', savedDraft_LS)
        setMessage('success', 'You draft was successfully saved')
      }
    },
    //  check for draft in LS, if yes, load draft
    loadDraft: function(){
      if(!localStorage.getItem('savedDraftData')){
        setMessage('warning', "It doesn't look like there is a saved draft available")
      }
      let loadedDraft_LS = localStorage.getItem('savedDraftData')
      formattedDraft = JSON.parse(loadedDraft_LS)
      this.title = formattedDraft.title
      this.subtitle = formattedDraft.subtitle
      this.body = formattedDraft.body
      setMessage('success', "Your draft has been loaded for editing")
    },


    // commit post to blogger server
    commitPost: function(){
      // check that all fields are filled out
      if(!this.title && !this.subtitle && !this.body){
        setMessage('error', "All fields are required to commit a post to your blog!")
        return
      }
      postData = {
        title: this.title,
        content: hackifyPostBody(this.subtitle, this.body)
      }
      // console.log(postData)
      commitPostToBlog(postData)
      setMessage('success', "Congrats! Your post has been successfully committed to your blog!")
      let vm = this
      setTimeout(function(){
        vm.createMode = false
        vm.editMode = false
  
        vm_postDisplay.viewMode = true
        vm_actionBar.$refs.editBtn.disabled = false
        vm_actionBar.$refs.deleteBtn.disabled = false
      }, 2000)
    },


    updatePost: function(){
      if(!this.title && !this.subtitle && !this.body){
        setMessage('error', "Must have all fields filled out to commit update!")
        return
      }
      postData = {
        postId: this.id,
        title: this.title,
        content: hackifyPostBody(this.subtitle, this.body)
      }
      pushUpdateToBlog(postData)
      setMessage('success', "Congrats! Your updates been successfully committed to your post!")
      let vm = this
      setTimeout(function(){
        vm.createMode = false
        vm.editMode = false
  
        vm_postDisplay.viewMode = true
        vm_actionBar.$refs.editBtn.disabled = false
        vm_actionBar.$refs.deleteBtn.disabled = false
      }, 2000)
    },


    cancelPost: function(){
      if(confirm('Are you sure you want to cancel?')){
        // set state to displayMode
        vm_postDisplay.$data.viewMode = true
        this.createMode = false
        this.editMode = false
        vm_actionBar.$refs.editBtn.disabled = false
        vm_actionBar.$refs.deleteBtn.disabled = false

        console.log('leaving createMode |>>>| entering displayMode')
      } else {
        return
      }
    }
  }
})

function hackifyPostBody(subtitle, body){
  let taggedSubtitle = `<h2 class="sub-title">${subtitle}</h2><br>`;
  let fixed_PostBody = taggedSubtitle + body;
  return fixed_PostBody
}