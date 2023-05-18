
let banco = [
    // {'tarefa': 'Estudar JS', 'status': ''},
    // {'tarefa': 'Terminar série na Netflix', 'status': 'checked'},
    // {'tarefa': 'Ligar para meu irmão após expediente', 'status': ''}
];

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

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
    const banco = getBanco();
    banco.forEach( (item, indice) => criarItem(item.tarefa, item.status, indice));
};

const inserirItem = (e) => {
    const tecla = e.key;
    const texto = e.target.value;
    if(tecla === 'Enter'){
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status': ''})
        setBanco(banco);
        atualizarTela();
        e.target.value = '';
    };
};

const removerItem = (indice) => {
    banco.splice(indice, 1);
    atualizarTela();
};

const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status == '' ? 'checked' : ''; 
    atualizarTela();
}

const clickItem = (e) => {
    const elemento = e.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice);
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
};

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);
atualizarTela();