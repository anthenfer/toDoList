

const criarItem = () => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = 
    `
        <input type = "checkbox">
        <div>Teste de Item 01</div>
        <input type = "button" value = "X">
    `
    document.getElementById('todoList').appendChild(item);
}
