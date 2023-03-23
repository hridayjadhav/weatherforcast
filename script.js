const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id , text) =>{
    document.getElementById(id).innerText = text
}
const displayTemperature = temperature => {
    console.log(temperature)
    setInnerText('city', temperature.name)
    setInnerText('weather',temperature.weather[0].main)
    setInnerText('temp',temperature.main.temp)

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('img-icon')
    imgIcon.setAttribute('src',url)
}



window.addEventListener('scroll', reveal);

function reveal () {
    var reveals = document.querySelectorAll('.reveal');
     
    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
