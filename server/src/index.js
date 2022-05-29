const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 8000;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: process.env.ORIGIN || 'http://localhost:3000/',
  },
});

const calls = {};

io.on('connection', (socket) => {
  socket.on('request-calls', () => {
    socket.emit('calls-sent', { calls: Object.values(calls) });
  });

  socket.on('create-call', ({ username }) => {
    const id = Math.random().toString(36).slice(2);
    socket.join(id);
    const call = {
      id,
      caller: username,
    };
    calls[id] = call;
    socket.emit('call-joined', call);
    socket.broadcast.emit('call-created', call);
  });

  socket.on('join-call', ({ id, username }) => {
    socket.join(id);
    const call = calls[id];
    call.callee = username;
    io.to(id).emit('call-joined', call);
    delete calls[id];
    io.emit('call-filled', { id });
  });

  socket.on('begin-call', ({ id }) => {
    io.to(id).emit('call-began');
  });

  socket.on('send-offer-candidate', ({ id, candidate }) => {
    socket.to(id).emit('offer-candidate-sent', { candidate });
  });

  socket.on('send-answer-candidate', ({ id, candidate }) => {
    socket.to(id).emit('answer-candidate-sent', { candidate });
  });

  socket.on('create-offer', ({ id, offer }) => {
    socket.to(id).emit('offer-sent', { offer });
  });

  socket.on('create-answer', ({ id, answer }) => {
    socket.to(id).emit('answer-sent', { answer });
  });
});

// eslint-disable-next-line no-console
httpServer.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
