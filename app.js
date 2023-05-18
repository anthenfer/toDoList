

const criarItem = (tarefa) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = 
    `
        <input type = "checkbox">
        <div>${tarefa}</div>
        <input type = "button" value = "X">
    `
    document.getElementById('todoList').appendChild(item);
}
