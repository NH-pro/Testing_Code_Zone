let meStatus = 'alive';

function myFate(){
    if (meStatus === 'alive'){
        document.getElementById("test").innerText = "I am destroyed";
        document.getElementById("button").style.backgroundColor = "limegreen";
        document.getElementById("button").innerText = "Big Green Button";
        meStatus = 'dead';
    }
    else if (meStatus === 'dead'){
        document.getElementById("test").innerText = "I am alive";
        document.getElementById("button").style.backgroundColor = "red";
        document.getElementById("button").innerText ="Big Red Button";
        meStatus = 'alive';
    }
}

let favoriteColor = '';
let favoriteAnimal = '';
let favoriteFood = '';

function yourAnswers(){
    if (favoriteColor === ''){
        favoriteColor = document.getElementById("textAnswer").value;
        document.getElementById("colorAnswer").innerText = favoriteColor;
        document.getElementById("questions").innerText = 'What is your favorite animal?';
    }
    else if (favoriteAnimal === ''){
        favoriteAnimal = document.getElementById("textAnswer").value;
        document.getElementById("animalAnswer").innerText = favoriteAnimal;
        document.getElementById("questions").innerText = 'What is your favorite food?';
    }
    else if (favoriteFood === ''){
        favoriteFood = document.getElementById("textAnswer").value;
        document.getElementById("foodAnswer").innerText = favoriteFood;
        document.getElementById("questions").innerText = 'Those are cool facts. It is nice to meet you!';
    }
}