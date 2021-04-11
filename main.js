const player1 = {
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Кулаки', 'Gun', 'Нож'],
  attack: function () {
    console.log(player1.name + ' Fight...');
  }
};

const player2 = {
  name: 'Alex',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Кулаки', 'Gun', 'Нож'],
  attack: function () {
    console.log(player2.name + ' Fight...');
  }
};

function creatPlayer(player, person) {
  const $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  
  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = person.hp; 
  
  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = person.name;  
  
  const $character = document.createElement('div');
  $character.classList.add('character');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  
  const $img = document.createElement('img');
  $img.src = person.img;
  
  $character.appendChild($img);

  const arenas = document.querySelector('.arenas');
  arenas.appendChild($player);  
};

creatPlayer('player1', player1);
creatPlayer('player2', player2);



