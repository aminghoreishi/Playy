let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let audio = document.querySelector("audio");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let paragraf = document.querySelector(".paragraf");
let picture = document.querySelector(".size-full");
let timer = document.querySelector("#timer");
let plus5 = document.querySelector(".plus5");
let min5 = document.querySelector(".min5");
let back = document.querySelector(".back");
let random = document.querySelector(".random");
let menu = document.querySelector(".menu");
let click = document.querySelector(".click");
let closeE = document.querySelector(".close");
let offcanvase = document.querySelectorAll(".offcanvase");
let offcanvase1 = document.querySelector(".offcanvase1");
let offcanvase2 = document.querySelector(".offcanvase2");
let offcanvase3 = document.querySelector(".offcanvase3");
let offcanvase4 = document.querySelector(".offcanvase4");
let offcanvase5 = document.querySelector(".offcanvase5");
let offcanvase6 = document.querySelector(".offcanvase6");
let offcanvase7 = document.querySelector(".offcanvase7");
let offcanvase8 = document.querySelector(".offcanvase8");
let offcanvase9 = document.querySelector(".offcanvase9");
let offcanvase10 = document.querySelector(".offcanvase10");
let offcanvase11 = document.querySelector(".offcanvase11");
let offcanvaseP1 = document.querySelector(".ofcanvaseP1");
let offcanvaseP2 = document.querySelector(".ofcanvaseP2");
let offcanvaseP3 = document.querySelector(".ofcanvaseP3");
let offcanvaseP4 = document.querySelector(".ofcanvaseP4");
let offcanvaseP5 = document.querySelector(".ofcanvaseP5");
let offcanvaseP6 = document.querySelector(".ofcanvaseP6");
let offcanvaseP7 = document.querySelector(".ofcanvaseP7");
let offcanvaseP8 = document.querySelector(".ofcanvaseP8");
let offcanvaseP9 = document.querySelector(".ofcanvaseP9");
let offcanvaseP10 = document.querySelector(".ofcanvaseP10");
let offcanvaseP11 = document.querySelector(".ofcanvaseP11");
let Aref = document.querySelector(".Aref");
let Ahamad = document.querySelector(".Ahamad");
let Haydeh = document.querySelector(".Haydeh");
let Dariush = document.querySelector(".Dariush");
let DelAsireh = document.querySelector(".DelAsireh ");
let _borderline = document.querySelector("._borderline");
let Ebi = document.querySelector(".Ebi");
let Ali = document.querySelector(".Ali");
let Havar = document.querySelector(".Havar");
let Tangna = document.querySelector(".Tangna");
let maryam = document.querySelector(".maryam");
let sm1 = document.querySelector(".sm1");
let sm2 = document.querySelector(".sm2");
let sm3 = document.querySelector(".sm3");
let sm4 = document.querySelector(".sm4");
let sm5 = document.querySelector(".sm5");
let sm6 = document.querySelector(".sm6");
let sm7 = document.querySelector(".sm7");
let sm8 = document.querySelector(".sm8");
let sm9 = document.querySelector(".sm9");
let sm10 = document.querySelector(".sm10");
let sm11 = document.querySelector(".sm11");
let overlay = document.querySelector(".overlay");
let loader = document.querySelector(".gh");
window.addEventListener("load", function () {
  loader.classList.add("none");
});
const song = [
  './Aref - gol golkhoone - 128.mp3',
  './Ahmad-Azad-Moo-Sharabi-128.mp3',
  './Alireza Eftekhari - Shakhe Shemshad (128).mp3',
  './Hayedeh - Zahre Jodaee [www.AppAhang.com].mp3',
  './Dariush - Soghoot_musiceto.com.mp3',
  './08 - Kolbeh.mp3',
  './tame_impala_-_borderline.mp3',
  './Kourosh Yaghmaei - 09 Havar Havar (GandomMusic.ir).mp3',
  './Fereidoon Foroughi - Tangna [128].mp3',
  './spotifydown.com - Jaane Maryam.mp3',
  './Faramarz Aslani - Del Asireh [www.AppAhang.com].mp3',
];
const img = [
  './Aref.jpg',
  './1200x630bb.jpg',
  './Alireza-Eftekhari-Shakhe-Shemshad.jpg',
  './artworks-2SO3hBzTspekk4ds-nmlhzA-t500x500.jpg',
  './Dariush-40-Golden-Hits-Of-Dariush.jpg',
  './Ebi-Khalij.jpg',
  './Borderline-Tame-Impala.jpg',
  './Hadjm-e_Khali_and_Akhm_Nakon_vinyl_cover.jpg',
  './Fereidoon Foroughi-Tangna.jpg',
  './619ac1d5058b05455fd565ce5688fa38d5dd125f.jpg',
  './7493164740225665891647402256876616474022563579.webp',
];
const caption = [
  'Goleh gol khoneh man',
  'Moo Sharabi',
  'Shakhe Shemshad',
  'Zahre Jodaee',
  'Soghoot',
  'Kolbeh',
  'borderline',
  'Havar Havar',
  'Tangna',
  'Jaane Maryam',
  'Del Assire',
];
const titlE = [
  'Aref',
  'Ahmad Azad',
  'Alireza Eftekhari',
  'Hayedeh',
  'Dariush',
  'Ebi',
  'tame',
  'Kourosh Yaghmaei',
  'Fereidoon Foroughi',
  'Mohammad Noori',
  'Faramarz Aslani',
];
let index = 0;
let indexPic = 0;
let indexTitle = 0;
let captionIndex = 0;
play.addEventListener("click", function () {
  audio.play();
  pause.classList.toggle("none");
  play.classList.toggle("none");
  let interval = setInterval(function () {
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    timer.innerHTML = min + ":" + sec;
    if (audio.currentTime >= audio.duration) {
      clearInterval(interval);
      timer.innerHTML = "0:00";
      pause.classList.add("none");
      play.classList.remove("none");
    }
  }, 1000);
});
pause.addEventListener("click", function () {
  audio.pause();
  pause.classList.toggle("none");
  play.classList.toggle("none");
});
next.addEventListener("click", function () {
  index++;
  indexPic++;
  indexTitle++;
  captionIndex++;
  if (index > song.length - 1 && indexPic > img.length - 1) {
    index = 0;
    indexPic = 0;
  }
  if (indexTitle > titlE.length - 1) {
    indexTitle = 0;
  }
  if (captionIndex > caption.length - 1) {
    captionIndex = 0;
  }
  pause.classList.remove("none");
  play.classList.add("none");
  audio.setAttribute("src", song[index]);
  picture.setAttribute("src", img[indexPic]);
  paragraf.innerHTML = caption[captionIndex];
  title.innerHTML = titlE[indexTitle];
  document.title = caption[captionIndex];
  let interval = setInterval(function () {
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    timer.innerHTML = min + ":" + sec;
    if (audio.currentTime >= audio.duration) {
      clearInterval(interval);
      timer.innerHTML = "0:00";
      pause.classList.remove("none");
      play.classList.add("none");
      index++;
      indexPic++;
      indexTitle++;
      captionIndex++;
      if (index > song.length - 1 && indexPic > img.length - 1) {
        index = -1;
        indexPic = -1;
      }
      if (indexTitle > titlE.length - 1) {
        indexTitle = -1;
      }
      if (captionIndex > caption.length - 1) {
        captionIndex = -1;
      }
      audio.setAttribute("src", song[index]);
      picture.setAttribute("src", img[indexPic]);
      paragraf.innerHTML = caption[captionIndex];
      title.innerHTML = titlE[indexTitle];

      audio.play();
    }
  }, 1000);
  audio.play();
});
back.addEventListener("click", function () {
  index--;
  indexPic--;
  indexTitle--;
  captionIndex--;
  if (index < 0 && indexPic < 0) {
    index = 10;
    indexPic = 10;
  }
  if (indexTitle < 0) {
    indexTitle = 10;
  }
  if (captionIndex < 0) {
    captionIndex = 10;
  }
  pause.classList.remove("none");
  play.classList.add("none");
  audio.setAttribute("src", song[index]);
  picture.setAttribute("src", img[indexPic]);
  title.innerHTML = titlE[indexTitle];
  paragraf.innerHTML = caption[captionIndex];
  document.title = caption[captionIndex];
  let interval = setInterval(function () {
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    timer.innerHTML = min + ":" + sec;
    if (audio.currentTime >= audio.duration) {
      clearInterval(interval);
      if (index > song.length - 1 && indexPic > img.length - 1) {
        index = 0;
        indexPic = 0;
      }
      if (indexTitle > titlE.length - 1) {
        indexTitle = 0;
      }
      if (captionIndex > titlE.length - 1) {
        captionIndex = 0;
      }
      audio.setAttribute("src", song[index]);
      picture.setAttribute("src", img[indexPic]);
      paragraf.innerHTML = caption[captionIndex];
      title.innerHTML = titlE[indexTitle];
      timer.innerHTML = "0:00";
      pause.classList.add("none");
      play.classList.remove("none");
      audio.play();
    }
  }, 1000);
  audio.play();
});
plus5.addEventListener("click", function () {
  audio.currentTime += 5;
});
min5.addEventListener("click", function () {
  audio.currentTime -= 5;
});

