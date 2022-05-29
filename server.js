const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const todoList = [];

app.use('/js', express.static(__dirname + '/js'));

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.post('/regist', function (req, res) {
  console.log(req.body);
  todoList.push({
    content: req.body.content,
  });
  res.json(todoList);
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
