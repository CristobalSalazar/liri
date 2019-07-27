const config = require('dotenv').config();
const axios = require('axios');
const keys = require('./keys');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const moment = require('moment');
const fs = require('fs');

const command = process.argv[2];
let input = '';
for (let i = 3; i < process.argv.length; i++) {
  input += process.argv[i] + ' ';
}
input.trim()

main(command, input);

function main(command, input) {

  switch (command) {
    case 'concert-this': {
      log('COMMAND: concert-this')
      concertThis(input);
      break;
    }
    case 'spotify-this-song': {
      log('COMMAND: spotify-this-song')
      spotifyThisSong(input);
      break;
    }
    case 'movie-this': {
      log('COMMAND: movie-this')
      movieThis(input);
      break;
    }
    case 'do-what-it-says': {
      log('COMMAND: do-what-it-says')
      doWhatItSays();
      break;
    }
    default: {
      log(`COMMAND NOT ${command} NOT RECOGNIZED`);
    }
  }
}

function concertThis(input) {
  axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
    .then(data => {
      for (let d of data.data) {
        log('Venue: ' + d.venue.name);
        log('Location: ' + d.venue.city + ' ' + d.venue.country);
        const date = moment(d.datetime).format('MM/DD/YYYY');
        log('Date: ' + date)
        log('------------------')
      }
    });
}

function spotifyThisSong(input) {
  if (input === "") input = 'The Sign';
  spotify.search({
    type: 'track',
    query: input
  }, function (err, data) {
    if (err) {
      return log('Error occurred: ' + err);
    }
    for (let track of data.tracks.items) {
      log('Title: ' + track.name)
      for (let artist of track.artists) {
        log('Artist: ' + artist.name);
      }
      log('Album: ' + track.album.name)
      log('Preview: ' + track.preview_url);
      log('------------------')
    }
  });
}

function movieThis(input) {
  if (input === "") input = 'Mr. Nobody';

  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${input}`)
    .then(data => {
      log('Title: ' + data.data.Title);
      log('Year: ' + data.data.Year);
      log('IMDB Rating: ' + data.data.imdbRating);
      log('Rotten Tomatoes Rating: ' + data.data.Ratings[1].Value);
      log('Country: ' + data.data.Country);
      log('Language: ' + data.data.Language);
      log('Plot: ' + data.data.Plot);
      log('Actors: ' + data.data.Actors);
      log('------------------');
    });
}

function doWhatItSays() {
  fs.readFile('random.txt', 'utf-8', (err, data) => {
    if (err) {
      log(err)
    } else {
      const indx = data.indexOf(',');
      const command = data.slice(0, indx);
      const input = data.slice(indx + 1, data.length);
      main(command, input);
    }
  })
}

function log(message) {
  console.log(message);

  fs.appendFileSync('log.txt', '\n' + message, err => {
    if (err) {
      console.error(err);
    }
  });
}