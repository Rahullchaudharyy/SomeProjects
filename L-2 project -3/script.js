var data = [
    { soungname: "Parvati boli Shanker se", url: "./soungs/Parvati Boli Shankar Se(PagalWorld.com.pe).mp3", Img: "./images/shivji.jpg" },
    { soungname: "Tera zikr", url: "./soungs/Tera Zikr(PagalWorld.com.pe).mp3", Img: "./images/teraziker.jpeg" },
    { soungname: "Ve kamleya", url: "./soungs/Ve Kamleya_320(PagalWorld.com.pe).mp3", Img: "./images/kamleyaa.jpg" },
    { soungname: "Jale 2", url: "./soungs/Jale 2.mp3", Img: "./images/jale2.jpeg" },
    { soungname: "Ram siya Ram", url: "./soungs/Ram Siya Ram.mp3", Img: "./images/RamSiyaRam.jpg" },
    { soungname: "Pehle Bhi Main", url: "./soungs/Pehle Bhi Main.mp3", Img: "./images/animal.jpg" },
    { soungname: "Arjan Vailly Ne", url: "./soungs/Arjan Vailly Ne.mp3", Img: "./images/animal.jpg" }



]
let allsoung = document.querySelector('#all-song')
var music = new Audio();
var pic = document.querySelector('#left')  /* made by me  */
var selected = 0
var back = document.querySelector('#backword')
var play = document.querySelector('#play')
var forwrd = document.querySelector('#Forwed')
var playerpic = document.querySelector('#player')
function mainfunction() {
    var Thesougns = '';
    data.forEach(function (soungs, indx) {
        Thesougns += ` <div class="soung-card" id =${indx}>
           <div id="part-1">
               <img src=${soungs.Img} alt="">
               <h2>${soungs.soungname}</h2>
               <h6>3:55s</h6>
           </div>
       </div>`;
    })
    allsoung.innerHTML = Thesougns;
    music.src = data[selected].url

    pic.style.backgroundImage = `url(${data[selected].Img})`
    playerpic.style.backgroundImage = `url(${data[selected].Img})`

    // console.log(Thesougns);
}
mainfunction()


allsoung.addEventListener('click', function (Details) {
    selected = Details.target.id
    play.innerHTML = '<i class="ri-pause-fill"></i>'
    icon = 1
    mainfunction()
    music.play()
})

var icon = '';
play.addEventListener('click', function () {
    if (icon == 0) {
        play.innerHTML = '<i class="ri-pause-fill"></i>'
        mainfunction()
        music.play()
        icon = 1
    } else {
        mainfunction()
        music.pause()
        play.innerHTML = '<i class="ri-play-fill"></i>'
        icon = 0
    }

})
forwrd.addEventListener('click', function () {
    if (selected < data.length - 1) {
        selected++
        mainfunction()
        music.play()
    } else {
        forwrd.style.opacity = '0.5'
    }
})
back.addEventListener('click', function () {
    if (selected >= 0) {
        selected--
        mainfunction()
        music.play()
    } else {
        back.style.opacity = '0.5'
    }
})
