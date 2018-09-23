
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
    draftSaved: false

  },
  methods: {
    saveDraft: function(){
      postData = {
        title: this.title,
        subtitle: this.subtitle,
        body: this.body
      }
      if(postData.title || postData.body == ''){
        alert('please fill out at least the title and body')
        return
      }
      if(localStorage.getItem('savedDraftData')){
        preview = JSON.parse(localStorage.getItem('savedDraftData'))
        if(confirm(`Overwrite last saved draft? Title: ${preview.title} | Body: ${preview.body}`)){
          savedDraft_LS = JSON.stringify(postData)
          localStorage.setItem('savedDraftData', savedDraft_LS)
        } else {
          return
        }
      } else {
        savedDraft_LS = JSON.stringify(postData)
        localStorage.setItem('savedDraftData', savedDraft_LS)
      }
    },
    loadDraft: function(){
      let loadedDraft_LS = localStorage.getItem('savedDraftData')
      formattedDraft = JSON.parse(loadedDraft_LS)
      vm_postCreate.$data.title = formattedDraft.title
      vm_postCreate.$data.subtitle = formattedDraft.subtitle
      vm_postCreate.$data.body = formattedDraft.body
    },
    commitPost: function(){
      // check that all fields are filled out
      if(!this.title && !this.subtitle && !this.body){
        alert('Must have all fields fille out to commit post!')
        return
      }
      postData = {
        title: this.title,
        content: hackifyPostBody(this.subtitle, this.body)
      }
      // console.log(postData)
      commitPostToBlog(postData)
    },
    cancelPost: function(){
      if(confirm('Are you sure you want to cancel?')){
        // set state to displayMode
        vm_postDisplay.$data.viewMode = true
        vm_postCreate.$data.createMode = false
        vm_postCreate.$data.editMode = false
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