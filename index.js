const buttonAdd = document.querySelector("#dropdown-menu")
const modal = document.querySelector("#modal")
const close = document.querySelector('.btn-close')
const textArea = document.querySelector('#textarea')
const documentBody = document.querySelector('body')

modal.addEventListener('click', addText)

buttonAdd.addEventListener('click', openModal)
close.addEventListener('click', closeModal)

function openModal() {
    console.log('text')
    modal.classList.add('display-block')
}


function addText(){
    const text = textArea.value
    const textHTML = `<p>${text}</p>`
    console.log(textHTML)
    documentBody.insertAdjacentHTML('beforeend', textHTML)
    textArea.value = ''
    textArea.focus()
}

function closeModal(){
    modal.classList.remove('display-block')
}