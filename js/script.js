let date = document.querySelector("#date");
let image = document.querySelector("#pod");

let dateInput = "";

date.addEventListener("change", function(){
  dateInput = date.value
  fetchPicture();
});

// Get picture from api that matches date user typed in
function fetchPicture(){
  fetch("https://api.nasa.gov/planetary/apod?date="+dateInput+"&api_key=oBEYRtK6Nlj9drByEgNF4UlvQjcSMGoaY1OGTQdt")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        image.src = response.url
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
