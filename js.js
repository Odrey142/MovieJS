const btn = document.querySelector("button");
const input = document.querySelector("input");



btn.addEventListener('click',function(event){
    event.preventDefault();
    
    fetch("https://www.omdbapi.com/?s=${input.value}&apikey=${f6e256e1}")
    .then(response => response.json())
    .then(values=> console.log(values))
} )




function affichageFilm() {
    const films = document.querySelector("#films")

    value.forEach(values => {
      console.log(values)
    })
  
  }


