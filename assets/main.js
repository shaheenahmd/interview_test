let pswd = document.getElementsByClassName("pswd");


function passWordGenerator(){

    let random_data = Math.random()*1000;
    pswd.innerHTML = random_data;
    console.log(random_data);
    
}




