
function savedata(){
    
    var sno= document.getElementById("t1").value   ;
    var name=document.getElementById("t2").value;
    var startdate=document.getElementById("t3").value;
    console.log(startdate);
    var startDateData=new Date(startdate);
    var enddate=document.getElementById("t4").value;
    var endDateData=new Date(enddate);
    var amount=document.getElementById("t5").value;
var ref=document.getElementById("table2");
var data=[sno,startdate,enddate,amount];
const time= Math.abs(startDateData.getTime() - endDateData.getTime());
    const days= Math.ceil(time / (1000 * 60 * 60 * 24));
    var month = Math.floor(days/30);
    console.log(month);
    var total=0;
    for (var i = 0; i < month; i++) {
        var newRow = ref.insertRow(-1);
        for (var j = 0; j < 4; j++) {
            var tab = newRow.insertCell(-1);
            switch(j){
                case 0:
                    tab.innerHTML =sno;
                    sno++;
                break;
                case 1:
                    tab.innerHTML =startDateData;
                    startDateData.setMonth(startDateData.getMonth() + 1);
                break;
                case 2:
                    tab.innerHTML =startDateData;
                break;
                case 3:tab.innerHTML =amount;
                    total+=Number(amount);
                break;
            }

            

        }
    }
    var final = document.getElementById("paragraph");
    final.innerHTML="The total amount is :"+total;
    


    
}