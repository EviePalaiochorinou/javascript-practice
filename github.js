//const got = require('got');
import { got } from 'got';

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got.get('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);


// Same, but wrapped in a function to work for any repo, plus a callback function as a way to "return" or "pass back" the responseObject to the function's caller.

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    const responseObject = JSON.parse(response.body);
    callback(responseObject);
  });
}

// The function would then be called this way:
fetchRepoInfo('sinatra/sinatra', (repoResponseObject) => {
  console.log(repoResponseObject);
});