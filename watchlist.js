import Movie from './movie.js'

const start = document.getElementById("start-exploring")

const emptyWatchlistHtml =  `
    <p class="start-exploring-text">Your watchlist is looking a little empty...</p>
    <div id="add-movies" class="add-movies">
        <img class="plus-icon" href="index.html" src="Icon (2).png">
        <p class="add-movies-text"><a href="index.html">Let's add some movies!</a></p>
    </div>
    `

class Watchlist{
    constructor(data){
        Object.assign(this,data)
    }

    removeFromWatchlist(imdbID){
        while (window.localStorage.length != 0){
            window.localStorage.removeItem(`${imdbID}`)
            document.getElementById(`movie-${imdbID}`).remove()
        }
        if (window.localStorage.length === 0){
            start.innerHTML = emptyWatchlistHtml

        }
    }

    getWatchlistHtml(){
        const watchlist = this

        header.innerHTML =`
        <div class="header-text">
            <h1>My Watchlist</h1>
            <h3 id="search-page-btn" class="search-page-btn"><a href="index.html">Search for movies</a></h3>
        </div>
        `
       
        if (Object.keys(watchlist).length === 0){
            start.innerHTML = emptyWatchlistHtml
        }
        else{
            start.innerHTML = ""
            for (let movie in watchlist){
                let watchlistMovie = new Movie(watchlist[movie])
                start.innerHTML += watchlistMovie.getWatchlistMovieHtml()

            }  

        }
    }

}
                

export default Watchlist