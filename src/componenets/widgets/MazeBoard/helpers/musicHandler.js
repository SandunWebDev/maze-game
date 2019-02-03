// Registering Sound Clips.
import { Howl } from "howler";

export const backgroundMusicPlayer = new Howl({
  src: ["../assets/sounds/gameBackgroundMusic.mp3"],
  autoplay: false,
  loop: true,
  volume: 0.4
});

export const walkSound = new Howl({
  src: ["../assets/sounds/walk.mp3"],
  volume: 0.5,
  sprite: {
    walk: [0, 500]
  }
});

export const mushroomCollectedSound = new Howl({
  src: ["../assets/sounds/collected.mp3"],
  volume: 0.4
});
