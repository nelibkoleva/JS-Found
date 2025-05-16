function gramophone(bandName,albumName, songName ) {

let duration = (albumName.length * bandName.length) * songName.length / 2;

let plateDuration = 2.5;


let rotations = Math.ceil(duration / plateDuration);

console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Rammstein', 'Sehnsucht', 'Engel')