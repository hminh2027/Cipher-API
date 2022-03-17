const alphabet = 'abcdefghijklmnopqrstuvwxyz'

export const vigenere = (plainText, key, isRepeatKey) => {
    let cipherText = ''
    let plainTextIndex, keyIndex, cipherIndex
    let finalKey

    isRepeatKey ? finalKey = generateRepeatKey(key, plainText.length, key.length) :  finalKey = generateAutoKey(key, plainText)

    for (let i = 0; i < plainText.length; i++) {
        plainTextIndex = alphabet.indexOf(plainText[i].toLowerCase())
        keyIndex = alphabet.indexOf(finalKey[i].toLowerCase())
        cipherIndex = (plainTextIndex + keyIndex) % 26
        cipherText += alphabet[cipherIndex].toUpperCase()
    }


    return cipherText
}

const generateRepeatKey = (key, planTextlength, keyLength) => {
    let finalKey = ''
    let tempKey = key.split('')
    
    
    for (let i = 0; i < planTextlength; i++) {
        finalKey += tempKey[i]
        tempKey[keyLength + i] = tempKey[i]
    }

    return finalKey
}

const generateAutoKey = (key, plainText) => key + plainText