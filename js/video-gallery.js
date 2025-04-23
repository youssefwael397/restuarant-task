// Video gallery logic
const videoButtonsElement = document.querySelector('.video-buttons');
const videosCount = document.querySelector('.videos-count');
const videoSrcList = [
  { url: 'assets/video1.mp4', name: 'Good day 1' },
  { url: 'assets/video2.mp4', name: 'Good day 2' },
  { url: 'assets/video3.mp4', name: 'Good day 3' },

  { url: 'assets/video1.mp4', name: 'Good day 1' },
  { url: 'assets/video2.mp4', name: 'Good day 2' },
  { url: 'assets/video3.mp4', name: 'Good day 3' },

  { url: 'assets/video1.mp4', name: 'Good day 1' },
  { url: 'assets/video2.mp4', name: 'Good day 2' },
  { url: 'assets/video3.mp4', name: 'Good day 3' },

  { url: 'assets/video1.mp4', name: 'Good day 1' },
  { url: 'assets/video2.mp4', name: 'Good day 2' },
  { url: 'assets/video3.mp4', name: 'Good day 3' },
];

videosCount.innerHTML = videoSrcList.length;

let mainVideoElement = document.getElementById('mainVideo');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

function playVideoByIndex(index) {
  const allVideoCards = document.querySelectorAll('.video-card');

  allVideoCards.forEach((btn, i) => {
    if (i === index) {
      btn.style.backgroundColor = '#aeaeae';
      btn.disabled = true;
    } else {
      btn.style.backgroundColor = 'transparent';
      btn.disabled = false;
    }
  });

  mainVideoElement.src = videoSrcList[index].url;
  mainVideoElement.play();
}

videoSrcList.forEach((videoObj, idx) => {
  const button = document.createElement('button');
  button.classList.add('video-card');
  button.id = `video-${idx}`;
  button.innerHTML = `
    <div class="left-side">
      <video src="${videoObj.url}" muted></video>
      <span>${videoObj.name}</span>
    </div>
    <small class="duration">Loading...</small>
  `;
  button.onclick = () => playVideoByIndex(idx);
  videoButtonsElement.appendChild(button);

  // Load metadata separately
  const tempVideo = document.createElement('video');
  tempVideo.src = videoObj.url;
  tempVideo.preload = 'metadata';
  tempVideo.addEventListener('loadedmetadata', () => {
    const duration = formatTime(tempVideo.duration);
    button.querySelector('.duration').textContent = duration;

    // Autoplay the first video only once
    if (idx === 0) {
      playVideoByIndex(0);
    }
  });
});

function toggleList() {
  const list = document.getElementById('videoList');
  list.style.display = list.style.display === 'none' ? 'block' : 'none';
}
