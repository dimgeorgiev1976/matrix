module.exports = class Matrix {
    constructor (str = '') {
        const args = str
            .trim()
            .replace(/\n/g, ' | ')
            .replace(/\s+/g, ' ')
            .split(' ')

            this.body = []

            let row = []

            for (const item of args ) {
                if (item === '|' ) {
                    this.body.push(row)
                    row = []
                }

                else {
                    const number = parseInt(item)
                    row.push(number)
                }
            }

            this.body.push(row)
    }

    static create (...args) {
        return new Matrix(...args)
    }

    getClone () {
        const clone = Matrix.create ()

        clone.body = JSON.parse(JSON.stringify(this.body))
        return clone

    }
    static getSum (a, b) {
        const c = a.getClone()

        for (let y = 0; y < c.body.length; y++) {
            for (let x = 0; x < c.body[y].length ; x++) {
                c.body[y][x] += b.body[y][x]
            }
        }
        return c
    }

    static transpose (a) {
        const rows = a.body.length
        const cols = a.body[0].length
        const grid = a.getClone()

        for (let col = 0; col < cols; col++) {
            grid[col] = []
        }
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
            grid[col][row] = a.body[row][col]
            }
        }
        return grid
        }

      
    static getMulti ( a, b) {

    }

    static getDeterminal (a) {
        
    }
}