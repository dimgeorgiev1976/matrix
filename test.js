const should = require("should")
const Matrix = require ("./Matrix.js")

describe("Тест Matrix класса", () => {
    it("Создание екземпляров класса", () => {
        const a = new Matrix(`
            1 4 7
            2 5 1
            5 8 0
        `)
        a.body.should.be.eql([[1, 4, 7],[ 2, 5, 1],[ 5, 8, 0]])

        const b = new Matrix(`
            1 
        `)
        b.body.should.be.eql([[ 1 ]])
    })

    // it("Сложение двух матрица Matrix.getSum", () => {
    //     const a = new Matrix(`
    //     1 4 7
    //     2 5 1
    //     5 8 0
    // `)

    //     const b = new Matrix(`
    //     2 4 7
    //     2 6 1
    //     5 8 2
    // `)

    // const c = Matrix.getSum(a, b)

    // c.body.should.be.eql([
    //     [3, 8, 14],
    //     [4, 11, 2],
    //     [10, 16, 2]
    //         ])
    //     })

        it("Транспонирана матрица Matrix.transpose", () => {
            const a = new Matrix(`
            1 4 9
            2 5 1
            5 8 0
        `)
        const grid =  Matrix.transpose(a)
        
        console.log(grid)
    
        grid.body.should.be.eql([
            [1, 4, 9],
            [2, 5, 1],
            [5, 8, 0]
                ])
            })
        })