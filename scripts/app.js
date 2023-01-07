
const d = new Date();
currentyear = d.getFullYear();
currentmonth = d.getMonth()+1;
currentday = d.getDate();
currenthour = d.getHours();
currentminute = d.getMinutes();
currentsecond = d.getSeconds();

document.querySelector("#year1").innerHTML = currentyear;
document.querySelector("#date1").innerHTML = `${currentmonth}/${currentday}/${currentyear} \
${currenthour}:${currentminute}:${currentsecond}`;