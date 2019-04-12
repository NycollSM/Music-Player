const defaultSongs = document.getElementById('defaultSongs');
const Singleton = (function(){
    const PREFIX = 'songs_data'
    let instance = null;
    let DATA = [];

    return class Singleton {
        support = {};
        constructor(){
            this.songsArray = songsArray;
            if(!instance) {
                this.getStorage();
                instance = this;
            }
            return instance;
        }

            /**
             * Gets the private data
             */
            get data () {
            return DATA;
            }

            /**
             * Set the private data
             */
            set addData(songsArray) {
            DATA.push(songsArray);
            }
            
            /**
             * Add a new Song
             */
            addSong () {
            let index = DATA.length;
            let song = createArray(DATA[0].length).map(c => DEFAULT_VALUE());
            DATA.push(song);

            this.updateStorage();
            DATA.Publish(Singleton.Subscriptions.SONG_ADDED, {index, value: songs});
            }

            /**
             * Remove a Song
             * @param index
             * @returns {boolean}
             */
            removeSong (index) {
            if(index <= -1) return false;

            // remove the Song
            DATA.splice(index, 1);

            this.updateStorage();
            DATA.Publish(Singleton.Subscriptions.SONG_REMOVED, {index});
            }

            /**
             * Method to sync the data with the localstorage
             */
            updateStorage () {
                try {
                    let json = JSON.stringify(DATA);
                    localStorage.setItem(PREFIX, json);
                } catch (error) {
                    console.error(error);
                }
            }

            /**
             * Method to the the saved data on the localstorage
             */
            getStorage () {
                try {
                    let data = localStorage.getItem(PREFIX);
                    data = JSON.parse(data);
                    if(data && Array.isArray(data) && data.length)
                    DATA = data;
                } catch (error) {
                    console.error(error);
                }
            }
    }
})();
