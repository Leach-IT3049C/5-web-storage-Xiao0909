//first reminder
const storage = document.querySelector('.data');
const display = document.querySelector('.display');
const myBtn = document.querySelector('.myBtn');
const stored = localStorage.getItem('textinput')

if(storage){
    display.textContent = stored
}

storage.addEventListener('input', letter =>{
    display.textContent = letter.target.value
})

const saveToLocalStorage = () =>{
    localStorage.setItem('textinput', display.textContent)
 }

myBtn.addEventListener('click', saveToLocalStorage)


