

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

let commands = {               
    'salut': read,
    'bonjour': read,
    'jarvis': read2,
    'Comment vas-tu ?': read3,
    'Comment allez-vous ?': read3,
    'Ouvre Google': google,
};