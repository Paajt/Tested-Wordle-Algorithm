export default function feedback(guessWord, answer) {

    if (guessWord.length !== answer.length) {
        throw new Error('Words must be the same length');
    }

    guessWord = guessWord.toUpperCase();
    answer = answer.toUpperCase();

    return { guessWord, answer};
}