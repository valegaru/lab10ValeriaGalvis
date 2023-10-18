let films = []
for(let i = 0; i < data.length; i++) {
    const filmJson = data[i]
    const film = new Film (
            filmJson.id, 
            filmJson.cover,
            filmJson.title, 
            filmJson.rating,
            filmJson.synopsis,  
            filmJson.banner,
            filmJson.category,
            )
    films.push(film)      
}




function renderAllFilmsrecommended(films) {
    let container = document.getElementById("recommended")
    container.innerHTML = ""
    for(let i = 0; i <= 7; i++) {
        const film = films[i]
        container.innerHTML += film.recommendedHtml(i)
    }
}
renderAllFilmsrecommended(films)


function renderAllFilmsweek(films) {
    let container = document.getElementById("week")
    container.innerHTML = ""
    for(let i = 8; i < films.length; i++) {
        const film = films[i]
        container.innerHTML += film.weekHtml(i)
    }
}
renderAllFilmsweek(films)

//cambiar de 0 a 15 para cambiar la pelicula del banner
function renderAllFilmsBanner(films) {
    let container = document.getElementById("banner")
        const film = films[13]
        container.innerHTML = film.bannerHtml(13)
    
}
renderAllFilmsBanner(films)





