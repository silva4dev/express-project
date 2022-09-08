import model from '../models/friends.model';

function postFriend(request, response) {
  if (!request.body.name) {
    return response.status(400).json({
      error: 'Missing friend name',
    });
  }

  const newFriend = {
    name: request.body.name,
    id: model.length,
  };
  model.push(newFriend);

  return response.json(newFriend);
}

function getFriends(request, response) {
  response.json(model);
}

function getFriend(request, response) {
  const friendId = Number(request.params.friendId);
  const friend = model[friendId];
  if (friend) {
    response.status(200).json(friend);
  } else {
    response.status(404).json({
      error: 'Friend does not exist',
    });
  }
}

export default {
  postFriend,
  getFriends,
  getFriend,
};
