// MODIFICAR HEADER
const header = document.getElementById('Header-JS')

function show_header(){
    scroll = pageYOffset

    if(scroll >= 270){
        header.style.backgroundColor = 'white'
    } else{
        header.style.backgroundColor = ''
    }
}
setInterval(show_header, 100)

// ==========================================================

// MODIFICAR TEXTO WELCOME
const text_welcome_page1 = document.getElementById('welcome-align-text')

function welcome_text(){
    scroll = pageYOffset

    if(scroll >= 0 && scroll <= 250) {
        text_welcome_page1.style.opacity = '1'
        text_welcome_page1.style.marginTop = '-6vh'
    } else{
        text_welcome_page1.style.opacity = ''
        text_welcome_page1.style.marginTop = '6vh'
    }
  
}
setInterval(welcome_text, 100)

// ==========================================================

// MODIFICAR PAGE2

const image_page2 = document.getElementById('image_lumber')

function image_lumber(){
    scroll =pageYOffset

    if(scroll >= 260 && scroll <= 1400) {
  
        image_page2.style.opacity = '1'
        image_page2.style.marginTop = '-6vh'
    } else{
        image_page2.style.marginTop = '6vh'
        image_page2.style.opacity = '0'
    }
}
setInterval(image_lumber, 100)
// ==========================================================


// MODIFICAR PAGE3

const image_page3 = document.getElementById('image-block-page3')

function image_block_page3(){
    scroll = pageYOffset
    if (scroll >= 1600) {
        image_page3.style.opacity = '1'
        image_page3.style.marginTop = '-3vh'
       
    } else{
        image_page3.style.opacity = ''
        image_page3.style.marginTop = '3vh'
    }
}

setInterval(image_block_page3, 100)



// ==========================================================

