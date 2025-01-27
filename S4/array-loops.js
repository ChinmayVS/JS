
const todoarr =[];

renderTodoList();
function renderTodoList(){
         
  let todoListHTML = '';

  for(let i=0;i< todoarr.length;i++){
    const todoObj= todoarr[i];
    const {name, date} = todoObj;
    const html= `
      <div>${name}</div>
      <div>${date}</div>
      <div>
      <button onclick="todoarr.splice(${i},1);
        renderTodoList();">Delete</button>          
      </div>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addElement(){
  const inputElement = document.querySelector('.inputElement');
  const name = inputElement.value;
  const dateElement = document.querySelector('.tododate');
  const date = dateElement.value;





  todoarr.push({name,date});
  inputElement.value= '';
  renderTodoList();


}



