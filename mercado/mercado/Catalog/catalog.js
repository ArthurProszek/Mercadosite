function adicionar_nuvem(){
    localStorage.setItem("nuvem", 1)
    localStorage.setItem("preco_nuvem", 200)
}

// =====================================================

function adicionar_pocao(){
    localStorage.setItem("pocao", 1)
    localStorage.setItem("preco_pocao", 150)
}

// =====================================================

function adicionar_carta(){
    localStorage.setItem("carta", 1)
    localStorage.setItem("preco_carta", 100)
}



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