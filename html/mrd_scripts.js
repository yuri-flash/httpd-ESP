



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

closeSidebar();
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
}
function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

var yuri = 0;
function testfunc(){
  if (yuri != 0) return;
  yuri++;
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.setAttribute("src", "highcharts.js")
  document.getElementsByTagName("head")[0].appendChild(script)

  Highcharts.chart('container', {chart: {type: 'area',zoomType: 'x'},
  yAxis: {title: {text: 'AMPS'}},
  legend: {enabled: false},
  plotOptions: {series: {pointStart: 0,pointInterval: 0.02,turboThreshold:0}},
  title: {text: "Channel 1"},series: [{ name:'amp',data:serie[0]}]});

  Highcharts.chart('container2', {chart: {type: 'area',zoomType: 'x'},
  yAxis: {title: {text: 'AMPS'}},
  legend: {enabled: false},
  plotOptions: {series: {pointStart: 0,pointInterval: 0.02,turboThreshold:0}},
  title: {text: "Channel 2"},series: [{ name:'amp', color:'#d18e0a',data:serie[1]}]});

  Highcharts.chart('container3', {chart: {type: 'area',zoomType: 'x'},
  yAxis: {title: {text: 'AMPS'}},
  legend: {enabled: false},
  plotOptions: {series: {pointStart: 0,pointInterval: 0.02,turboThreshold:0}},
  title: {text: "Channel 3"},series: [{ name:'amp', color: '#d10a0a',data:serie[2]}]});

  Highcharts.chart('container4', {chart: {type: 'area',zoomType: 'x'},
  yAxis: {title: {text: 'AMPS'}},
  legend: {enabled: false},
  plotOptions: {series: {pointStart: 0,pointInterval: 0.02,turboThreshold:0}},
  title: {text: "Channel 4"},series: [{ name:'amp',color:'#54ba43',data:serie[3]}]});
}
(function() {
  setInterval("testfunc()", 200)

})();



var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateUTCConvert(date, toUTC) {
date = new Date(date);
var localOffset = date.getTimezoneOffset() * 60000;
var localTime = date.getTime();
if (toUTC) {
date = localTime + localOffset;
} else {
date = localTime - localOffset;
}
date = new Date(date);
return date;
}

function rightTimeFormat(time) {
if (time < 10) time = "0" + time;
return time;
}

function dateInsert(dt) {
var time = rightTimeFormat(dt.getHours()) + ":" + rightTimeFormat(dt.getMinutes()) + ":" + rightTimeFormat(dt.getSeconds());
var day = dt.getDate();
var date = (day < 10 ? '0' : '') + day + ' ' + month[dt.getMonth()] + ' ' + dt.getFullYear();
return date + " - " + time;
}

var serie = [[]];
var time_division = 0.02;
var subtitle_text;
var title_text;
var PSTime = '';
var rms_array_channel;
subtitle_text='Direction:Reverse, Peak:15.02, RMS: 14.12, Time:0.98';
title_text='Channel 2';
PSTime = '2017-06-01 23:17:05';

