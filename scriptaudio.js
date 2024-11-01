let currentlyPlayingAudio = null;

function setupAudioControls(audioId, playButtonId, stopButtonId, sliderId, timeDisplayId, restartButtonId, loopButtonId) {
  const playButton = document.getElementById(playButtonId);
  const stopButton = document.getElementById(stopButtonId);
  const restartButton = document.getElementById(restartButtonId);
  const loopButton = document.getElementById(loopButtonId);
  const slider = document.getElementById(sliderId);
  const timeDisplay = document.getElementById(timeDisplayId);
  const audio = document.getElementById(audioId);

  let isLooping = false;

  audio.addEventListener('loadedmetadata', () => {
    slider.max = audio.duration;
    updateDisplay();
  });

  playButton.addEventListener('click', () => {
    if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
      currentlyPlayingAudio.pause();
      document.getElementById(currentlyPlayingAudio.playButtonId).textContent = 'Play';
    }

    if (audio.paused) {
      audio.play();
      playButton.textContent = 'Pause';
      currentlyPlayingAudio = audio;
      currentlyPlayingAudio.playButtonId = playButtonId;
    } else {
      audio.pause();
      playButton.textContent = 'Play';
      currentlyPlayingAudio = null;
    }
  });

  stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    slider.value = 0;
    playButton.textContent = 'Play';
    if (currentlyPlayingAudio === audio) {
      currentlyPlayingAudio = null;
    }
    updateDisplay();
  });

  restartButton.addEventListener('click', () => {
    audio.currentTime = 0;
    updateDisplay();
    if (!audio.paused) {
      audio.play();
    }
  });

  loopButton.addEventListener('click', () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopButton.textContent = `Loop: ${isLooping ? 'On' : 'Off'}`;
  });

  audio.addEventListener('timeupdate', () => {
    slider.value = audio.currentTime;
    updateDisplay();
  });

  slider.addEventListener('input', () => {
    audio.currentTime = slider.value;
    updateDisplay();
  });

  function updateDisplay() {
    const current = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${current} / ${duration}`;
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }
}
