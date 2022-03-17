const alphabet = 'abcdefghiklmnopqrstuvwxyz'

export const playfair = (plainText, key) => {
    let cipherText = ''

    const matrix = createMatrix(key)
    const splitText = split(plainText)

    let col1, col2, row1, row2

    for (const i in splitText) {
        for (const row in matrix) {
            for (const col in matrix) {
                if (matrix[row][col] === splitText[i][0]) {col1 = col, row1 = row}
                if (matrix[row][col] === splitText[i][1]) {col2 = col, row2 = row}
            }
        }

        if (row1 === row2) {
            col1++
            col2++
            col1%=5
            col2%=5
            const temp = col1
            col1 = col2
            col2 = temp
        }

        else if (col1 === col2) {
            row1++
            row2++
            row1%=5
            row2%=5
        }

        cipherText += matrix[row1][col2] + matrix[row2][col1]
    } 

    console.log(splitText)
    console.log(matrix)
    
    return cipherText
}

const split = (plainText) => {
    const splitText = []
    const plainTextArray = plainText.split('')

    for (let i = 0; i < plainTextArray.length; i+= 2) {
        if (plainTextArray[i] === plainTextArray[i+1]) {
            plainTextArray.splice(i + 1, 0, 'x')
        }
        splitText.push([plainTextArray[i], plainTextArray[i+1] || 'x'])
    }

    return splitText
}



const createMatrix = (key) => {
    let matrixString = ''
    let matrixArray = [[],[],[],[],[]]
    let col = 0
    let row = 0

    for (const i in key)  matrixString += key[i]

    for (const j in alphabet) {
        const exsit = key.indexOf(alphabet[j])
        
        if (exsit === -1) matrixString += alphabet[j]
    }

    for (const i in matrixString) {
        if(col === 5) {
            row++
            col=0
        }

        matrixArray[row].push(matrixString[i])
        col++
    }

    return matrixArray
}

console.log(playfair('thisiscipher', 'keyword'))