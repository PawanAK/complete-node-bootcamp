const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {});
};

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed:${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('rondom dog image saved to file');
      });
    })
    .catch((err) => {
      console.log(err).message;
    });
});
