import SuperExpressive from 'npm:super-expressive';

/**
 * Text Manipulation class
 */

export class Rokha {

    private _text: string

    constructor(
        public readonly _input: string,
    ) {
        this._input = _input;
        this._text = _input;
    }

    normalizeLight() {

    }

    normalizeHeavy() {

    }

    /**
     * Collapses all sections of whitespace
     * that extends for `n_lines` or more lines
     * into a single blank line '\n'
     * 
     * @param [n_lines=3] 
     *      the threshold for when a whitespace section will be collapse
     */

    collapseBlankLines(n_lines: number = 3) {
        const blankLinesRegExp = SuperExpressive()
            .atLeast(n_lines)
            .group
            .zeroOrMore
            .whitespaceChar
            .newline
            .end()
            .allowMultipleMatches
            .toRegex()

        this._text =
            this.text.replaceAll(blankLinesRegExp, '\n')
        return this
    }

    /**
     * check if a given string is a roman number
     */

    private isRoman(str: string) {

        type romanChar = keyof typeof romanNums;

        function isRomanChar(char: string): char is romanChar {
            return char in romanNums
        }

        const romanNums = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }

        if (typeof str !== 'string' || str === '') {
            return false
        }

        let prevValue = 0
        let total = 0

        for (let i = str.length - 1; i >= 0; i--) {
            const char = str[i]

            if (!isRomanChar(char)) {
                return false
            }

            const value = romanNums[char]
            if (value === undefined) {
                return false
            }
            if (value < prevValue) {
                total -= value
            } else {
                total += value
            }
            prevValue = value
        }

        return true
    }

    get text() {
        return this._text
    }
}