const apiKey=`86c9b15f41ac05006f8c1ef23f9ae9af`;



async function doAPICall(){
    let zipCode = document.querySelector(".zip").value
    result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
        .catch((e)=>{console.error(e)
            alert("Bad Zip code")})
                .finally(console.log("API request is Over"));
    console.log(result);
    console.log(result.data);
    
    result = result.data;


    document.querySelector(".zipcode").innerText = result.name;
    document.querySelector(".pic").src ="https://openweathermap.org/img/wn/" + result.weather[0].icon + ".png";
    document.querySelector(".temp").innerText = "Currently: " + Math.floor(result.main.temp) + "°F";
    document.querySelector(".desc").innerText = result.weather[0].description;
    document.querySelector(".high").innerText = "High: " + Math.floor(result.main.temp_max) + "°F";
    document.querySelector(".low").innerText = "Low: " + Math.floor(result.main.temp_min) + "°F";

};