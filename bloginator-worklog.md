# BLOGINATOR V1 WORKLOG

================================
## 9-17-18
================================
### initialized bloginator project
- initial grid layout written
- project basic starting markup

### get-posts script coded 
- fetches blog info from blogger

### action bar css started

### added vue js as content display
### added vue js for post list
- removed now un-needed vanilla js

### cut lines of code in half or more with VUE JS!!!

================================
## 9-18-18
================================
### Reworked most code to use Vuejs.

### Components List
- action bar
- post-list
- post-display
- post-create

### updated index.html, css, and js.
- built new component for createPost
- establishing very primitive state control

### commit commit commit!!!


================================
## 9-19-18
================================

### edit btn disable logic added to html and content component
- Vue $ref keyword added

### started commitPost function
- using temp authorized key
- might try headless wp approach

================================
## 9-21-18
================================

### setting up Oauth2 authorization
- gapi client script for auth 
- communicating with Blogger API thru gapi
- successfully authorizing and post request

### Action Bar
- signin / signout buttons added 
- basic state ctrl for dispaying buttons when signed in/out
- css changes, grouped signed in buttons

### getPosts fn
- set inital get request wrapped in function
- called onload and after post requests to update post-list

================================
## 9-22-18
================================

### createPost fn
- validation added for input fields
- requires at least title and body
- started on error message

### signed-in / signed-out state management added
- clear display and list when logged out

### MODES: view, create, edit
- viewMode: for viewing posts in content display
- createMode: for writing a new post
- editMode: for editing an existing post, same VM as createMode

### postContent cmpt
- added loadDraft btn
- working with LS to hold post draft - might change.

### redeclared posts with let keyword
- makes mutable, but needed
- able to empty and fill when need be

================================
## 9-23-18
================================

### finished save/load draft
- validation and confirmation added
- createPost btns all working
- changed if eval logic for input field value check
- - "===''" > !not operator

### adding validation to commitPost

### loadDraft/cancelPost changes
- changed occurences of 'vm_createPost' to 'this'
- added check for draft in LS
- removed savedDraft boolean

### commitPost after-action
- if successful, update state to viewMode
- grab updated blog
- editBtn enabled

### deletePost
- function running and successful
- same re-rendering after action issue

================================
## 9-24-18
================================

### Post-List
- re-renders with updated data after actions
- - commitPost, deletePost
#### finished delete feature

### editPost 
- got subtitle extracted properly into subtitle prop from content
- got body parsed from content 

### Post-List
- getSubs refactored to call global extractSubtitle fn

### pushUpdateToBlog fn [updatePost]
- patch call with gapi
- called from updateBtn
- working! :)

### updatePost
- display messsage to user, wait (1) second then go to viewMode if needed

================================
## 9-25-18
================================

### setMessage fn
- sets display message for user for alerts and consolelogs
- error : red
- warning: yellow
- success: green
- takes 2 args. type -> for error, msg -> for user msg
- uses setTimeouts for delay - user has time to read the message first,then change views or hide message div 

### sidebar.css
- added tranisiton opacity when loading post list after get request
- smooth fade in vs jump load

### all scripts
- refactored alerts and consolelogs to use setMessage fn

### Media Queries
- added rules for header, action bar, and viewmode
- added respective markup in index.html for mq's
- - id's for elements

### header.css
- added for component like styles for header

### actionBar text
- changed wording and behavior on sign-in sign-out
- button font changed to project font


================================
## 9-26-18
================================

### post-list
- padding changed for mq's

### sign-out
- set postDisplay to empty string on signout, fix displaying after signout bug