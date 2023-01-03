let result = document.getElementById("result");
let searchButton = document.getElementById("search-button");
let cityRef = document.getElementById("city");

// a function to get the weather details.
let getWeather = () => {
  let cityValue = cityRef.value;
  // if statement for when search field is left empty.
  if (cityValue.length == 0){
    result.innerHTML = '<h3>Enter something valid</h3>';
  }
  else {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric';
      fetch(url)
      .then(resp => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        result.innerHTML = '<h3>City not valid</h3>';
      })
  }
};
//two arguments: the name of the event to listen for (in this case, "load"), and the function that should be called when the event occurs.
window.addEventListener("load", getWeather); 