random.addEventListener("click", function () {
  let rand = Math.floor(Math.random() * 11);
  console.log(rand);
  audio.setAttribute("src", song[rand]);
  picture.setAttribute("src", img[rand]);
  paragraf.innerHTML = caption[rand];
  title.innerHTML = titlE[rand];

  let interval = setInterval(function () {
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    timer.innerHTML = min + ":" + sec;
    if (audio.currentTime >= audio.duration) {
      clearInterval(interval);
      timer.innerHTML = "0:00";
      pause.classList.add("none");
      play.classList.remove("none");
    }
  }, 1000);
  pause.classList.remove("none");
  play.classList.add("none");
  audio.play();
});
menu.style.left = "-8989px";

click.addEventListener("click", function () {
  menu.style.left = "0px";

  overlay.classList.remove("invisible", "opacity-0");
});
closeE.addEventListener("click", function () {
  menu.style.left = "-8989px";
  overlay.classList.add("invisible", "opacity-0");
});

offcanvase.forEach(function (item) {
  item.addEventListener("click", function () {
    let f = item.getAttribute("src");
    let interval = setInterval(function () {
      let min = Math.floor(audio.currentTime / 60);
      let sec = Math.floor(audio.currentTime % 60);
      if (sec < 10) {
        sec = "0" + sec;
      }
      timer.innerHTML = min + ":" + sec;
      if (audio.currentTime >= audio.duration) {
        clearInterval(interval);
        timer.innerHTML = "0:00";
        pause.classList.add("none");
        play.classList.remove("none");
      }
    }, 1000);

    audio.setAttribute("src", f);
    pause.classList.remove("none");
    play.classList.add("none");
    audio.play();
  });
});
offcanvase1.addEventListener("click", function () {
  let give = Aref.getAttribute("src");
  let para = offcanvaseP1.innerHTML;
  let pa = sm1.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Aref";
});
offcanvase2.addEventListener("click", function () {
  let give = Ahamad.getAttribute("src");
  let para = offcanvaseP2.innerHTML;
  let pa = sm2.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Moo sharabi";
});
offcanvase3.addEventListener("click", function () {
  let give = Ali.getAttribute("src");
  let para = offcanvaseP3.innerHTML;
  let pa = sm3.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Shakheh Shemshad";
});
offcanvase4.addEventListener("click", function () {
  let give = Haydeh.getAttribute("src");
  let para = offcanvaseP4.innerHTML;
  let pa = sm4.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Zahr jodaee";
});
offcanvase5.addEventListener("click", function () {
  let give = Dariush.getAttribute("src");
  let para = offcanvaseP5.innerHTML;
  let pa = sm5.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
});
offcanvase5.addEventListener("click", function () {
  let give = Dariush.getAttribute("src");
  let para = offcanvaseP5.innerHTML;
  let pa = sm5.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Soghoot";
});
offcanvase6.addEventListener("click", function () {
  let give = Ebi.getAttribute("src");
  let para = offcanvaseP6.innerHTML;
  let pa = sm6.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Kolbeh";
});
offcanvase7.addEventListener("click", function () {
  let give = _borderline.getAttribute("src");
  let para = offcanvaseP7.innerHTML;
  let pa = sm7.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Borderline";
});
offcanvase8.addEventListener("click", function () {
  let give = Havar.getAttribute("src");
  let para = offcanvaseP8.innerHTML;
  let pa = sm8.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Havar Havar";
});
offcanvase9.addEventListener("click", function () {
  let give = Tangna.getAttribute("src");
  let para = offcanvaseP9.innerHTML;
  let pa = sm9.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Tangna";
});
offcanvase10.addEventListener("click", function () {
  let give = maryam.getAttribute("src");
  let para = offcanvaseP10.innerHTML;
  let pa = sm10.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Janeh maryam";
});
offcanvase11.addEventListener("click", function () {
  let give = DelAsireh.getAttribute("src");
  let para = offcanvaseP11.innerHTML;
  let pa = sm11.innerHTML;
  paragraf.innerHTML = pa;
  picture.setAttribute("src", give);
  title.innerHTML = para;
  document.title = "Del Asireh";
});
