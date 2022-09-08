// import path from 'path';

function getMessages(request, response) {
  response.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(request, response) {
  console.log('Updating messages...');
  response.end();
}

export default {
  getMessages,
  postMessage,
};
