export default function feedback(guessWord, answer) {

    const guessWordClean = guessWord.replace(/\W/g, '').toUpperCase(); 
    const answerClean = answer.replace(/\W/g, '').toUpperCase(); 

    if (guessWordClean.length !== answerClean.length) {
        console.log('Words must have the same length');
        return 'Words must have the same length';
    }

    const guessWordLetters = guessWordClean.split('');
    const answerLetters = answerClean.split('');

    const result = guessWordLetters.map((letter, index) => {
        if (letter === answerLetters[index]) {
            return { letter, result: 'correct'};
        } else {
            return { letter, result: 'incorrect'};
        }
    });
    console.log(result);

    return result;
}

feedback('Cyklade', 'cirka');