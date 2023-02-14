function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mid = "AM";
    mid = hour >= 12 ? "PM" : "AM";
    hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.querySelector("#time").innerHTML = `${hour}:${min}:${sec}`;
    document.querySelector("#mid").innerHTML = `${mid}`;
    let curr_date = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let month_name = [
        "January","February","March","April","May","June","July","August","September","October",
		"November","December"
    ];
    let showDay = document.querySelectorAll(".day_wrapper span");
    document.querySelector(
        "#showDate"
    ).innerHTML = `${month_name[month]} ${curr_date} ${year}`;
    showDay[day].style.color = "black";
}
function updateTime(e) {
    if (e < 10) return "0" + e;
    else return e;
}
setInterval(currentTime, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Buttons Events

function alarmSet(){
	var h = Number(document.getElementById('alarmhrs').value);
	var m = Number(document.getElementById('alarmmins').value);
	var s = Number(document.getElementById('alarmsecs').value);
	var x = document.getElementById('ampm').value;
	
	
    setInterval(function(){
        var date = new Date();
	    //var hours = (12 - (date.getHours()));
		var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
        if (h===hours && m===minutes && s===seconds && x===ampm) {
            alert("Wake Up!");
        }

    },1000);
}

//clear alarm
function alarmClear() {

	document.getElementById('alarmhrs').value = null;
	document.getElementById('alarmmins').value = null;
	document.getElementById('alarmsecs').value = null;
	document.getElementById('ampm').value = 'AM';
}