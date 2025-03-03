const fetchData=async()=>{
    const city =document.getElementById( "city" ).value;
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdb30cb294bb5d5c13115a7003717583`);
    const jsonData=await data.json();
   document.getElementById("temp").value= `${jsonData.main.temp - 273.15} °C`
    document.getElementById("humid").value= `${jsonData.main.humidity}%`
    document.getElementById("ws").value=`${ jsonData.wind.speed} Km/H`

}