// Filter topics based on the search input
  function filterTopics() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const audioContainers = document.getElementsByClassName('audio-container');

    for (let container of audioContainers) {
      const title = container.querySelector('a').textContent.toLowerCase();
      container.style.display = title.includes(input) ? '' : 'none';
    }
  }