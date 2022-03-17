const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const ceasair = (plainText, key) => {
    let cipherText = ''

    for (const i in plainText) {
        if (plainText[i] == ' ') cipherText += ' '
        else {
            const plainTextIndex = alphabet.indexOf(plainText[i].toLowerCase())
            const cipherIndex = (plainTextIndex + key) % 26
            cipherText += alphabet[cipherIndex].toUpperCase()
        }
    }
    
    return cipherText
}