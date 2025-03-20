import feedback from "./feedback";
import { describe, expect, it } from "@jest/globals";

/* 

[] Check that both string inputs (guessed word and answer) have the same length.
    -if not, return error.
[] Convert every word to uppercase.
[] Only use 'A-Ö' characters, no symbols or numbers.
[] Convert every letter to an array.
[] Compare each letter in guessed word to each letter in the answer.
    []- if the letter is correct and on the correct slot, mark as 'correct'.
    []- if the letter is incorrect, mark as 'incorrect'.
    []- if the letter is correct but on the wrong slot, mark as 'misplaced'.
    []- if guessed letter occur more times than in the answer.
        []- mark correct amount of letter as 'correct' or 'misplaced'.
        []- mark excess letters as 'incorrect'.
[] Return an array of objects for every letter.
    []- every object should have a result attribute.
    
    Example:    [
                    { letter: 'X', result: 'correct' },
                    { letter: 'Y', result: 'incorrect' },
                    { letter: 'Z', result: 'misplaced' } 
                ]
*/
