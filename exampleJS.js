let meStatus = 'alive';

function myFunction() {
    if (meStatus === 'alive'){
        document.getElementById("test").innerText= "I am destroyed";
        document.getElementById("button").style.backgroundColor="limegreen";
        document.getElementById("button").innerText="Big Green Button";
        meStatus = 'dead';
    }
    else if (meStatus === 'dead'){
        document.getElementById("test").innerText= "I am alive";
        document.getElementById("button").style.backgroundColor="red";
        document.getElementById("button").innerText="Big Red Button";
        meStatus = 'alive';
    }
}