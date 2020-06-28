

const read = function () { 
    return responsiveVoice.speak("Bonjour Julien", "French Female");
}
const read2 = function () { 
    return responsiveVoice.speak("Oui ?", "French Female");
}
const read3 = function () { 
    return responsiveVoice.speak("Bien et vous ?", "French Female");
}
const google = function () {
    window.open('https://www.google.com/?hl=fr')
}

var showFlickr = function(tag) {
    var url = 'http://api.flickr.com/services/rest/?tags='+tag;
    $.getJSON(url);
}
      
var calculateStats = function(month) {
    $('#stats').text('Statistics for '+month);
}
      
var greeting = function() {
    $('#greeting').text('Hello!');
}

let commands = {               
    'salut': read,
    'bonjour': read,
    'jarvis': read2,
    'Comment vas-tu ?': read3,
    'Comment allez-vous ?': read3,
    'Ouvre Google': google,
    'montre-moi *tag': showFlickr,
    'calculate :month stats': calculateStats,
    'say hello friend': greeting
};

