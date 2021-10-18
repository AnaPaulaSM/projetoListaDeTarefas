let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("nome-tarefa-id")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function mostrarTarefas() {
    let novaLi = ""

    arrayDeTarefas.forEach((tarefa, index) => {

        novaLi = novaLi + `<li class="item-tarefa">
        <button class="botao-foguete" onclick="concluirTarefa(${index})">
        </button>

        <p class="nome-tarefa" id="nome-tarefa-id">${tarefa}</p>

        <button class="botao-delete" onclick= "deletarTarefa(${index})">
            <i class="fas fa-trash"></i>
        </button>
    </li>`

    })

    listaCompleta.innerHTML = novaLi

}

function deletarTarefa(index) {
    arrayDeTarefas.splice(index, 1)

    mostrarTarefas()

}

function adicionarTarefa() {
    arrayDeTarefas.push(input.value)

    mostrarTarefas()
    console.log(arrayDeTarefas)
}

function concluirTarefa(index) {
    console.log(index)

}

button.addEventListener("click", adicionarTarefa)