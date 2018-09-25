// done in vanilla js, refactor in v2 for vue cmp


function setMessage(type, msg){
  let displayDiv = document.getElementById('user-message-display')
  let messageTest = document.getElementById('message-text')
  
  if(type === 'error'){
    displayDiv.classList.add('alert-error')
    messageTest.innerText = msg
  }
  else if(type === 'warning'){
    displayDiv.classList.add('alert-warning')
    messageTest.innerText = msg
  }
  else if(type === 'success'){
    displayDiv.classList.add('alert-success')
    messageTest.innerText = msg
  }
  else {
    return
  }
  vm_postCreate.$data.displayUserMsg = true
  setTimeout(function(){
    vm_postCreate.$data.displayUserMsg = false
  }, 3000)
}