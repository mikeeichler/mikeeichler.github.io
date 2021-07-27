// most common lyric format:
// 99 bottles of beer on the wall, 99 bottles of beer
// Take one down and pass it around, 98 bottles of beer on the wall

// with one bottle left, "bottles" -> "bottle":
// 1 bottle of beer on the wall, 1 bottle of beer
// Take one down and pass it around, no more bottles of beer on the wall

// the last lyric changes "bottle" back to "bottles", uses "no more" instead 
// of a number and changes the second line
// No more bottles of beer on the wall, no more bottles of beer
// Go to the store and buy some more, 99 bottles of beer on the wall


async function print_lyrics(){
    lyrics = ""; // start with an empty string, each iteration adds to it
    for (let i = 99; i >= 0; i--) { // the loop counter doubles as a bottle counter
        if (i == 1) {
            word = "bottle"; // need to switch to the singular
            // instead of `0` it says `no more`
            second_line = "Take one down and pass it around, no more bottles of beer on the wall";
        } else {
            word = "bottles"; // all other cases use the plural
        }
        if (i == 0) {
            // there are a lot of changes here, it's easier to just write it out
            first_line = "No more bottles of beer on the wall, no more bottles of beer"
            second_line = "Go to the store and buy some more, 99 bottles of beer on the wall";
        } else {
            // this is the most common case
            first_line = i + " " + word + " of beer on the wall, " + i + " " + word + " of beer";
            if (i != 1) { // we already have a case for when there's 1 bottle left
                second_line = "Take one down and pass it around, " + (i-1) + " " +  word + " of beer on the wall";
            }
        }
        lyrics += "<p>" + first_line + "</br>" + second_line + "</p>"; // put it all together
        // use line breaks and paragraph, so that it's not all squashed 
    }
    document.getElementById("lyrics").innerHTML = lyrics; // output it into the div
}