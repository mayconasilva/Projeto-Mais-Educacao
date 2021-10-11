function achardata() {
//Pegando informações sobre o dia
let Data = new Date()
let dia = Data.getDate()
let mes = Data.getMonth()
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let days = Data.getDay()
let dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarte-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
let ano = Data.getFullYear()

//Inserindo na página da web
let info = document.getElementById("data")
info.innerHTML= `Hoje são ${dia} de ${meses[mes]} de ${ano} | ${dias[days]}`
console.log("Data atualizada")
console.log(`Hoje são ${dia} de ${meses[mes]} de ${ano} | ${dias[days]}`)
}