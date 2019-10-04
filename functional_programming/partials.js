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
const getUsers = getFromGithub('/users');
const getRepos = getFromGithub('/repositories');
