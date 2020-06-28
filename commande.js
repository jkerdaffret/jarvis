

const read = function () { 
    return responsiveVoice.speak("Bonjour Julien", "French Female");
}

let commands = {               
    'salut': read,
    'bonjour': read,
    'jarvis': read,
};