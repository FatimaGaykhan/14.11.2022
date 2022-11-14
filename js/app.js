// task1
//function passTheSite () {


//     if (window.confirm("Sayta daxil olmaq ucun OK duymesini sixin ")) {
//         window.open("second.html");
//       }
    
//}
// task1

// task2

// function Age(){
//    var age=prompt("Yasinizi daxil edin")
//     if(age<18){
//         alert('minimum yas heddi 18-dir')
//     }else {
//         alert('yasiniz daxil edildi')
//     }
// }

// task2
function Show(){
    var input=document.getElementById('inp');
    var value=input.value 
    document.getElementById('group').innerHTML=value;
    var new_value=value.slice(-3);

    if(new_value[0]=='1'){
        document.getElementById('group').style.color='yellow'
        document.getElementById('name').style.color='black'

    }else if(new_value[0]=='2'){
        document.getElementById('group').style.color='red'
        document.getElementById('name').style.color='black'

    }else if(new_value[0]=='3'){
        document.getElementById('group').style.color='black'
        document.getElementById('name').style.color='black'
        
    }
}








