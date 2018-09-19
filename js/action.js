const createBtn = document.getElementById('new-post')
const editBtn = document.getElementById('edit-post')
const deleteBtn = document.getElementById('delete-post')


const vm_actionBar = new Vue({
  el: '#action',
  data: {},
  methods: {
    createNewPost: function(){
      vm_postDisplay.$data.viewMode = false
      vm_postCreate.$data.createMode = true
      vm_postCreate.$data.editMode = false

      document.getElementById('edit-post').disabled = true;

      vm_postCreate.$data.title = ''
      vm_postCreate.$data.subtitle = ''
      vm_postCreate.$data.body = ''

    },
    editPost: function(post){
      console.log(post, 'feature coming soon!')
      vm_postDisplay.$data.viewMode = false
      vm_postCreate.$data.createMode = false
      vm_postCreate.$data.editMode = true
      
      vm_postCreate.$data.title = vm_postDisplay.title
      vm_postCreate.$data.body = vm_postDisplay.body
    },
    getId: function(){
      return vm_postDisplay.$data.id
    },
    deletePost: function(post){
      console.log(post, 'feature coming soon!')
      if(vm_postCreate.createMode === true){

      }
    }
  }
})