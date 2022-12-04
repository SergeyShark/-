// тело документа
const documentBody = document.querySelector('body')
const documentMain = document.querySelector('main')
const modal = document.querySelector("#modal")
const modalContent = document.querySelector('.modal-content')
const textArea = document.querySelector('#textarea')

// кнопки верхней панели
const theme = document.querySelector('#theme')
const buttonAddText = document.querySelector("#p")
const buttonAddH1 = document.querySelector("#h1")
const buttonAddH2 = document.querySelector("#h2")
const buttonAddH3 = document.querySelector("#h3")
const buttonAddH4 = document.querySelector("#h4")
const buttonAddH5 = document.querySelector("#h5")
const buttonAddH6 = document.querySelector("#h6")
const buttonLeftSide = document.querySelector('#leftSide')
const buttonCenterSide = document.querySelector('#center')
const buttonRightSide = document.querySelector('#rightSide')

// кнопки модального окна
const buttonCloseModal = document.querySelector('.btn-close')
const buttonSaveChanges = document.querySelector('#saveText')

// слушатели верхней панели
buttonAddText.addEventListener('click', openModal)
buttonAddH1.addEventListener('click', openModal)
buttonAddH2.addEventListener('click', openModal)
buttonAddH3.addEventListener('click', openModal)
buttonAddH4.addEventListener('click', openModal)
buttonAddH5.addEventListener('click', openModal)
buttonAddH6.addEventListener('click', openModal)
theme.addEventListener('click', changeTheme)
buttonLeftSide.addEventListener('click', doLeftSide)
buttonCenterSide.addEventListener('click', doCenterSide)
buttonRightSide.addEventListener('click', doRightSide)

// слушатели модального окна
buttonSaveChanges.addEventListener('click', addText)
buttonCloseModal.addEventListener('click', closeModal)



function changeTheme(){ 
    documentBody.classList.toggle('black')
    modalContent.classList.toggle('gray')
    buttonSaveChanges.classList.toggle('btn-secondary')
    buttonSaveChanges.classList.toggle('btn-light')
}

function openModal(event) {
    
    modal.classList.add('display-block')
    modal.dataset.id = event.target.id
    textArea.focus()
}
function closeModal(){
    modal.classList.remove('display-block')
    textArea.value = ''
}
function addText(){
    const tagForText = modal.dataset.id
    const currentTextValue = textArea.value
    if(currentTextValue.length === 0) {
        closeModal()
        return
    }
    const textHTML = `
        <${tagForText} class="text">${currentTextValue}</${tagForText}>
    `
    documentMain.insertAdjacentHTML('beforeend', textHTML)
    textArea.value = ''
    textArea.focus()
    
    closeModal()
}
function doLeftSide(){
    const text = documentMain.querySelectorAll('.text')
    if(text === null) return
    text.forEach(function(currentText) {
        currentText.classList.remove('center')
        currentText.classList.remove('right')
        currentText.classList.add('left')
        console.log(currentText)
    })
    
}

function doCenterSide(){
    const text = documentMain.querySelectorAll('.text')
    if(text === null) return
    text.forEach(function(currentText){
        currentText.classList.remove('right')
        currentText.classList.remove('left')
        currentText.classList.add('center')
    })
    
}

function doRightSide(){
    const text = documentMain.querySelectorAll('.text')
    if(text === null) return
    text.forEach(function(currentText){
        currentText.classList.remove('center')
        currentText.classList.remove('left')
        currentText.classList.add('right')
    })
}

