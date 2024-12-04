const button1 = document.getElementById('but1');
const button2 = document.getElementById('but2');
const button3 = document.getElementById('but3');
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')

console.log(button1)
console.log(button2)
console.log(button3)
console.log(content1)
console.log(content2)
console.log(content3)

function tabs(button, content ) {
    // button1.classList.remove('border-b-primary/30')
    button1.classList.remove('border-b-primary')
    // button2.classList.remove('border-b-primary/30')
    button2.classList.remove('border-b-primary')
    // button3.classList.remove('border-b-primary/30')
    button3.classList.remove('border-b-primary')
    content1.classList.add('hidden')
    content2.classList.add('hidden')
    content3.classList.add('hidden')

    button.classList.add('border-b-primary')
    button.classList.remove('border-b-primary/30')
    content.classList.add('flex')
    content.classList.remove('hidden')
}

// document.addEventListener('DOMContentLoaded', ()=> {
//     button1.classList.add('border-b-primary/30')
// })
button1.addEventListener('click', ()=> tabs(button1, content1))
button2.addEventListener('click', ()=> tabs(button2, content2))
button3.addEventListener('click', ()=> tabs(button3, content3))
