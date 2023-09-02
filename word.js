const textTypingArea = document.querySelector('.texttypingarea');
const sentenceCount = document.querySelector('.sentencecount');
const wordCount = document.querySelector('.wordcount');
const characterCount = document.querySelector('.charactercount');

textTypingArea.addEventListener('input', (event) => {
    let value = event.target.value;
    let charArray = value.split('');
    let wordArray = value.split(' ');
    let wordCounted = 0;
    let sentenceArray = value.split(/\w[.?!][\s|$]/);
    wordArray.forEach(function (element) {
        if(element!='') wordCounted++; 
    });
    characterCount.innerText = ''+ charArray.length;
    wordCount.innerText = ''+ wordCounted;
    sentenceCount.innerText = ''+ sentenceArray.length;
});