let randNum = Math.floor(Math.random()*101);
total = 0
function GN(){
    const Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number > randNum){
        alert ("น้อยกว่า")
    }else if(Guess_Number < randNum){
        alert ("มากว่า");
    }else{
        alert ("ถูกต้อง ค่าที่ถูกคือ :"+randNum+"คุณทายไปทั้งหมด :"+total+"ครั้ง")
    }  
    total = total +1;
}   