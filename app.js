var wrapperEle = document.querySelector(".wrapper");


var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

for(var i=0; i<list.length; i++) {

    if (list[i].name && list[i].sound )


    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var soundEle = document.createElement("h2");


    nameEle.innerHTML = "Name: " + list[i].name;
    soundEle.innerHTML = "Sound: " + list[i].sound;

    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    wrapperEle.appendChild(ele);

    if (list[i].sound > 5) {
        soundEle.style.color ="blue";
}}



// creating a counter

var clicks = 10;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}


if (onClick >=15 )



onClick()=0;
ele.innerHTML="Dragon wins!"+ "user health="+ userhealth+ ", dragon health=" + dragonhealth;