rms_array_channel=[[0.00,0.00,0.00,0.00,0.00,0.00,0.00,18.72,24.25,24.20,23.85,20.44,9.27,3.67,4.49,3.23,4.06,3.49,3.71,3.67,3.55,3.72,3.52,3.68,3.54,3.62,3.49,3.58,3.50,3.54,3.50,3.54,3.50,3.54,3.50,3.55,3.46,3.55,3.46,3.52,3.47,3.53,3.50,3.55,3.51,3.55,3.43,3.35,3.26,3.28,3.28,3.31,3.31,3.35,3.32,3.36,3.35,3.38,3.47,3.46,3.44,3.40,3.41,3.42,3.43,3.46,3.44,3.48,3.49,3.52,3.50,3.53,3.50,3.50,3.52,3.50,3.53,3.51,3.54,3.54,3.51,3.58,3.54,3.52,3.55,3.52,3.52,3.53,3.56,3.58,3.56,3.57,3.57,3.54,3.52,3.54,3.53,3.52,3.58,3.55,3.62,3.54,3.60,3.53,3.57,3.54,3.59,3.51,3.58,3.56,4.25,4.72,3.60,3.61,3.97,4.20,4.42,3.99,3.91,4.03,4.32,4.42,4.20,4.01,4.25,4.34,4.39,4.26,4.23,4.38,4.44,4.31,4.29,4.33,4.53,4.33,4.36,4.31,4.47,4.27,4.34,4.32,4.42,4.29,4.36,4.40,4.41,4.25,4.36,4.32,4.35,4.27,4.33,4.22,4.24,4.18,4.24,4.21,4.21,4.21,4.19,4.12,4.20,4.18,4.13,4.11,4.09,4.14,4.05,4.17,4.14,4.09,4.09,4.03,4.18,4.00,4.09,4.06,4.18,4.14,4.21,4.30,4.18,4.28,4.26,4.36,4.28,4.38,4.37,4.39,4.41,4.53,4.55,4.58,4.55,4.66,4.52,4.52,4.42,4.27,3.94,3.81,3.50,3.42,3.34,3.44,3.40,3.47,3.38,3.49,3.35,3.44,3.34,3.41,3.39,3.40,3.37,3.42,3.36,3.44,3.35,3.45,3.35,3.41,3.35,3.38,3.33,3.43,3.33,3.43,3.36,1.64,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],[0.00,0.00,0.00,0.00,0.00,0.00,0.00,18.72,24.25,24.20,23.85,20.44,9.27,3.67,4.49,3.23,4.06,3.49,3.71,3.67,3.55,3.72,3.52,3.68,3.54,3.62,3.49,3.58,3.50,3.54,3.50,3.54,3.50,3.54,3.50,3.55,3.46,3.55,3.46,3.52,3.47,3.53,3.50,3.55,3.51,3.55,3.43,3.35,3.26,3.28,3.28,3.31,3.31,3.35,3.32,3.36,3.35,3.38,3.47,3.46,3.44,3.40,3.41,3.42,3.43,3.46,3.44,3.48,3.49,3.52,3.50,3.53,3.50,3.50,3.52,3.50,3.53,3.51,3.54,3.54,3.51,3.58,3.54,3.52,3.55,3.52,3.52,3.53,3.56,3.58,3.56,3.57,3.57,3.54,3.52,3.54,3.53,3.52,3.58,3.55,3.62,3.54,3.60,3.53,3.57,3.54,3.59,3.51,3.58,3.56,4.25,4.72,3.60,3.61,3.97,4.20,4.42,3.99,3.91,4.03,4.32,4.42,4.20,4.01,4.25,4.34,4.39,4.26,4.23,4.38,4.44,4.31,4.29,4.33,4.53,4.33,4.36,4.31,4.47,4.27,4.34,4.32,4.42,4.29,4.36,4.40,4.41,4.25,4.36,4.32,4.35,4.27,4.33,4.22,4.24,4.18,4.24,4.21,4.21,4.21,4.19,4.12,4.20,4.18,4.13,4.11,4.09,4.14,4.05,4.17,4.14,4.09,4.09,4.03,4.18,4.00,4.09,4.06,4.18,4.14,4.21,4.30,4.18,4.28,4.26,4.36,4.28,4.38,4.37,4.39,4.41,4.53,4.55,4.58,4.55,4.66,4.52,4.52,4.42,4.27,3.94,3.81,3.50,3.42,3.34,3.44,3.40,3.47,3.38,3.49,3.35,3.44,3.34,3.41,3.39,3.40,3.37,3.42,3.36,3.44,3.35,3.45,3.35,3.41,3.35,3.38,3.33,3.43,3.33,3.43,3.36,1.64,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],[0.00,0.00,0.00,0.00,0.00,0.00,0.00,18.72,24.25,24.20,23.85,20.44,9.27,3.67,4.49,3.23,4.06,3.49,3.71,3.67,3.55,3.72,3.52,3.68,3.54,3.62,3.49,3.58,3.50,3.54,3.50,3.54,3.50,3.54,3.50,3.55,3.46,3.55,3.46,3.52,3.47,3.53,3.50,3.55,3.51,3.55,3.43,3.35,3.26,3.28,3.28,3.31,3.31,3.35,3.32,3.36,3.35,3.38,3.47,3.46,3.44,3.40,3.41,3.42,3.43,3.46,3.44,3.48,3.49,3.52,3.50,3.53,3.50,3.50,3.52,3.50,3.53,3.51,3.54,3.54,3.51,3.58,3.54,3.52,3.55,3.52,3.52,3.53,3.56,3.58,3.56,3.57,3.57,3.54,3.52,3.54,3.53,3.52,3.58,3.55,3.62,3.54,3.60,3.53,3.57,3.54,3.59,3.51,3.58,3.56,4.25,4.72,3.60,3.61,3.97,4.20,4.42,3.99,3.91,4.03,4.32,4.42,4.20,4.01,4.25,4.34,4.39,4.26,4.23,4.38,4.44,4.31,4.29,4.33,4.53,4.33,4.36,4.31,4.47,4.27,4.34,4.32,4.42,4.29,4.36,4.40,4.41,4.25,4.36,4.32,4.35,4.27,4.33,4.22,4.24,4.18,4.24,4.21,4.21,4.21,4.19,4.12,4.20,4.18,4.13,4.11,4.09,4.14,4.05,4.17,4.14,4.09,4.09,4.03,4.18,4.00,4.09,4.06,4.18,4.14,4.21,4.30,4.18,4.28,4.26,4.36,4.28,4.38,4.37,4.39,4.41,4.53,4.55,4.58,4.55,4.66,4.52,4.52,4.42,4.27,3.94,3.81,3.50,3.42,3.34,3.44,3.40,3.47,3.38,3.49,3.35,3.44,3.34,3.41,3.39,3.40,3.37,3.42,3.36,3.44,3.35,3.45,3.35,3.41,3.35,3.38,3.33,3.43,3.33,3.43,3.36,1.64,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],[0.00,0.00,0.00,0.00,0.00,0.00,0.00,18.72,24.25,24.20,23.85,20.44,9.27,3.67,4.49,3.23,4.06,3.49,3.71,3.67,3.55,3.72,3.52,3.68,3.54,3.62,3.49,3.58,3.50,3.54,3.50,3.54,3.50,3.54,3.50,3.55,3.46,3.55,3.46,3.52,3.47,3.53,3.50,3.55,3.51,3.55,3.43,3.35,3.26,3.28,3.28,3.31,3.31,3.35,3.32,3.36,3.35,3.38,3.47,3.46,3.44,3.40,3.41,3.42,3.43,3.46,3.44,3.48,3.49,3.52,3.50,3.53,3.50,3.50,3.52,3.50,3.53,3.51,3.54,3.54,3.51,3.58,3.54,3.52,3.55,3.52,3.52,3.53,3.56,3.58,3.56,3.57,3.57,3.54,3.52,3.54,3.53,3.52,3.58,3.55,3.62,3.54,3.60,3.53,3.57,3.54,3.59,3.51,3.58,3.56,4.25,4.72,3.60,3.61,3.97,4.20,4.42,3.99,3.91,4.03,4.32,4.42,4.20,4.01,4.25,4.34,4.39,4.26,4.23,4.38,4.44,4.31,4.29,4.33,4.53,4.33,4.36,4.31,4.47,4.27,4.34,4.32,4.42,4.29,4.36,4.40,4.41,4.25,4.36,4.32,4.35,4.27,4.33,4.22,4.24,4.18,4.24,4.21,4.21,4.21,4.19,4.12,4.20,4.18,4.13,4.11,4.09,4.14,4.05,4.17,4.14,4.09,4.09,4.03,4.18,4.00,4.09,4.06,4.18,4.14,4.21,4.30,4.18,4.28,4.26,4.36,4.28,4.38,4.37,4.39,4.41,4.53,4.55,4.58,4.55,4.66,4.52,4.52,4.42,4.27,3.94,3.81,3.50,3.42,3.34,3.44,3.40,3.47,3.38,3.49,3.35,3.44,3.34,3.41,3.39,3.40,3.37,3.42,3.36,3.44,3.35,3.45,3.35,3.41,3.35,3.38,3.33,3.43,3.33,3.43,3.36,1.64,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00]];

