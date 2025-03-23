const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1YjIxMzYwLTM1YzItNDkwOC1hMDdiLTYzMzM4ZmU1ZGI1Ny0xNzQyNzYyMDYxODU0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDUzODhmMjctMTI3Mi00ZDcwLTgzZTQtNDU0ZmY2NDA0YWNlIiwidHlwZSI6InQifQ.gTyk-e9uguRH_oX0RTK1HaiXrm_kwr540uWHsCCRCJs'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
