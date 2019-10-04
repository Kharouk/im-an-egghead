// Partial Application
// a partial application occurs when a curried function has some but not all of its function applied.

const fetch = require('node-fetch');

const getFromAPI = baseURL => endpoint => cb =>
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => cb(data))
    .catch(err => {
      console.error(err.message);
    });

const getFromGithub = getFromAPI(`https://api.github.com`);
// here we give the baseUrl but have partially applied different endpoints!
const getUsers = getFromGithub('/users');
const getRepos = getFromGithub('/repositories');

getUsers(data => {
  console.log(data.map(user => user.login));
  return data.map(user => user.login);
});

getRepos(data => {
  console.log(data.map(repo => repo.name));
  return data.map(repo => repo.name);
});
