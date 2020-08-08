let fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const FILE_NAME = './assets/music.json';

let musicRepo = {
  get: () => {
    return [
      {
        "id": 1,
        "artist": "Alice in Chains",
        "album": "Jar of Flies",
        "year": "1994",
        "image": "images/alice-in-chains_nutshell.jpg",
        "genre": "Grunge",
        "country": "USA"
      },
      {
        "id": 2,
        "artist": "Craig Armstrong",
        "album": "The Space Between Us",
        "year": "1998",
        "image": "images/craig-armstrong_the-space-between-us.jpg",
        "genre": "Instrumental",
        "country": "UK"
      }
    ]
  }
  // get: (resolve, reject) => {
  //   fs.readFile(FILE_NAME, (err, data) => {
  //     if(err) {
  //       reject(err);
  //     } else {
  //       resolve(JSON.parse(data));
  //     }
  //   });
  // }
}

module.exports = musicRepo;