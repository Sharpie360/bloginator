
const vm_postDisplay = new Vue({
  el: '#view-post',
  data: {
    title: '',
    date: '',
    body: '',
    createMode: true
  }
})

const vm_postCreate = new Vue({
  el: '#create-post',
  data: {
    title: '',
    subtitle: '',
    body: '',
    createMode: vm_postDisplay.$data.createMode
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
      console.log('feature coming soon!')
    },
    cancelPost: function(){
      if(confirm('Are you sure you want to cancel?')){
        // set state to displayMode
        vm_postDisplay.$data.createMode = false
        console.log('leaving state: createMode |>>>| entering state: displayMode')
      } else {
        return
      }
    }
  }
})