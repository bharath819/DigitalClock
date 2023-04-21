 setInterval(show_time,1000)
 
 function show_time(){
    var date1= new Date();
    //var hours=12;
    var hours=date1.getHours();
    var mins=date1.getMinutes();
    var seconds=date1.getSeconds();
    var am_pm="AM";
    if( hours>=12){
        hours=hours-12;
        am_pm="PM";
    }
    if(hours==0){
        hours=12;
    }

    var para=document.getElementById("para");
    para.textContent=`${hours}:${mins}:${seconds}:${am_pm}`;
 }
// var hours= hour<10?"0"+ hour:hourlcg;
// var min = min<10 ? "0" +min:min;para");


var month = new Date();
var month1 = month.getMonth();
console.log(month1)


var mon = ["jan","feb","mar","april","may"];
console.log(mon[month1]);
var para = document.getElementById("para1")

para.textContent=`${mon[month1]}`