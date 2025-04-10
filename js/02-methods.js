/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
TODO: - addTrack(newTrack);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName(newTitle) {
    if (typeof newTitle === 'string') {
      this.name = newTitle;
    }
  },

  updateRating(newRating) {
    if (typeof newRating === 'number' && newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  addTrack(newTrack) {
    if (!this.tracks.includes(newTrack)) {
      this.tracks.push(newTrack);
    }
  },
};

console.log('playlist:', playlist);

playlist.changeName('My new title');
playlist.updateRating(3);
playlist.addTrack('track-4');

console.log('playlist:', playlist);
