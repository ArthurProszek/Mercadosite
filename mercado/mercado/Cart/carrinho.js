function segurar_info(){
    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('endereco').value
    const cpf = document.getElementById('cpf').value

    localStorage.setItem('nome', nome)
    localStorage.setItem('endereco', endereco)
    localStorage.setItem('cpf', cpf)



}

// =====================================================

let total = document.getElementById('total');

// =====================================================

let quantia_crim = Number(localStorage.getItem('crim'));
let preco_crim = Number(localStorage.getItem('preco_crim'));


function add_crim() {
    localStorage.setItem('crim', 1)
    localStorage.setItem('preco_crim', 7248)
}

function atualizar_carrinho_crim() {
    if (quantia_crim > 0) {
        crim.style.display = "block";
        document.getElementById("quantia_crim").innerHTML = quantia_crim;
        document.getElementById("preco_crim").innerHTML = preco_crim;
    } else {
        crim.style.display = 'none';
    }

    atualizar_total();
}

function soma_crim() {
    quantia_crim += 1;
    localStorage.setItem("crim", quantia_crim);
    preco_crim += 7248;
    localStorage.setItem("preco_crim", preco_crim);
    atualizar_carrinho_crim();
}

function sub_crim() {
    if (quantia_crim > 0) {
        quantia_crim -= 1;
        localStorage.setItem("crim", quantia_crim);
        preco_crim -= 7248;
        localStorage.setItem("preco_crim", preco_crim);
    }
    atualizar_carrinho_crim();
}

// =====================================================

// =====================================================

let quantia_frost = Number(localStorage.getItem('frost'));
let preco_frost = Number(localStorage.getItem('preco_frost'));


function add_frost() {
    localStorage.setItem('frost', 1)
    localStorage.setItem('preco_frost', 712)
}

function atualizar_carrinho_frost() {
    if (quantia_frost > 0) {
        frost.style.display = "block";
        document.getElementById("quantia_frost").innerHTML = quantia_frost;
        document.getElementById("preco_frost").innerHTML = preco_frost;
    } else {
        frost.style.display = 'none';
    }

    atualizar_total();
}

function soma_frost() {
    quantia_frost += 1;
    localStorage.setItem("frost", quantia_frost);
    preco_frost += 712;
    localStorage.setItem("preco_frost", preco_frost);
    atualizar_carrinho_frost();
}

function sub_frost() {
    if (quantia_frost > 0) {
        quantia_frost -= 1;
        localStorage.setItem("frost", quantia_frost);
        preco_frost -= 712;
        localStorage.setItem("preco_frost", preco_frost);
    }
    atualizar_carrinho_frost();
}

// =====================================================

let quantia_hell = Number(localStorage.getItem('hell'));
let preco_hell = Number(localStorage.getItem('preco_hell'));


function add_hell() {
    localStorage.setItem('hell', 1)
    localStorage.setItem('preco_hell', 799)
}

function atualizar_carrinho_hell() {
    if (quantia_hell > 0) {
        hell.style.display = "block";
        document.getElementById("quantia_hell").innerHTML = quantia_hell;
        document.getElementById("preco_hell").innerHTML = preco_hell;
    } else {
        hell.style.display = 'none';
    }

    atualizar_total();
}

function soma_hell() {
    quantia_hell += 1;
    localStorage.setItem("hell", quantia_hell);
    preco_hell += 799;
    localStorage.setItem("preco_hell", preco_hell);
    atualizar_carrinho_hell();
}

function sub_hell() {
    if (quantia_hell > 0) {
        quantia_hell -= 1;
        localStorage.setItem("hell", quantia_hell);
        preco_hell -= 799;
        localStorage.setItem("preco_hell", preco_hell);
    }
    atualizar_carrinho_hell();
}

// =====================================================

let quantia_sun = Number(localStorage.getItem('sun'));
let preco_sun = Number(localStorage.getItem('preco_sun'));


function add_sun() {
    localStorage.setItem('sun', 1)
    localStorage.setItem('preco_sun', 1200)
}

function atualizar_carrinho_sun() {
    if (quantia_sun > 0) {
        sun.style.display = "block";
        document.getElementById("quantia_sun").innerHTML = quantia_sun;
        document.getElementById("preco_sun").innerHTML = preco_sun;
    } else {
        sun.style.display = 'none';
    }

    atualizar_total();
}

function soma_sun() {
    quantia_sun += 1;
    localStorage.setItem("sun", quantia_sun);
    preco_sun += 1200;
    localStorage.setItem("preco_sun", preco_sun);
    atualizar_carrinho_sun();
}

function sub_sun() {
    if (quantia_sun > 0) {
        quantia_sun -= 1;
        localStorage.setItem("sun", quantia_sun);
        preco_sun -= 1200;
        localStorage.setItem("preco_sun", preco_sun);
    }
    atualizar_carrinho_sun();
}

// =====================================================

let quantia_wind = Number(localStorage.getItem('wind'));
let preco_wind = Number(localStorage.getItem('preco_wind'));


function add_wind() {
    localStorage.setItem('wind', 1)
    localStorage.setItem('preco_wind', 1200)
}

function atualizar_carrinho_wind() {
    if (quantia_wind > 0) {
        wind.style.display = "block";
        document.getElementById("quantia_wind").innerHTML = quantia_wind;
        document.getElementById("preco_wind").innerHTML = preco_wind;
    } else {
        wind.style.display = 'none';
    }

    atualizar_total();
}

function soma_wind() {
    quantia_wind += 1;
    localStorage.setItem("wind", quantia_wind);
    preco_wind += 872;
    localStorage.setItem("preco_wind", preco_wind);
    atualizar_carrinho_wind();
}

function sub_wind() {
    if (quantia_wind > 0) {
        quantia_wind -= 1;
        localStorage.setItem("wind", quantia_wind);
        preco_wind -= 872;
        localStorage.setItem("preco_wind", preco_wind);
    }
    atualizar_carrinho_wind();
}

// =====================================================


function atualizar_total() {
    let total_preco = preco_crim + preco_hell + preco_sun + preco_frost + preco_wind;
    total.innerHTML = 'R$ ' + total_preco;
}

// =====================================================


atualizar_carrinho_crim();
atualizar_carrinho_frost();
atualizar_carrinho_hell();
atualizar_carrinho_sun();
atualizar_carrinho_wind();
