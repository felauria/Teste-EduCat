//variaveis --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var li = document.querySelector('.liAlunos');
// li.innerHTML = 'teste';

var arrayAlunos = [];

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





//funcoes --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function novoAluno(){ //Funcao utilizada para cadastrar alunos
    // alert('teste');

    var aluno = prompt('Digite o nome do aluno:');

    if(aluno == '' || aluno == null){ //Verifica se o retorno foi vazio
        alert('Insira um nome correto!');
    }else{
        var ind = arrayAlunos.indexOf(aluno); //Verifica se ja foi cadastrado aluno com mesmo nome
        if(ind == -1){
            arrayAlunos.push(aluno); //Insere nome na array
        }else{
            alert('Aluno ja cadastrado no sistema!');
        }
    }

    // console.log(arrayAlunos);
    atualizaNomes(); //Chama funcao para atualizar lista de nomes
}





function atualizaNomes(){ // atualizar lista de alunos

    li.innerHTML = `<li>`; //formata a lista
    for(var i = 0; i < arrayAlunos.length; i++){ //percorre a array adicionando itens a lista
        li.innerHTML += "<ul><p>" + arrayAlunos[i] + "</p><div class='container-btn-ul'><button class='btn acao editar' onclick = 'editarAluno(" + i + ")'>Editar</button><button class='btn acao excluir' onclick = 'excluirAluno(" + i + ")'>Excluir</button></div></ul>";
    }
    li.innerHTML += `</li>`;
}





function editarAluno(i){ // editar nome de alunos
    // console.log(i);
    var novoNome = prompt("Nome atual: '" + arrayAlunos[i] + "', para qual nome deseja alterar?");
    arrayAlunos[i] = novoNome; //atualiza o nome do aluno
    atualizaNomes(); //atualiza lista de nomes
}





function excluirAluno(i){ // excluir alunos
    arrayAlunos.splice(i,1); //remove aluno da array
    atualizaNomes(); //atualiza lista de nomes
}





function buscaAluno(){ //funcao para serachbar

    var arrayResultado = []; //array para receber resultado da pesquisa

    input = document.getElementById('inputBusca'); //recebe o input da serachbar
    filtro = input.value.toUpperCase(); // coloca o texto em maiusculo

    for (i = 0; i < arrayAlunos.length; i++) { // percorre a array aplicando o filtro

        if (arrayAlunos[i].toUpperCase().includes(filtro)) { //verifica se texto (filtro) esta incluso no nome (arrayAlunos[i])
            arrayResultado.push([arrayAlunos[i]]);
            // console.log(arrayAlunos[i].toUpperCase().includes(filtro));
        }
    }

    // console.log(arrayResultado);

    li.innerHTML = `<li>`; //formata a lista
    for(var i = 0; i < arrayResultado.length; i++){ // percorre o array adicionando os itens na lista
        nome = arrayResultado[i];
        var id = arrayAlunos.indexOf(nome);
        // console.log(id);
        li.innerHTML += "<ul><p>" + nome + "</p><div class='acao'><button class='btn acao editar' onclick = 'editarAluno(" + id + ")'>Editar</button><button class='btn acao excluir' onclick = 'excluirAluno(" + id + ")'>Excluir</button></div></ul>";
    }
    li.innerHTML += `</li>`;

    arrayResultado = []; //zera array de resultados

}