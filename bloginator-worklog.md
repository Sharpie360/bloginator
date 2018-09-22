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