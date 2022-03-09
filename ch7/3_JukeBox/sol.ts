// juke box at a breakfast bar

// jukebox has many songs
// insert coin to change cd 
// you select a song then it plays 

jukbox, cd, song

// relationship
jukebox has  many cds
cd has many songs

// actions 
jukebox change cd, change song ( forward, back)

class Song{
    name: string
    duration: number
    
    play(){

    }
    pause(){
        
    }
}

class cd{ 
    songs: Array<Song>
    constructor(l: Song[]){
        this.songs = l
    }
    nextSong(song){
        let nextSongIndex = (songs.indexOf(song) + 1) % songs.length
        return songs[nextSongIndex]

    }
    previousSong(song){
        let prevSongIndex = (songs.indexOf(song) - 1 + songs.length) % songs.length
    }
}

class jukebox{
    currentCd: cd
    currentSong: Song
    cds: cd[]
    volume: number
    constructor(cds: cd[]){
        this.cds = cds
    }
    changeCd(index: number){
        this.currentCd = this.cds[index]
        this.currentSong = this.currentCd.songs[0]
    }
    playSong(){
        this.currentSong.play()
    }        
    pauseSong(){
        this.currentSong.pause()
    }
    nextSong(){
        this.currentSong = this.cd.nextSong(currentSong)
    }
    previousSong(){
        this.cd.previousSong(currentSong)
    }
    increaseVolume(){
        if (volume < 100)
            volume++
    }

}