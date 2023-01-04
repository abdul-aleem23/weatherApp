let result = document.getElementById("result");
let searchButton = document.getElementById("search-button");
let cityRef = document.getElementById("city");

// a function to get the weather details.
let getWeather = () => {
  let cityValue = cityRef.value;
  // if statement for when search field is left empty.
  if (cityValue.length == 0){
    result.innerHTML = `<h3>Please enter a city name</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
      .then(resp => resp.json())
      //If city name is valid
      .then((data) => {
      console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);

        console.log(data.name);

        console.log(data.main);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        console.log(data.main.feels_like);

        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}</h1>
        <div class="temp-container">
          <div>
            <h4 class=title>min</h4>
            <h4 class=temp>${data.main.temp_min}</h4>
          </div>
          <div>
          <h4 class=title>max</h4>
          <h4 class=temp>${data.main.temp_max}</h4>
          </div>
          <div>
          <h4 class=title>feels like</h4>
          <h4 class=temp>${data.main.feels_like}</h4>
          </div>
        </div>
        `;
      })
      //If city name isn't valid
      .catch(() => {
        result.innerHTML = `<h3>City not found</h3>`;
      })
  }
};

searchButton.addEventListener("click", getWeather);

//two arguments: the name of the event to listen for (in this case, "load"), and the function that should be called when the event occurs.
window.addEventListener("load", getWeather);