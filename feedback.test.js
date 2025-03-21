import feedback from "./feedback";
import { describe, expect, test } from "@jest/globals";

/* 
Test #Number(Letter)

[x] #1 Check that both string inputs (guessed word and answer) have the same length.
    -if not, return error.
[x] #2 Convert guessed word and answer to uppercase.
[x] #3 Only use alphabetical characters in guessWord, no special characters.
[x] #4 Only use alphabetical characters in answer, no special characters.
[x] #5 Convert every letter to an array.
[] #6 Compare each letter in guessed word to each letter in the answer.
    [x] #6a - if the letter is correct and on the correct slot, mark as 'correct'.
    [] #6b - if the letter is incorrect, mark as 'incorrect'.
    [] #6c - if the letter is correct but on the wrong slot, mark as 'misplaced'.
[] #7 if guessed letter occur more times than in the answer.
    [] #6a - mark correct amount of letter as 'correct' or 'misplaced'.
    [] #6b - mark excess letters as 'incorrect'.
[] #8 Return an array of objects for every letter.
    [] #7a - every object should have a result attribute.
    
    Example:    [
                    { letter: 'X', result: 'correct' },
                    { letter: 'Y', result: 'incorrect' },
                    { letter: 'Z', result: 'misplaced' } 
                ]
*/

describe('feedback()', () => {
    test('#1 Error message if guessed word and answer have different lengths', () => {
        const result = feedback('CYKLA', 'CYKLADE');

        expect(result).toBe('Words must have the same length');
    });

    test('#2 Convert guessed word and answer to uppercase', () => {
        const result = feedback('cykla', 'maska');
        const letters = result.map(item => item.letter).join('');

        expect(letters).toBe('CYKLA');
    });

    test('#3 Remove invalid characters from guessWord', () => {
        const result = feedback('cykl#', 'cykl');
        const letters = result.map(item => item.letter).join('');
       
        expect(letters).toEqual('CYKL');
    });

    test('#4 Remove invalid characters from answer', () => {
        const result = feedback('cykla', 'm@as!ka');
        const cleanedAnswer = 'm@as!ka'.replace(/\W/g, '').toUpperCase();
        
        expect(result.length).toBe(cleanedAnswer.length);
    });

    test('#5 Convert guessed word and answer to arrays', () => {
        const result = feedback('cykla', 'maska');
    
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        expect(result[0]).toHaveProperty('letter');
    });

    test('#6a Mark letters as correct when they match at the same position', () => {
        const result = feedback('CYKLA', 'CIRKA');
        const correctLetters = result.filter(item => item.result === 'correct');

        expect(correctLetters.length).toBe(2);
        expect(correctLetters[0].letter).toBe('C');
        expect(correctLetters[1].letter).toBe('A');
    });

    test('#6b Mark letters as incorrect when not matched at all', () => {
        const result = feedback('XYZXYZ', 'ABCDEF');
        const incorrectLetters = result.filter(item => item.result === 'incorrect');

        expect(incorrectLetters.length).toBe(6);
    });
});