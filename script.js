const song = document.querySelectorAll(".song");
const songName = document.querySelectorAll(".songName");
let increaseLine = document.getElementById("increase");
const text = document.querySelector(".text");
const previous = document.getElementById("previous");
const masterPlay = document.getElementById("masterPlay");
const next = document.getElementById("next");
const gif = document.querySelector(".gif");
const audio = new Audio("songs/1.mp3");
let songIndex = 0;
increaseLine.value = 0;
const songItemPlay = document.querySelectorAll(".songItemPlay");

let songs = [
  {
    songName: "Warriyo - Mortals ",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart ",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Bekar-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Bukhar-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Dard-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Ishq-hi-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

// masterPlay.addEventListener('click' , ()=> {
//    audio = new Audio('songs/1.mp3')
//    masterPlay.classList.remove("fa-play-circle");
//    masterPlay.classList.add("fa-pause-circle");
//    gif.style.opacity = '1'
//    audio.play()

// })
song.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audio.paused || audio.currentTime <= 0) {
    audio.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    audio.pause();
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});

// text.innerText = songName[0].innerText

next.addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audio.src = `songs/${songIndex + 1}.mp3`;
  text.innerText = songs[songIndex].songName;
  audio.play();
  audio.currentTime = 0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = "1";
  //  masterPlay.classList.add("fa-play-circle");
});

previous.addEventListener("click", () => {
  if (songIndex <= 9) {
    songIndex -= 1;
  } else if (songIndex == 0) {
    songIndex = 9;
  }
  audio.src = `songs/${songIndex + 1}.mp3`;
  text.innerText = songs[songIndex].songName;
  audio.play();
  audio.currentTime = 0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = "1";
});

audio.addEventListener("timeupdate", () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  increaseLine.value = progress;
});

increaseLine.addEventListener("change", () => {
  audio.currentTime = (increaseLine.value * audio.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audio.src = `songs/${songIndex + 1}.mp3`;
      text.innerText = songs[songIndex].songName;
      audio.currentTime = 0;
      audio.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

// Array.from(
//   document.getElementsByClassName("songItemPlay")).forEach((element) => {
//     element.addEventListener("click", (e) => {
//       if (songItemPlay.classList.contains("fa-play-circle")) {
//         e.target.classList.remove("fa-play-circle");
//         e.target.classList.add("fa-pause-circle");
//         songIndex = parseInt(e.target.id);
//         audio.src = `songs/${songIndex + 1}.mp3`;
//         text.innerText = songs[songIndex].songName;
//         audio.currentTime = 0;
//         audio.play();
//         gif.style.opacity = 1;
//       }else{
//         e.target.classList.add("fa-play-circle");
//           audio.pause();
//           gif.style.opacity = 0;
//       }
//     });
//   })

