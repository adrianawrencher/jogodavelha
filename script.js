var jogador = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var boxes = document.getElementsByClassName('box')

mudarJogador('X')

function escolherQuadrado(id) {
  var box = document.getElementById(id)

  if (box.innerHTML !== '-') {
    return
    // Esta função impede que um quadrado que já recebeu um valor X ou O seja clicado novamente
  }

  box.innerHTML = jogador
  box.style.color = '#000'

  if (jogador === 'X') {
    jogador = '0'
  } else {
    jogador = 'X'
  }
  mudarJogador(jogador)
  checarVencedor()
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

function checarVencedor() {
  var box1 = document.getElementById('1')
  var box2 = document.getElementById('2')
  var box3 = document.getElementById('3')
  var box4 = document.getElementById('4')
  var box5 = document.getElementById('5')
  var box6 = document.getElementById('6')
  var box7 = document.getElementById('7')
  var box8 = document.getElementById('8')
  var box9 = document.getElementById('9')

  if (checarSequencia(box1, box2, box3)) {
    mudarCor(box1, box2, box3)
    mudarVencedor(box1)
    return
  }

  if (checarSequencia(box4, box5, box6)) {
    mudarCor(box4, box5, box6)
    mudarVencedor(box4)
    return
  }

  if (checarSequencia(box7, box8, box9)) {
    mudarCor(box7, box8, box9)
    mudarVencedor(box7)
    return
  }

  if (checarSequencia(box2, box5, box8)) {
    mudarCor(box4, box5, box6)
    mudarVencedor(box1)
    return
  }

  if (checarSequencia(box1, box4, box7)) {
    mudarCor(box1, box4, box7)
    mudarVencedor(box1)
    return
  }

  if (checarSequencia(box3, box6, box9)) {
    mudarCor(box3, box6, box9)
    mudarVencedor(box3)
    return
  }

  if (checarSequencia(box1, box5, box9)) {
    mudarCor(box1, box5, box9)
    mudarVencedor(box1)
    return
  }

  if (checarSequencia(box3, box5, box7)) {
    mudarCor(box3, box5, box7)
    mudarVencedor(box3)
  }
}

function mudarVencedor(box) {
  vencedor = box.innerHTML
  vencedorSelecionado.innerHTML = vencedor
}

function mudarCor(box1, box2, box3) {
  box1.style.background = '#B9FFE9'
  box2.style.background = '#B9FFE9'
  box3.style.background = '#B9FFE9'
}

function checarSequencia(box1, box2, box3) {
  var sequenciaIgual = false
  if (
    box1.innerHTML !== '-' &&
    box1.innerHTML === box2.innerHTML &&
    box2.innerHTML === box3.innerHTML
  ) {
    sequenciaIgual = true
  }

  return sequenciaIgual
}

function botao() {
  vencedor = null
  vencedorSelecionado.innerHTML = ''

  for (var i = 1; i <= 9; i++) {
    var box = document.getElementById(i)
    box.style.background = '#eee'
    box.style.color = '#eee'
    box.innerHTML = '-'
  }

  mudarJogador('X')
}
