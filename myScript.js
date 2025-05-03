const bgm = document.getElementById("ost233");
let previousBgmSrc;
function enableLoop() {
    bgm.loop = true;
}

function disableLoop(){
    bgm.loop = false;
}

function checkLoopStatus(){
    alert(bgm.loop);
}

document.getElementById("myButton").onclick = function () {
    let username = document.getElementById("myText").value;
    let rtdConfirmed;
    const radios = document.getElementsByName('retardation');

    for (const radio of radios) {
        if (radio.checked) {
            rtdConfirmed = radio.value;
            break;
        }
    }

    document.getElementById("myH1").textContent = `Hello ${username} and you are ${rtdConfirmed}`

    const person = {
        firstName: username,
        lastName: "Sorasaki",
        age: 17,
        fullName: function() {
            return (this.lastName + " " + this.firstName).toUpperCase();
        }
    }


    document.getElementById("inside_result").innerHTML = person.fullName();

    updateSongName(bgm.src);
}



function goPlay(){
    bgm.play();
}

function goPause(){
    bgm.pause();
}

function updateSongName(src) {
    const fileName = decodeURIComponent(src.split('/').pop().replace('.mp3', ''));
    document.getElementById('songTitle').textContent = fileName;
}

// On autoplay or manual play, update the name
bgm.addEventListener('play', () => {
    updateSongName(bgm.src);
});

// If autoplay starts before JS is ready (e.g., cached), check immediately
window.addEventListener('DOMContentLoaded', () => {
    // If autoplayed and already playing
    if (!bgm.paused) {
        updateSongName(bgm.src);
    } else {
        // Fallback: Wait for play event
        bgm.addEventListener('play', () => {
            updateSongName(bgm.src);
        });
    }
});
