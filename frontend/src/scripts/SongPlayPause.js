// class SongPlayPause {
//   constructor(select, play) {
//     this.select = select;
//     this.play = play;
//     this.audio;
//     this.select.addEventListener("change", this.setSong.bind(this));
//     this.play.addEventListener("click", this.playFunc.bind(this));
//   }

//   playFunc() {
//     let state = this.play.getAttribute("data-playing");

//     if (state === "paused") {
//       this.play.setAttribute("data-playing", "playing");
//       this.play.innerHTML = "◼";
//       this.play.style.padding = "0% 0.6% 0% 0.5%";
//       this.audio.play();
//     } else {
//       this.play.setAttribute("data-playing", "paused");
//       this.play.innerHTML = "▶";
//       this.audio.pause();
//     }
//   }

//   setSong(ele) {
//     //selecting play/pause on 'select isntrumental' will make it be paused so that when you select a song it begins in the paused state

//     if (this.audio) {
//       this.audio.pause();
//       this.play.setAttribute("data-playing", "paused");
//     }

//     let obj = event.target[event.target.selectedIndex];
//     //this is great to know!!^^

//     let audio = new Audio(`vocals/${ele.target.value}.mp3`);

//     let context = new AudioContext();

//     const source = context.createMediaElementSource(audio);
//     source.connect(context.destination);

//     this.audio = audio;

//   }

// }

// export default SongPlayPause;
