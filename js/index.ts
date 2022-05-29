document.querySelector('#submit')?.addEventListener('submit', event => {
  event.preventDefault();
  registWrite();
});
async function registWrite() {
  const input = document.querySelector('#todo_text') as HTMLInputElement;
  const datas: object = await fetch('/regist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: input.value,
    }),
  }).then(response => response.json());
  input.value = '';
  input.focus();
  viewTodoData(datas);
}

function viewTodoData(datas: any) {
  console.log(datas);
  const todoList = document.querySelector('#todolists');
  if (todoList instanceof Element) {
    let list = '';
    for (let data of datas) {
      list += `<li>${data.content}</li>`;
    }
    todoList.innerHTML = list;
  }
}
