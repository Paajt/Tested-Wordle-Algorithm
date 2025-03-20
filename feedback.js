export default function feedback(guessWord, answer) {
    const guessWordClean = guessWord.replace(/\W/g, '').toUpperCase(); 
    const answerClean = answer.replace(/\W/g, '').toUpperCase(); 

    if (guessWordClean.length !== answerClean.length) {
        throw new Error('Words must be the same length');
    }

    const guessWordArray = guessWordClean.split('');
    const answerArray = answerClean.split('');

    return guessWordArray.map((letter, index) => ({
        letter,
        result: letter === answerArray[index] ? 'correct' : 'incorrect'
    }));
    
}