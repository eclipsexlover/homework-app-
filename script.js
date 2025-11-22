document.getElementById('get-weather').addEventListener('click', function() {
    const weatherInfo = document.getElementById('weather-info');
    
    const weatherData = {
        city: "Москва",
        temperature: Math.round(Math.random() * 30 - 5), 
        conditions: ['Солнечно', 'Облачно', 'Дождь', 'Снег'][Math.floor(Math.random() * 4)],
        windSpeed: (Math.random() * 10).toFixed(1)
    };
    
    weatherInfo.innerHTML = `
        <h3>Погода в ${weatherData.city}</h3>
        <p>Температура: ${weatherData.temperature}°C</p>
        <p>${weatherData.conditions}</p>
        <p>Ветер: ${weatherData.windSpeed} м/с</p>
    `;
});

function testWeatherApp() {
    return typeof document !== 'undefined' && 
           typeof document.getElementById === 'function';
}
