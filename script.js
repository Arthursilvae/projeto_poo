let turma = [];

function salvar() {
  let nome = document.getElementById('nome').value;
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let n3 = Number(document.getElementById('n3').value);

  let a1 = new Aluno(nome, n1, n2, n3);

  // Calcula a média
  let m = a1.gerarMedia(n1, n2, n3);

  // Calcula o estado (Aprovado / Recuperação / Reprovado)
  a1.gerarEstado(m);

  turma[turma.length] = a1;

  alert('aluno cadastrado');
}

function listar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.add('active');
  btnCadastrar.classList.remove('active');

  tabListar.classList.add('active');
  tabCadastrar.classList.remove('active');

  let lista = '';

  if (turma.length === 0) {
    lista = '<li>Nenhum aluno cadastrado ainda.</li>';
  } else {
    for (let i = 0; i < turma.length; i++) {
      let aluno = turma[i];
      let classeCor = '';

      // Decide a cor de acordo com o estado
      if (aluno.estado === 'Aprovado') {
        classeCor = 'aprovado';
      } else if (aluno.estado === 'Recuperação') {
        classeCor = 'recuperacao';
      } else {
        classeCor = 'reprovado';
      }

      // Nome colorido + média + status
      lista = lista + 
        '<li>' +
          '<span class="' + classeCor + '">' + aluno.nome + '</span>' +
          ' - ' + aluno.media.toFixed(1) +
          ' - ' + aluno.estado +
        '</li>';
    }
  }

  document.getElementById('alunos').innerHTML = lista;
}

function cadastrar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.remove('active');
  btnCadastrar.classList.add('active');

  tabListar.classList.remove('active');
  tabCadastrar.classList.add('active');
}