const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const vigenere = (plainText, key) => {
    let cipherText = ''
    let p,k,c

    let m = key.length

    const finalKey = generateKey(key, plainText.length, m)

    for (let i = 0; i<plainText.length; i++) {
        p = alphabet.indexOf(plainText[i])
        k = alphabet.indexOf(finalKey[i % m])
        c = (p + k) % 26
        cipherText += alphabet[c]
    }
        console.log(cipherText)
    return cipherText
}

const generateKey = (key, length, size) => {
    let finalKey = ''
    let tempKey = key.split('')
    
    
    for (let i = 0; i < length; i++) {
        finalKey += tempKey[i]
        tempKey[size + i] = tempKey[i]
    }

    return finalKey
}

vigenere('wearediscoverdsaveyourself', 'deceptive')