
//  https://api.openweathermap.org/data/2.5/weather?q=london&appid=5af6ac98121db86450b05cdf520406c3

// https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=5af6ac98121db86450b05cdf520406c3

//https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=5af6ac98121db86450b05cdf520406c3

//http://openweathermap.org/img/wn/01n@2x.png

let weather = {
     apiKey : "5af6ac98121db86450b05cdf520406c3",

     fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city+"&units=metric&appid="
        +this.apiKey)
        .then((response) => response.json())
      //   .then((data) => console.log(data));
      .then((data) => this.displayWeather(data));
     },
     displayWeather : function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp, humidity,speed);
        document.querySelector(".city")
.innerText = "Weather in "+name;     

        document.querySelector(".temp")
.innerText = "Temperature - "+temp +"°C";     

        document.querySelector(".icon")
.src = "https://openweathermap.org/img/wn/" + icon +".png";     

        document.querySelector(".description")
.innerText = description;     

        document.querySelector(".humidity")
.innerText = "humidity is "+humidity+ "%";     

        document.querySelector(".wind")
.innerText = "Wind Speed is - "+speed+" km/h";
},

// working now
search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
},

};

document.querySelector(".search button").addEventListener("click", function(){
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(){
        if(event.key == "Enter"){
                weather.search();
        }
});

