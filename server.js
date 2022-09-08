import path from 'path';
import express from 'express';
import friendsRouter from './routes/friends.router';
import messagesRouter from './routes/messages.router';

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((request, response, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${request.method} ${request.baseUrl}${request.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (request, response) => {
  response.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: "Let's go skiing!",
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