var date = new Date(PSTime);
PSTime = dateUTCConvert(date);
PSTime = '<br>' + dateInsert(PSTime);
var y_axis_tmp = 0;
serie.push( [] );
serie.push( [] );
serie.push( [] );
serie.push( [] );

serie[0].push([y_axis_tmp,rms_array_channel[0][0]]);
serie[1].push([y_axis_tmp,rms_array_channel[1][0]]);
serie[2].push([y_axis_tmp,rms_array_channel[2][0]]);
serie[3].push([y_axis_tmp,rms_array_channel[3][0]]);

for (var y = 0; y < 4; y++){
  y_axis_tmp = 0;
  for (var i = 1; i < rms_array_channel[y].length; i++)
  {
    y_axis_tmp = y_axis_tmp + time_division;
    serie[y].push([y_axis_tmp.toFixed(2),rms_array_channel[y][i]]);
  }

}
  title_text = title_text + PSTime;

$(document).ready(function() {
	});

function autoload(){
// document.body.style.zoom="80%";
	// var image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAA4ODg4PDg8REQ8WFxUXFiAdGxsdIDAiJSIlIjBJLjUuLjUuSUFOQDtATkF0W1FRW3SGcWtxhqORkaPNws3///8BDg4ODg8ODxERDxYXFRcWIB0bGx0gMCIlIiUiMEkuNS4uNS5JQU5AO0BOQXRbUVFbdIZxa3GGo5GRo83Czf/////AABEIAFUAUQMBIgACEQEDEQH/xAB5AAACAwEBAQAAAAAAAAAAAAAABwECAwQFBhAAAQMCBAMECgEFAAAAAAAAAQACAwQRBRIhUQYUMRNSYnEVFjIzQVNygZGhkiIlYWOxAQEBAQAAAAAAAAAAAAAAAAAAAQIRAQEBAAMBAAAAAAAAAAAAAAABEQIhQRL/2gAMAwEAAhEDEQA/AGHVVMdJG2SVriCbaBeD66YTG8xZJswK9bH5DHTxEAkl9koqhze3mv8AF5QMj1ywmMZnRzIh4ywkg5GTJZ5mbhTmj3CBmDjPCIm6iVRFxpgpGUGf+CWuaPcKc8e4QNL1wwj/AHfxXOOMsCYdXTX+hLbPHuEZ4twgdWHYlS4nBzFK8uZmLdRYqV8xwfNTtopw6VgJmX06AQhCDg4gDuWgLRciVKzFoWvmjvmBym6bONgcl2nQse0pZ40HPfHINDYNQfPcozvOU8pHu5aWl7zVOWXvj8IM+Ui3cp5OLxLXLL3x+FOST5n6QZ8nD4vyp5OHY/laZH/M/SsIZSAc7rH/AAgzZSxNc1zbgggg3TtjJMcZPUtCTLaeaxcC8hvU20CafDOI1NfRyunIJY8NFgmj1EIQgwxlrXYfKPJK7EARGBe4DwmhijA2gmHx0SyxDWG/jCDyAr5Xd0rMLdjXy3ygIsz3VcrtloyKR7g1rblAzl+S4Vz2kT22e2+41Cna3481cUlRa+TS+4WscNYGjI4gXAFnbqkkkwbrOHXPQKMzmx6VG39IVZVl7aLOxzzqLmx0K+64LcBQVBPzAl9K5zmvc4kmxTC4MafR01vmIPpEIQg5sSA9G1J+JbolhXe5P1BNDHB/b5PNqWGI+6O9xdB5Ku0gfC6zC1je6N2ZvVFlygA36K+VztQw/YLXnKjv/oKOan+YUNuYjJK7QRn7BD2SMAD2lu1wgTzA3EjlIEkztXXO5KdLvK2sJPdv+kpmcHNthjzvKl3LTubFIS9mg6A7pl8KNAweI7veUZeshCEHLjIBw6a/h/6lfiZsHM3OibFXTdvSyxjqW6JP4k48xJHa2VyDhB0CtdZ3O4U67oNLlW1VGse72Q4+QWzaSpfo2nmd5NKCuu6L+Jd8WC4nL7NDN9wuqPhrGH9KK3m4IOXDIWVNfSwuGdr5ACE2oIIaWFkUTA1jegXFh+HQUVNTt7GMTMYA97RqSu5AIQhALgqeGsJqql9TLE4vf4kIQTFw9gvXkWHzXazC8Ojtlo4RbwoQgGwxM9mNg8gAhCEEoQhAIQhAIQhB/9k=";
	// document.getElementById("image1").src = image;
	// document.getElementById("image2").src = image;
	cleanPage();
	document.getElementById("about").style.display = "block";
}

