// тело документа
const documentBody = document.querySelector('body')
const documentMain = document.querySelector('main')
const modal = document.querySelector("#modal")
const modalContent = document.querySelector('.modal-content')
const textArea = document.querySelector('#textarea')

// кнопки верхней панели
const theme = document.querySelector('#theme')
const buttonAddText = document.querySelector("#textHTML")

// кнопки модального окна
const buttonCloseModal = document.querySelector('.btn-close')
const buttonSaveChanges = document.querySelector('#saveText')

// слушатели верхней панели
buttonAddText.addEventListener('click', openModal)
theme.addEventListener('click', changeTheme)

// слушатели модального окна
buttonSaveChanges.addEventListener('click', addText)
buttonCloseModal.addEventListener('click', closeModal)



function changeTheme(){ 
    documentBody.classList.toggle('black')
    modalContent.classList.toggle('gray')
    buttonSaveChanges.classList.toggle('btn-secondary')
    buttonSaveChanges.classList.toggle('btn-light')
}

function openModal() {
    modal.classList.add('display-block')
}
function closeModal(){
    modal.classList.remove('display-block')
}

function addText(){
    const text = textArea.value
    const textHTML = `<p>${text}</p>`
    console.log(textHTML)
    documentMain.insertAdjacentHTML('beforeend', textHTML)
    textArea.value = ''
    textArea.focus()
}

