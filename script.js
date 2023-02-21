function displayTime() {
    var date = new Date();
    var hours = (date.getHours()+1);
    var minutes = date.getMinutes();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;

    var time = hours + ":" + minutes + " asti";
    document.getElementById("time").innerHTML = time;
}



const hyrrä = document.getElementById("hyrrä");

fetch("https://hsltaskuvari.onrender.com/api/color")
  .then((response) => response.json())
  .then((data) => {
    const color = data.color;
    kameleontti.style.backgroundColor = color;
  })