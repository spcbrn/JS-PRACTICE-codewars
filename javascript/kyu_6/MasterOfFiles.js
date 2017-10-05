
//URL: https://www.codewars.com/kata/master-of-files
//kyu: 6


String.prototype.isAudio= function(){
    let ext = this.split('.')
    if (ext[0].match(/[\s\d]/g) || ext[1].match(/[A-Z]/)) {
        return false;
    } else if (ext[1].match(/[ac|p3]/)) {
        return true;
    }
    return true;
};


String.prototype.isImage= function(){
    let ext = this.split('.')
    if (ext[0].match(/[\s\d]/g) || ext[1].match(/[A-Z]/)) {
        return false;
    } else if (ext[1].match(/[jp|mp|gi|pn]/)) {
        return true;
    }
    return true;
};



console.log("Nothing Else Matters.mp3".isAudio(), false)
console.log("NothingElseMatters.mp3".isAudio(), true)
console.log("DaftPunk.FLAC".isAudio(), false)
console.log("DaftPunk.flac".isAudio(), true)
console.log("AmonTobin.aac".isAudio(), true)
console.log(" Amon Tobin.alac".isAudio(), false)
console.log("tobin.alac".isAudio(), true)
console.log("Home.jpg".isImage(), true)
console.log("flat.jpeg".isImage(), true)
console.log("icon.bmp".isImage(), true)
console.log("icon2.jpg".isImage(), false)
console.log("bounce.gif".isImage(), true)
console.log("animate bounce.GIF".isImage(), false)
console.log("transparency.png".isImage(), true)