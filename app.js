//Dom Elemanents
const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const imgUrlElement = document.querySelector("#url");
const infoElement = document.querySelector("#info");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");


//Events dinleniyor
eventListeners(); 
function eventListeners(){
    form.addEventListener("submit",addMovie);
    document.addEventListener("DOMContentLoaded",()=>{
        const movies = Storage.getMoviesFromStorage();
        UI.loadAllMovies(movies);
    }); 
    cardBody.addEventListener("click",removeMovie);
    clear.addEventListener("click",clearMovies);
}
    //Events 
    function removeMovie(e){
       if(e.target.id === "delete-film"){
            //UI'dan silme 
            UI.removeMovieToUI(e);
            //Storage'dan silme
            Storage.removeMovieToStorage(e);
            UI.alert("Film Başarıyla Silindi.","success");
       }
    }
     function clearMovies(e){
       if(confirm("Tüm Filmleri Silmek İstediğinize Emin misiniz?")){
            //UI'dan temizleme
            UI.clearMoviesFromUI();
            //Storage'dan temizleme
            Storage.clearMoviesFromStorage();
       }
     }

    function addMovie(e){
        const movieTitle = titleElement.value;
        const movieDirector = directorElement.value;
        const movieİmageUrl = imgUrlElement.value;
        const movieInfo = infoElement.value;
        if(movieTitle === "" || movieDirector === "" || movieİmageUrl === "" || movieInfo === ""){
            UI.alert("Lütfen Tüm Alanları Doldurun!","warning");
        }
        else{ //Add Yeni Film
            //
            const newMovie = new Movie(movieTitle,movieDirector,movieİmageUrl,movieInfo); 
            UI.addMovieToUI(newMovie);
            Storage.addMovieToStorage(newMovie);
            UI.alert("Film Başarıyla Eklendi","success");
        }
        UI.clearElements(titleElement,directorElement,imgUrlElement,infoElement);
        
        e.preventDefault(); //Formun submit edilmesi önlendi.
    }
    

   
