const publish = document.getElementById('publish')
const insertText = document.getElementById ('newComment')


function insertComment(e){
    e.preventDefault()
    const insertTextValue = insertText.value
    const commentBox = document.getElementById('commentBox')
    const box = document.createElement('div')
    const userName = document.createElement('a')
    const commentUser = document.createElement('p')
    const like = document.createElement('img')

    box.className = 'box'
    userName.className = 'links'
    userName.href = '#'
    userName.innerText = 'Cosme Fulanito '
    commentUser.className = 'comment_user'
    commentUser.innerText = insertTextValue
    like.className = 'like_comment'
    like.src ='img/Heart_lineal.svg'
    like.setAttribute('alt', 'like button')
    like.className = 'heart'

    commentBox.appendChild(box)
    box.appendChild(userName)
    box.appendChild(commentUser)
    box.appendChild(like)

    insertText.value = ''
}

// function changeColor(e){
//   heartRed = document.getElementById('heart') 

//   if(e.target.src == 'http://127.0.0.1:5500/img/Heart_lineal.svg'){
//     heartRed.src = 'img/Heart_red.svg'
//   }else if(e.target.src == 'http://127.0.0.1:5500/img/Heart_red.svg'){
//     heartRed.src = 'img/Heart_lineal.svg'
//   }

function changeColor(e){
  e.preventDefault()
  if(e.target.className == 'heart' && e.target.src == 'http://127.0.0.1:5500/img/Heart_lineal.svg'){
    e.target.src = 'img/Heart_red.svg' 
  }else{
    e.target.src = 'img/Heart_lineal.svg' 
  }
}

window.addEventListener('click', changeColor)

// }

// function changeColor(e) {
//     if (e.target.id == 'like') {
//         const span = document.getElementById('corazon')
//         span.classList.toggle('heartRed')
//         span.classList.toggle('heartGray')
//     }
// }





publish.addEventListener('click', insertComment)
