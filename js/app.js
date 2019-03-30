function displayMovies() {

var data =
    {"movies":
      [
        {
            title: "First Wives Club",
            color1: "purple",
            color2: "lightblue",
            year: 1996,
            img: "https://m.media-amazon.com/images/M/MV5BMzAwZTA3Y2UtMWVlMi00ZmNiLTkzZjAtYjA2YzBhMGMyYzQ2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            love: 10,
        },
        {
            title: "Hidden Figures",
            color1: "yellow",
            color2: "red",
            year: 2016,
            img: "https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
            love: 10,
        },
        {
            title: "Shanghai Knights",
            color1: "lightgreen",
            color2: "blue",
            year: 2003,
            img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Shanghai_knights.jpg",
            love: 10,
        },
        {
            title: "She's All That",
            color1: "black",
            color2: "yellow",
            year: "1999",
            img: "https://m.media-amazon.com/images/M/MV5BY2Y0N2YyOTQtMGNiYy00ZDViLTgxYmItODkxNzlkMWVjNTFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            love: 10,
        },
        {
            title: "She's the Man",
            color1: "red",
            color2: "white",
            year: 2006,
            img: "https://upload.wikimedia.org/wikipedia/en/6/60/She%27s_the_man_poster.jpg",
            love: 10,
        },
        {
            title: "You've Got Mail",
            color1: "green",
            color2: "skyblue",
            year: 1998,
            img: "https://upload.wikimedia.org/wikipedia/en/e/ee/You%27ve_Got_Mail.jpg",
            love: 10,
        }
      ]
    };

var output = "<h1>Movies</h1>";


output += "<ul>";

for (var i in data.movies) {
    output += "<div style='height: 250px; width: 125px; background-color: " + data.movies[i].color1 + "; color: " + data.movies[i].color2 + ";'>";
    output += "<li>Title:</li>";
    output += "<li>" + data.movies[i].title + "</li>"
    output += "<li>Year: " + data.movies[i].year + "</li>"
    output += "<li>Love: " + data.movies[i].love + "</li>"
    output += "<li><img src='" + data.movies[i].img + "' height='170px' width='123px' alt='Movie Cover for " + data.movies[i].title + "'></li>";
    output += "</div>"
}

output += "</ul>";

document.getElementById("movieList").innerHTML=output;

}


window.onload = displayMovies;