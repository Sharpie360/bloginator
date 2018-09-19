
const vm_postDisplay = new Vue({
  el: '#view-post',
  data: {
    id: '',
    title: '',
    subtitle: '',
    date: '',
    body: '',
    viewMode: true
  }
})

const vm_postCreate = new Vue({
  el: '#create-post',
  data: {
    title: '',
    subtitle: '',
    body: '',
    createMode: false,
    editMode: false
  },
  methods: {
    saveDraft: function(){
      console.log('feature coming soon!')
      postData = {
        title: this.title,
        subtitle: this.subtitle,
        body: this.body
      }
      localStorage.setItem('postData', postData)
      // gets it to object Object in LS
      // coming back to this
    },
    commitPost: function(){
      postData = {
        title: this.title,
        content: hackifyPostBody(this.subtitle, this.body)
      }
      console.log(postData)
      commitPostToBlog(postData)
    },
    cancelPost: function(){
      if(confirm('Are you sure you want to cancel?')){
        // set state to displayMode
        vm_postDisplay.$data.viewMode = true
        vm_postCreate.$data.createMode = false
        vm_postCreate.$data.editMode = false
        document.getElementById('edit-post').disabled = false;

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