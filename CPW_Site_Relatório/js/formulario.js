function enviar() {
  let nome = document.getElementById('idNome').value.trim()
  let curso = document.getElementById('idCurso').value.trim()
  let observacao = document.getElementById('idObservacao').value.trim()
 

  if (nome == '') {
    document.getElementById("idNome").style.border = " 2px solid red"
    document.getElementById('idNome').placeholder = "Preencha este campo !!"
  } else {
    document.getElementById("idNome").style.border = "2px solid greenyellow"
  }

  if (curso == '') {
    document.getElementById('idCurso').style.border = "2px solid red"
    document.getElementById('idCurso').placeholder = "Preencha este campo !!"
  } else {
    document.getElementById('idCurso').style.border = "2px solid greenyellow"
  }

  if (observacao == '') {
    document.getElementById('idObservacao').style.border = "2px solid red"
    document.getElementById('idObservacao').placeholder = "Preencha este campo !!"
  } else {
    document.getElementById('idObservacao').style.border = "2px solid greenyellow"
  }

  if (nome == '' || curso == "" || observacao == "") {
    window.alert('Por favor, preencha todos os campos')
  } else {
    window.alert('Sua mensagem foi enviada')
    document.getElementById('idNome').style.border = "none"
    document.getElementById('idCurso').style.border = "none"
    document.getElementById('idObservacao').style.border = "none"

    document.getElementById('idNome').value = ""
    document.getElementById('idCurso').value = ""
    document.getElementById('idObservacao').value = ""

    document.getElementById('idNome').placeholder = ""
    document.getElementById('idCurso').placeholder = ""
    document.getElementById('idObservacao').placeholder = ""
  }
    

    

}

function limpar() {
  document.getElementById('idNome').value = ""
  document.getElementById('idCurso').value = ""
  document.getElementById('idObservacao').value = ""
}
