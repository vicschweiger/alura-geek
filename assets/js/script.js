async function listaDeProdutos () {
    produtos = await lista-de-produtos.json();

    console.table(listaDeProdutos);

}

const insereProduto = document.querySelector('.display');

function exibeProdutos (listaDeProdutos) {
    listaDeProdutos.forEach(produto =>
        insereProduto.innerHTML += 
        `<div class="card">
            <img src="./assets/img/diversos/5.png" alt="Imagem-do-produto" class="produto__imagem">
            <h3 class="produto__titulo">Produto XYZ</h3>
            <p class="produto__preco">R$ 60,00</p>
            <a href="" class="botao__ver-produto">Ver produto</a>
        </div>`
        );
};