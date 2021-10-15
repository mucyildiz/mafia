const io = require('socket.io');
const roomsManager = require('../services/gameServer')

module.exports = class Connection {
  constructor(id, io, socket) {
    this.id = id;
    this.io = io;
    this.socket = socket;
    this.room = -1;

    io.on('create', () => {
      console.log("Creating room...");
      // Create a room
      let id = createRoom();
      // Send user to that room
      this.socket.join(id);

      // Send user room id
      this.socket.emit('roomId', id);
    });

    io.on('join', (id) => {
      // Check if room exists
      if(rooms.has(id)) {
        // Add user to room
        this.socket.join(id);

        // Send success message
        this.socket.emit('join', 'Success');
      } else {
        // Send failure message
        this.socket.emit('join', 'Error');
      }
    });
  }

  setRoom(room) {
    this.room = room;
  }
}