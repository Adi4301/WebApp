const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const info = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal==""){
       city_name.innerText("Data Not inserted");
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0bbbe1737b5bb4bbe559e60b4df098c8`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys[0].country}`
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            console.log(response);
        }catch{
          city_name.innerText("Wrong Entry");
        }
    }
}
// const info = ()=>{
//     // alert("Hi");
// }

submitBtn.addEventListener('click',info);