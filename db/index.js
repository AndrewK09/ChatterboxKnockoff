var mongoose = require('mongoose');
mongoose.Promise = Promise;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/chatterbox', { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

var Schema = mongoose.Schema;
var messageSchema = new Schema(
  {
    username: String,
    message: String,
    room: String
  },
  { timestamps: true }
);

var roomSchema = new Schema({
  room: String
});

var Message = mongoose.model('Message', messageSchema);
var Room = mongoose.model('Room', roomSchema);

module.exports = Message;
module.exports = Room;
