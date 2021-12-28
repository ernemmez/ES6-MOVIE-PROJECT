class Storage {
  
    static addMovieToStorage(newMovie){
        let movies = this.getMoviesFromStorage();
        movies.push(newMovie);
        localStorage.setItem("movies",JSON.stringify(movies));
    }
    static  getMoviesFromStorage(){
        let movies ;
        if(localStorage.getItem("movies") === null){
            movies = [];
        }
        else{
            movies = JSON.parse(localStorage.getItem("movies"));  
        }
        return movies;
    }
    static  removeMovieToStorage(e){
       let movies = this.getMoviesFromStorage();
       let movieTitle = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
       movies.forEach(function(movie,index){
        if(movie.title === movieTitle){
            todos.splice(index,1);
        }
       });
       localStorage.setItem("movies",JSON.stringify(movies));
   }
   static clearMoviesFromStorage(){
       localStorage.removeItem("movies");
   }
}
