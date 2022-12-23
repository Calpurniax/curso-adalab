const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// users

const users = [
  {
    name: 'Sofia',
    email: 'sofia.gracia@gmail.com'
  },
  {
    name: 'Maria',
    email: 'lamorti@adalab.com'
  }
]; // fake users data base

// api endpoints

server.post('/user', (req, res) => {
  console.log('Query params:', req.query);
  console.log('Query param userName:', req.query.userName);
  console.log('Query param userEmail:', req.query.userEmail);

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail
  });

  res.json({
    result: 'User created'
  });
});
console.log('holiwisssdassdfsdfdss')
server.get('/users', (req, res) => {
  const nameFilter = req.query.name;
  const emailFilter = req.query.email;
  console.log(req.query)
  console.log(typeof (nameFilter))
  const filterUser = users
    .filter((each) => each.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((each) => each.email.toLowerCase().includes(emailFilter.toLowerCase()))

  console.log(`usuarias`, filterUser)
  res.json({
    result: filterUser
  });
});
