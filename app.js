
let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Terminar série na Netflix', 'status': 'checked'},
    {'tarefa': 'Terminar série na Netflix', 'status': 'checked'}
];

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = 
    `
        <input type = "checkbox" ${status}>
        <div>${tarefa}</div>
        <input type = "button" value = "X">
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
    banco.forEach(item => criarItem(item.tarefa, item.status));
};

const inserirItem = (e) => {
    const tecla = e.key;
    const texto = e.target.value;
    if(tecla == 'Enter'){
        banco.push({'tarefa': texto, 'status': ''})
        atualizarTela();
        e.target.value = '';
    };
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);

atualizarTela();