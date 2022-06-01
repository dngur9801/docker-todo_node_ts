var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function registWrite() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = document.querySelector('#todo_text');
        const datas = yield fetch('/todoData').then(response => response.json());
        input.value = '';
        input.focus();
        viewTodoData(datas);
    });
}
registWrite();
function viewTodoData(datas) {
    console.log(datas);
    document.querySelector('#num').innerHTML = datas.length;
    const todoList = document.querySelector('#todolists');
    if (todoList instanceof Element) {
        let list = '';
        for (let data of datas) {
            list += `<li>${data.content}</li>`;
        }
        todoList.innerHTML = list;
    }
}
