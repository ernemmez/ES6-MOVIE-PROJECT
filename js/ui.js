class UI{
  
    static  clearElements(element1,element2,element3,element4){
        element1.value = "";
        element2.value = "";
        element3.value = "";
        element4.value = "";
    }
    
    static loadAllMovies(movies){
        const movieList = document.querySelector("#films");
            movies.forEach((movie)=>{
                movieList.innerHTML += `
                        <tr>
                            <td>
                                <img src="${movie.imgUrl}" class="img-fluid img-thumbnail img-poster">
                            </td>

                            <td>
                                <h5>
                                    ${movie.title}
                                </h5>
                                
                            </td>

                            <td>
                                ${movie.director}
                            </td>

                            <td>
                                <button href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</button>
                            </td>
                        </tr>
                    `
            });
            
    }

    static removeMovieToUI(e){
        let clicked = e.target; //target
        const willBeDel = clicked.parentElement.parentElement;
        if(clicked.id === "delete-film"){
            willBeDel.remove();
        }
    }


    static addMovieToUI(newMovie){
        const movieList = document.querySelector("#films");
        movieList.innerHTML += `
                <tr>
                    <td>
                        <img src="${newMovie.imgUrl}" class="img-fluid img-thumbnail img-poster">
                    </td>

                    <td>
                        <h5>
                            ${newMovie.title}
                        </h5>
                    </td>

                    <td>
                        ${newMovie.director}
                    </td>

                    <td>
                        <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
                    </td>
                </tr>
        `
    }
    static clearMoviesFromUI(){
        const movieList = document.querySelector("#films");

        while(movieList.firstElementChild  !== null){ //Child Olduğu sürece
            movieList.firstElementChild.remove();
        }
    }
   static alert(message,type){
       const cardBody = document.querySelectorAll(".card-body")[0];
       const alertBox = document.createElement("div");

       if(type === "warning"){
            alertBox.className = `alert alert-${type}`;
            alertBox.role = "alert";
            alertBox.textContent = message;
            cardBody.appendChild(alertBox);
            setTimeout(()=>{
                alertBox.remove();
            },1300);
       }else if(type === "success") {
            alertBox.className = `alert alert-${type}`;
            alertBox.role = "alert";
            alertBox.textContent = message;
            cardBody.appendChild(alertBox);
            setTimeout(()=>{
                alertBox.remove();
            },1300);
       }
    }
    
   
}