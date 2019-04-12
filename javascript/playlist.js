function  playlist(){
    const playerContainer = document.getElementById('playList');
    let name;
    let data = new Singleton();
    function songs(){
        for(let i of data.songsArray) {
            // create new audio for each song in array
                const song = new Audio (i.scr);
                song.setAttribute('controls', true);
               // console.log(song);
            //creates the name of the song 
                name = document.createElement('p');
                name.innerText = i.name;
                name.setAttribute('class','songName');
                name.setAttribute( 'draggable','true');
                name.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");
                // adding name and audio at DOM
                defaultSongs.appendChild(name);
                defaultSongs.appendChild(song);
        }
    } songs();
    function dragnDrop() {
        
        const names = document.getElementsByClassName('songName');
        const ContainerSongs = [];
        //let names;
       // console.log(names);
        for (let i= 0; i < names.length; i++) {
            console.log(names[i]);
            names[i].addEventListener('click', function(){
                console.log('v');
            })
        }
        let dragged;
    
        document.addEventListener("dragstart", function(event) {
        dragged = event.target;
        }, false);
    
        document.addEventListener("dragover", function(event) {
        event.preventDefault();
        }, false);
    
        document.addEventListener("drop", function(event) {
            if (event.target.className == "player") {
                event.target.appendChild( dragged);
                ContainerSongs.push(event);
            }
        }, false);
    }dragnDrop();

    function playlistActive (){
        if(ContainerSongs >= 1){
            console.log('holaaaaa');
        }
    }

    
} playlist();