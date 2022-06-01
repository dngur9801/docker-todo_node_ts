async function registWrite(): Promise<void> {
  const input = document.querySelector('#todo_text') as HTMLInputElement;
  const datas: object = await fetch('/todoData').then(response =>
    response.json()
  );
  input.value = '';
  input.focus();
  viewTodoData(datas);
}
registWrite();

function viewTodoData(datas: any): void {
  console.log(datas);
  document.querySelector('#num')!.innerHTML = datas.length;
  const todoList = document.querySelector('#todolists');
  if (todoList instanceof Element) {
    let list = '';
    for (let data of datas) {
      list += `<li>${data.content}</li>`;
    }
    todoList.innerHTML = list;
  }
}
