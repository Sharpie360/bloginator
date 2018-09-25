
vm_postList = new Vue({
  el: '#sidebar',
  data: {
    posts: [],
    isSignedIn: false, // refactor to global state in V2
  },
  methods: {
    getSubs: function(post){
      extractSubtitle(post.content)
      return subtitle
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

