import feedback from "./feedback";
import { describe, expect, test } from "@jest/globals";

/* 
Test #Number(Letter)

[x] #1 Check that both string inputs (guessed word and answer) have the same length.
    -if not, return error.
[x] #2 Convert guessed word and answer to uppercase.
[] #3 Only use 'A-Ö' characters, no symbols or numbers.
[] #4 Convert every letter to an array.
[] #5 Compare each letter in guessed word to each letter in the answer.
    [] #5a - if the letter is correct and on the correct slot, mark as 'correct'.
    [] #5b - if the letter is incorrect, mark as 'incorrect'.
    [] #5c - if the letter is correct but on the wrong slot, mark as 'misplaced'.
[] #6 if guessed letter occur more times than in the answer.
    [] #6a - mark correct amount of letter as 'correct' or 'misplaced'.
    [] #6b - mark excess letters as 'incorrect'.
[] #7 Return an array of objects for every letter.
    [] #7a - every object should have a result attribute.
    
    Example:    [
                    { letter: 'X', result: 'correct' },
                    { letter: 'Y', result: 'incorrect' },
                    { letter: 'Z', result: 'misplaced' } 
                ]
*/

describe('feedback()', () => {
    test('#1 Throw an error if guessed word and answer have different lengths', () => {
        expect(() => feedback('CYKLA', 'CYKLADE')).toThrow('Words must be the same length');
    });

    test('#2 Converts guessed word and answer to uppercase', () => {
        const result = feedback('cykla', 'hallå');

        expect(result).toEqual({ guessWord: 'CYKLA', answer: 'HALLÅ' });
    });
});