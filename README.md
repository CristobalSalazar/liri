# Liri
## A Siri-like CLI application


Liri provides you with an interface in which you can quickly view data for bands, movies, and songs all in one place, at the touch of your fingertips.


### Liri uses the following API's
<ul>
  <li> Spotify
  <li> OMDB
  <li> Bandsintown
 </ul>

 <hr>

## Installation


<ol> 
  <li>
    If you don't have Node.js already you can <a href="https://nodejs.org/en/">download it here</a>
  </li>
  <li>
    Once Node is downloaded open your terminal and <code>cd</code> into the directory containing the liri.js file
  </li>
  <li> 
    Run <code>npm install</code> .This will install the required dependencies.
  </li>
  <li>Use liri by typing <code>node liri.js COMMAND</code> see below for examples and commands.</li>
</ol>


## Commands

<ul>
  <li>
    <p><strong>concert-this</strong></p>
    <p>Displays concert information from the artist(s) specified.</p>
    <img src="./img/concert.png">
  </li>
  <li>
    <p><strong>spotify-this-song</strong></p>
    <p>Displays track information for the specified song</p>
    <img src="./img/spotify.png">
  </li>
  <li>
    <p><strong>movie-this</strong></p>
    <p>Displays movie information for the specified movie</p>
    <img src="./img/movie.png">
  </li>
  <li>
    <p><strong>do-what-it-says</strong></p>
    <p>Performs the command specified in the random.txt file</p>
    <img src="./img/dowhatitsays.png">
  </li>
</ul>


## Notes


the main function chooses which function to call based on it's input parameters. the functions then make sure to perform the appropriate API calls.

All tasks that are performed are logged in the log.txt file.

# Enjoy!