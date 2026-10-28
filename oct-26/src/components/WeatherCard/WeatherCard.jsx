import "./WeatherCard.css"
function WeatherCard({ city, tempF, condition, windMph }) {
  // work out the advice, icon and alert here, before the return
  let advice;
  let icon;
  if(tempF <= 32){
    advice = "Freezing: heavy coat, hat and gloves"
  }else if(tempF <= 50){
    advice = "Cold: wear a jacket"
  }else if(tempF <= 75){
    advice = "Nice: a light layer is fine"
  }else{
    advice = "Hot: shorts and plenty of water"
  }

  if(condition.toLowerCase().trim() === "snow"){
    icon = "❄️"
  }else if(condition.toLowerCase().trim() === "sunny"){
    icon = "☀️"
  }else if(condition.toLowerCase().trim() === "rain"){
    icon = "🌧️"
  }else{
    icon = "☁️"
  }
  return (
    <div className="weather-card">
      <h3>{icon}{city}: {tempF}°F</h3>
      <p>{advice}</p>
      {condition.toLowerCase().trim() === "rain" && <p>Bring an umbrella</p>}
      {/* your conditional parts go here */}
    </div>
  )
}
 
export default WeatherCard
