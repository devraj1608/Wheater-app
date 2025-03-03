# Weather App

A simple Weather App built using HTML, CSS, and JavaScript that provides real-time weather information based on user input.

## Features

- Fetches real-time weather data using an API
- Displays temperature, humidity, and weather conditions
- Supports searching for weather by city name
- User-friendly and responsive UI

## Technologies Used

- **HTML**: Structure of the app
- **CSS**: Styling and responsiveness
- **JavaScript**: Fetching data from the API and dynamic updates

## How It Works

1. Enter the city name in the search bar.
2. Click the search button to fetch weather data.
3. The app will display the current temperature, weather condition, humidity, and other details.

## Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Open the project folder and launch `index.html` in a browser.
3. Ensure you have an active internet connection to fetch weather data.

## API Integration

This app uses the **OpenWeatherMap API** to fetch weather data. To use it:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) and get an API key.
2. Replace `YOUR_API_KEY` in the JavaScript file with your actual API key.

```js
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=" + apiKey;
```

## Screenshots

[FrontEnd]([https://openweathermap.org/](https://github.com/devraj1608/Wheater-app/blob/cd2c839adb321d6bf079975f62d147d6b3d3ffbe/Screenshot%202025-03-03%20153550.png))

## Future Enhancements

- Add support for location-based weather detection
- Implement a 7-day weather forecast
- Improve UI/UX with animations



---

Feel free to contribute by submitting issues and pull requests!

