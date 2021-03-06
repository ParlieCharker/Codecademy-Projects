class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(bool) {
        this._isCheckedOut = bool;
    }
    getAverageRating() {
        return this._ratings.reduce((a, b) => a + b) / this._ratings.length;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating() {
        for (let argument of arguments) {
            this._ratings.push(argument);
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runtime() {
        return this._runTime;
    }
}
class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artists() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1, 1, 5);
console.log(speed.getAverageRating());
