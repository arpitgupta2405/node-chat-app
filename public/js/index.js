var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server');

  socket.emit('createEmail', {
    to: 'abi@example.com',
    text: 'Hey there!!'
  });

  socket.on('newMessage', function(message) {
    console.log('newMessage', message);
  });

  socket.emit('createMessage', {
    from: 'Arpit',
    text: 'chal chutiye'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});
