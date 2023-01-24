function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if (fano.value.length == 0 || fano.value > ano) {
  window.alert('[Erro]Verifique os dados e tente novamente')
 } else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - fano.value
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')
  if (fsex[0].checked) {
   genero = 'Homem'
   if (idade >= 0 && idade < 10) {
    img.setAttribute('src', 'imagens/menino.jpg')
   } else if (idade < 21) {
    img.setAttribute('src', 'imagens/moco.jpg')
   } else if (idade < 60) {
    img.setAttribute('src', 'imagens/homem.jpg')
   } else {
    img.setAttribute('src', 'imagens/idoso.jpg')
   }
  } else {
   genero = 'Mulher'
   if (idade >= 0 && idade < 10) {
    img.setAttribute('src', 'imagens/menina.jpg')
   } else if (idade < 21) {
    img.setAttribute('src', 'imagens/moca.jpg')
   } else if (idade < 60) {
    img.setAttribute('src', 'imagens/mulher.jpg')
   } else {
    img.setAttribute('src', 'imagens/idosa.jpg')
   }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  res.appendChild(img)
  }
}
