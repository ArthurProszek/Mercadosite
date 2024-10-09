function final(){
    alert("Finalizado!")
}
// Recuperar os valores armazenados no localStorage
const nome = localStorage.getItem('nome');
const endereco = localStorage.getItem('endereco');
const cpf = localStorage.getItem('cpf');

const nome_mostrar = document.getElementById('nome_mostrar');
const endereco_mostrar = document.getElementById('endereco_mostrar');
const cpf_mostrar = document.getElementById('cpf_mostrar');

if (nome_mostrar && nome) {
    nome_mostrar.innerHTML = nome;
    endereco_mostrar.innerHTML = endereco;
    cpf_mostrar.innerHTML = cpf;
}

const quantiaCrim = Number(localStorage.getItem('crim'));
const precoCrim = Number(localStorage.getItem('preco_crim'));

const quantiaFrost = Number(localStorage.getItem('frost'));
const precoFrost = Number(localStorage.getItem('preco_frost'));

const quantiaHell = Number(localStorage.getItem('hell'));
const precoHell = Number(localStorage.getItem('preco_hell'));

const quantiaSun = Number(localStorage.getItem('sun'));
const precoSun = Number(localStorage.getItem('preco_sun'));

const quantiaWind = Number(localStorage.getItem('wind'));
const precoWind = Number(localStorage.getItem('preco_wind'));

const total = document.getElementById('total_checkout');

function atualizarCheckout() {
    if (quantiaCrim > 0) {
        document.getElementById('crim_checkout').style.display = 'block';
        document.getElementById('quantia_crim_checkout').innerHTML = quantiaCrim;
        document.getElementById('preco_crim_checkout').innerHTML = precoCrim;
    }
    if (quantiaFrost > 0) {
        document.getElementById('frost_checkout').style.display = 'block';
        document.getElementById('quantia_frost_checkout').innerHTML = quantiaFrost;
        document.getElementById('preco_frost_checkout').innerHTML = precoFrost;
    }
    if (quantiaHell > 0) {
        document.getElementById('hell_checkout').style.display = 'block';
        document.getElementById('quantia_hell_checkout').innerHTML = quantiaHell;
        document.getElementById('preco_hell_checkout').innerHTML = precoHell;
    }
    if (quantiaSun > 0) {
        document.getElementById('sun_checkout').style.display = 'block';
        document.getElementById('quantia_sun_checkout').innerHTML = quantiaSun;
        document.getElementById('preco_sun_checkout').innerHTML = precoSun;
    }
    if (quantiaWind > 0) {
        document.getElementById('wind_checkout').style.display = 'block';
        document.getElementById('quantia_wind_checkout').innerHTML = quantiaWind;
        document.getElementById('preco_wind_checkout').innerHTML = precoWind;
    }

    const totalPreco = precoCrim + precoFrost + precoHell + precoSun + precoWind;
    total.innerHTML = 'R$ ' + totalPreco;
}

atualizarCheckout();
