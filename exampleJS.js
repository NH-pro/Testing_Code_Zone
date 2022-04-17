// Start of Big Red Button code.
let meStatus = 'alive';

function myFate(){
    if (meStatus === 'alive'){
        document.getElementById("test").innerText = "KABOOM!";
        document.getElementById("test").style.fontSize = "100px";
        document.getElementById("button").style.backgroundColor= "limegreen";
        document.body.style.backgroundImage = "url('explosion-boom.gif')";
        document.body.style.backgroundSize = "100%";
        document.body.style.backgroundRepeat = "repeat-x";
        document.body.style.backgroundPosition = "";
        document.getElementById("button").innerText = "Big Green Button";
        meStatus = 'dead';
    }
    else if (meStatus === 'dead'){
        document.getElementById("test").innerText = "No Kaboom";
        document.getElementById("test").style.fontSize = "";
        document.getElementById("button").style.backgroundColor = "red";
        document.body.style.backgroundImage = "";
        document.getElementById("button").innerText ="Big Red Button";
        meStatus = 'alive';
    }
}
// End of Big Red Button code.

// Start of Getting to Know You code.
let favoriteColor = '';
let favoriteAnimal = '';
let favoriteFood = '';

function yourAnswers(){
    if (favoriteColor === ''){
        favoriteColor = document.getElementById("textAnswer").value;
        document.getElementById("colorAnswer").innerText = favoriteColor;
        document.getElementById("questions").innerText = 'What is your favorite animal?';
        document.getElementById("textAnswer").value = '';
    }
    else if (favoriteAnimal === ''){
        favoriteAnimal = document.getElementById("textAnswer").value;
        document.getElementById("animalAnswer").innerText = favoriteAnimal;
        document.getElementById("questions").innerText = 'What is your favorite food?';
        document.getElementById("textAnswer").value = '';
    }
    else if (favoriteFood === ''){
        favoriteFood = document.getElementById("textAnswer").value;
        document.getElementById("foodAnswer").innerText = favoriteFood;
        document.getElementById("questions").innerText = 'Those are cool facts. It is nice to meet you! If you would like to reset your answers, click "Submit Answers" again.';
        document.getElementById("textAnswer").value = '';
    }
    else if (favoriteColor != '' && favoriteAnimal != '' && favoriteFood != ''){
        favoriteColor = '';
        favoriteAnimal = '';
        favoriteFood = '';
        document.getElementById("colorAnswer").innerText = 'favorite color';
        document.getElementById("animalAnswer").innerText = 'favorite animal';
        document.getElementById("foodAnswer").innerText = 'favorite food';
        document.getElementById("questions").innerText = 'Tell me about yourself. What is your favorite color?';
        document.getElementById("textAnswer").value = '';
    }
}
// End of Getting to Know You code.

// Start of Hobbies Array code.
function showHobbies(){
    let myHobbies = ['Tasting new foods', 'Playing disc golf', 'Playing Magic the Gathering with friends', 'Learning how to code'];
    document.getElementById("hobbies").innerText = myHobbies.join(' and ');
}
