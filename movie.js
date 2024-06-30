class Movie{
    constructor(data){
        Object.assign(this,data)
    }

    getMovieHtml(){
        const {imdbID, Poster, Title, imdbRating, Runtime, Genre, Plot, addedToWatchlist} = this
        

        return `
        <div id="movie-${imdbID}" class="movie">
            <div>
                <img class="movie-poster" src="${Poster}">
            </div>
            <div class="movie-info">
                <div class="movie-header">
                    <h2 class="prop"> ${Title}</h2>
                    <img src="images/star.svg">
                    <p class="prop"> ${imdbRating}</p>
                </div>
                <div class="movie-props">
                    <p class="prop">${Runtime}</p>
                    <p class="prop">${Genre}</p>
                    <button id="${imdbID}" class="add-remove-btn">
                        <img class="plus-icon" src="images/plus-icon.svg">
                        Watchlist
                    </button>
                </div>
                <p class="movie-plot">${Plot}</p>
            </div>
        </div>
        `
    }

    getWatchlistMovieHtml(){
        const {imdbID, Poster, Title, imdbRating, Runtime, Genre, Plot, addedToWatchlist} = this

        return `
        <div id="movie-${imdbID}" class="movie">
            <div>
                <img class="movie-poster" src="${Poster}">
            </div>
            <div class="movie-info">
                <div class="movie-header">
                    <h2 class="prop"> ${Title}</h2>
                    <img class="star" src="Icon (2).png">
                    <p class="prop"> ${imdbRating}</p>
                </div>
                <div class="movie-props">
                    <p class="prop">${Runtime}</p>
                    <p class="prop">${Genre}</p>
                    <button id="remove-${imdbID}" class="add-remove-btn">
                        Remove
                    </button>
                    
                </div>
                <p class="movie-plot">${Plot}</p>
            </div>
        </div>
        `
    }

}

export default Movie 