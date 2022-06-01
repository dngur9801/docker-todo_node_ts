const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/js', express.static(__dirname + '/js'));

const todoList = [];

app.listen(8080, () => {
  console.log('listening on 8080');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/todoData', (req, res) => {
  res.json(todoList);
});

app.post('/regist', (req, res) => {
  console.log(req.body);
  todoList.push({
    content: req.body.content,
  });
  console.log(todoList);
  res.redirect('/');
});
