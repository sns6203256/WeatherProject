const API_KEY = `4e25c410f58753e5c1a1dcf002f7f107`
//const API=  `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather");


const getWeather= async(city)=>{
     const url= `https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff04922998271a805eedf959ab70867a`
    const response= await fetch(url);
//    console.log(resp);
   const data=await response.json();
    // console.log(data);
     return showWeather(data)
}
 const showWeather=(data)=>{

    console.log(data)
    weather.innerHTML=`
     <div>
     <img src="https://www.freepik.com/free-vector/realistic-weather-icons-set_3887704.htm#query=weather%20png&position=0&from_view=keyword&track=ais&uuid=117f9dc8-f571-44f4-9414-8273d800badb"/>
    
     </div>
     <div>
      <h2> ${data.main.temp}℃</h2>
     <h2> ${data.weather[0].main}clear</h2>
    </div>
     `
 }


form.addEventListener(
    "submit",
    function (event){
        getWeather(search.value);
        event.preventDefault();

    }
)

