export const ceasair = (plainText, key) => {
    const upperCasePlainText = plainText.toUpperCase().trim()
    const cipherText = []

    for (const i in upperCasePlainText) {
        if (upperCasePlainText[i] == ' ') {
            cipherText.push(' ')
        }
        else {
            const pos = String.fromCharCode((upperCasePlainText.charCodeAt(i) - 65 + key) % 26 + 65)
            cipherText.push(pos)
        }      
    }
    
    return cipherText.join('')
}

console.log(ceasair('XIN CHAO    AE   ', 7))