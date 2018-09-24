
const vm_postDisplay = new Vue({
  el: '#view-post',
  data: {
    id: '',
    title: 'Welcome to Bloginator',
    subtitle: '',
    date: '',
    body: 'Please sign in to continue...',
    viewMode: true // refactor to global state in V2
  }
})

const vm_postCreate = new Vue({
  el: '#create-post',
  data: {
    title: '',
    subtitle: '',
    body: '',
    createMode: false, // refactor to global state in V2
    editMode: false, // refactor to global state in V2

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
        alert('please fill out at least the title and body')
        return
      }
      // checks if existing draft in LS, confirm overwrite, or return
      if(localStorage.getItem('savedDraftData')){
        preview = JSON.parse(localStorage.getItem('savedDraftData'))
        if(confirm(`Overwrite last saved draft? Title: ${preview.title} | Body: ${preview.body}`)){
          savedDraft_LS = JSON.stringify(postData)
          localStorage.setItem('savedDraftData', savedDraft_LS)
        } else {
          return
        }
      } else {
        // if no existing draft in LS, just save draft
        savedDraft_LS = JSON.stringify(postData)
        localStorage.setItem('savedDraftData', savedDraft_LS)
      }
    },
    //  check for draft in LS, if yes, load draft
    loadDraft: function(){
      if(!localStorage.getItem('savedDraftData')){
        alert('there is no saved draft available')
      }
      let loadedDraft_LS = localStorage.getItem('savedDraftData')
      formattedDraft = JSON.parse(loadedDraft_LS)
      this.title = formattedDraft.title
      this.subtitle = formattedDraft.subtitle
      this.body = formattedDraft.body
    },
    // commit post to blogger server
    commitPost: function(){
      // check that all fields are filled out
      if(!this.title && !this.subtitle && !this.body){
        alert('Must have all fields filled out to commit post!')
        return
      }
      postData = {
        title: this.title,
        content: hackifyPostBody(this.subtitle, this.body)
      }
      // console.log(postData)
      commitPostToBlog(postData)
      this.createMode = false
      this.editMode = false

      vm_postList.$data.posts = [] // reset array / refactoring in v2
      getPosts()
      vm_postDisplay.viewMode = true
      vm_actionBar.$refs.editBtn.disabled = false
    },
    cancelPost: function(){
      if(confirm('Are you sure you want to cancel?')){
        // set state to displayMode
        vm_postDisplay.$data.viewMode = true
        this.createMode = false
        this.editMode = false
        vm_actionBar.$refs.editBtn.disabled = false

        console.log('leaving state: createMode |>>>| entering state: displayMode')
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