
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
  }
})