# Tested-Wordle-Algorithm
Tested algorithm for a word game inspired by Wordle.

### feedback()
* This function takes two input words - a guessed word and the correct answer - and compares them letter by letter,
and returns an array of result objects describing the feedback for each letter in the guess.
   
  ### Each object in the array contains:
   - letter: the guessed letter (uppercase)
   - result: 'correct', 'misplaced', or 'incorrect'.
