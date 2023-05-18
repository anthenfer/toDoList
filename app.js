
let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Terminar série na Netflix', 'status': 'checked'},
    {'tarefa': 'Terminar série na Netflix', 'status': 'checked'}
];

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = 
    `
        <input type = "checkbox" ${status} data-indice = ${indice}>
        <div>${tarefa}</div>
        <input type = "button" value = "X" data-indice = ${indice}>
    `
    document.getElementById('todoList').appendChild(item);
};

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
};

const atualizarTela = () => {
    limparTarefas();
    banco.forEach( (item, indice) => criarItem(item.tarefa, item.status, indice));
};

const inserirItem = (e) => {
    const tecla = e.key;
    const texto = e.target.value;
    if(tecla === 'Enter'){
        banco.push({'tarefa': texto, 'status': ''})
        atualizarTela();
        e.target.value = '';
    };
};

const removerItem = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
};

const clickItem = (e) => {
    const elemento = e.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice);
    }
};



document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);
atualizarTela();