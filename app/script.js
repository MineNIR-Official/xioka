new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Minecraft - Key",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-key.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Cat",
          artist: "C418",
          cover: "app/covers/discs.jpeg",
          source: "app/mp3/minecraft-cat.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Dog",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-dog.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Door",
          artist: "C418",
          cover: "covers/minecraft.jpeg",
          source: "mp3/minecraft-door.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Subwoofer Lullaby",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-subwoofer-lullaby.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Ballad of the Cats",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-ballad-of-the-cats.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Living Mice",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-living-mice.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Taswell",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-taswell.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Moog City",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-moog-city.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Haggstrom",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-haggstrom.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Beginning",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-beginning.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Minecraft",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-minecraft.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Mice on Venus",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-mice-on-venus.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Dry Hands",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-dry-hands.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Wet Hands",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-wet-hands.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Beginning 2",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-beginning-2.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Clark",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-clark.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Sweden",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-sweden.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Moog City 2",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-moog-city-2.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Aria Math",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-aria-math.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Dreiton",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-dreiton.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Blocks",
          artist: "C418",
          cover: "app/covers/discs.jpeg",
          source: "app/mp3/minecraft-blocks.mp3",
          favorited: false
        },
        {
          name: "Minecraft - Floating Trees",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-floating-trees.mp3",
          favorited: false
        },
        {
          name: "Minecraft - The End",
          artist: "C418",
          cover: "app/covers/minecraft.jpeg",
          source: "app/mp3/minecraft-the-end.mp3",
          favorited: false
        },
        {
          name: "GremCube - О великий суп наварили",
          artist: "GremCube",
          cover: "app/covers/xiokamusic.jpg",
          source: "app/mp3/poslyshalos--velikiy-sup-navarili.mp3",
          favorited: false
        },
        {
          name: "SHEPH - Потолок",
          artist: "SHEPH",
          cover: "app/covers/xiokamusic.jpg",
          source: "app/mp3/videoplayback_online-audio-converter.com.mp3",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
