var profiles = document.querySelector("#profiles");
for (var x = 0; x < 100; x++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("profile");
    profiles.appendChild(newDiv);
    newDiv.innerHTML = "<img src=https://picsum.photos/100?random=" + (Math.floor(Math.random() * 1000)) + ">" + "</br>" + "Username: " + getRandomString(10) + "</br>" + "Age: " + getRandomInt(1, 100) + "</br>" + "Description:" + getRandomStringDesc(100);
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getRandomStringDesc(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function truncateString(str, num) {
    return str;
}

truncateString(getRandomStringDesc(100), 25);