function cleanPage(){
document.getElementById("time").style.display = "none";
document.getElementById("network").style.display = "none";
document.getElementById("channels").style.display = "none";
document.getElementById("rs485").style.display = "none";
document.getElementById("graph").style.display = "none";
document.getElementById("reboot").style.display = "none";
document.getElementById("about").style.display = "none";

}

function channels(){
cleanPage();
document.getElementById("channels").style.display = "block";
closeSidebar();
}

function timeUnit(){
cleanPage();
document.getElementById("time").style.display = "block";
closeSidebar();
}

function networkSettings(){
cleanPage();
document.getElementById("network").style.display = "block";
closeSidebar();
}

function rs485(){
cleanPage();
document.getElementById("rs485").style.display = "block";
closeSidebar();
}

function graphUnit(){
cleanPage();
document.getElementById("graph").style.display = "block";
// Highcharts.chart('container', {chart: {type: 'area',zoomType: 'x'},
// yAxis: {title: {text: 'AMPS'}},
// legend: {enabled: false},
// plotOptions: {series: {pointStart: 0,pointInterval: 0.02,turboThreshold:0}},
// title: {text: title_text},subtitle: {text: subtitle_text},series: [{ name:'amp',data:serie[0]}]});


closeSidebar();
}

function reboot(){
cleanPage();
document.getElementById("reboot").style.display = "block";
closeSidebar();
}
