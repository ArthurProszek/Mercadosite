function StaticRange() {
    localStorage.removeItem('informaçoes')
    window.location.href = "index.html";
    }
    window.addEventListener("load", () => {
        listarprodutos();
    });
   
   
     
     
    async function cadastrarProduto(event) {
        event.preventDefault()
     
        const title = document.getElementById('title').value
        const price = Number(document.getElementById('price').value)
        const file = document.getElementById('file').files[0]
     
        let formData = new FormData();
     
        formData.append('title', title)
        formData.append('price', price)
        formData.append('file', file)
    }
     
     
    async function listarprodutos() {
        const response = await fetch(' http://localhost:3000/produto/cadastrar', {
               method: "get",
               headers: {
               "content-type": "application/json"
        }
    });
     
    const results = await response.json();
     
    if (results.sucess) {
           let productdata = results.data
          const immagens = 'imagem'
          let html = document.getElementById('card_produto')
          productdata.array.forEach(product => {
            console.log(product)
          });
          }
     else{
        alert(results.message)
    }}
    