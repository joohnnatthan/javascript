function clicou() {
    //alert('Obrigado por cliacar')
    var element = document.getElementById('agradecimento')

    element.innerHTML = 'Obrigado por clicar!'
}

function redirecionar() {
    window.open('https://www.google.com.br') // Redireciona para o link, mas abre em uma nova guia
    window.location.href = "https://www.google.com.br" // Redireciona para o link, mas abre na mesma pagina
}

function passe(elemento){
    //alert('Passasse o mouse ne! ')
    //document.getElementById('passe').innerHTML = 'Passase o mouse!'
    elemento.innerHTML = 'Voce passou o mouse!'
}

function voltar(elemento) {
    elemento.innerHTML = 'Passe o mouse aqui'
}

function load(){
    alert('Pagina carregada')
}

function Change(elemento){ 
    console.log(elemento.value)
}

// console.log('Manda a braba') Mostra no console do inspecionar da pagina
/*
var lista = ['maça', 'pera', 'uva']
console.log(lista)

/*Dicionario com vetor*/ 
/*var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'uva', cor: 'roxa'}]

alert(frutas[1].nome)*/


/* Trabalhar com datas
var d = new Date()
alert(d)
*/

/*
function soma(n1, n2) {
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar

    if(idade >=18){
        validar = 'True'
    } else {
        validar = 'False'
    }

    return validar
}

var idade = prompt('Qual a sua idade?')
console.log(validaIdade(idade))

alert(setReplace('Vai Japão!', 'Japão', 'Brasil'))

alert(soma(5, 10))

*/

/*var count

for (count=0; count < 5; count++) {
    console.log(count)
}*/


/*var contador = 0

while (contador < 5){
    console.log(contador)
    contador++
}*/

/*var idade = prompt('Qual é a sua idade?')

if(idade>=18) {
    alert('Você é maior de idade, pode ver este conteudo')
} else {
    alert('Você é menor de idade, nao pode ver este conteudo.')
}*/