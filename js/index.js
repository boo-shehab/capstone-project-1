const cords = document.querySelector('.speakers .cards');

const speakers = [
  {
    image: 'image/avatar.png',
    name: 'Speaker. 1',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
  {
    image: 'image/avatar.png',
    name: 'Speaker. 2',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
  {
    image: 'image/avatar.png',
    name: 'Speaker. 3',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
  {
    image: 'image/avatar.png',
    name: 'Speaker. 4',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
  {
    image: 'image/avatar.png',
    name: 'Speaker. 5',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
  {
    image: 'image/avatar.png',
    name: 'Speaker. 6',
    position: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestiae error dolor esse vitae quisquam voluptatum provident vel sunt tempore',
  },
];

function addingSpeaker(s) {
  const speaker = document.createElement('div');
  speaker.classList.add('card');
  speaker.innerHTML = `
          <div class="photo">
              <img src="image/checkers.jpg" alt="">
              <img src="${s.image}" alt="">
          </div>
          <div class="info">
              <h3>${s.name}</h3>
              <p class="position">${s.position}</p>
              <p class="details">${s.details}</p>
          </div>`;
  return speaker;
}
for (let i = 0; i < speakers.length; i += 1) {
  cords.appendChild(addingSpeaker(speakers[i]));
}