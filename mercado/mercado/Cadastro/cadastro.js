async function cadastrar(event) {
    event.preventDefault();

    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const data = { username, email, senha };

    const response = await fetch('http://localhost:3000/cadastro/cadastrar', { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const results = await response.json();

    if(results.success) {
        alert(results.message);
    } else {
        alert(results.message);  // Aqui exibirá o erro, se houver
    }

    
}

async function logar(event) {
    event.preventDefault();
 
    const email = document.getElementById('email_login').value;
    const senha = document.getElementById('password_login').value;
 
    const data = { email, senha };
 
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
 
    let results = await response.json();
 
    if (results.success) {
        // Redireciona para a página de sucesso
        window.location.href = 'sucesso.html';
    } else {
        alert(results.message);
    }
}
