export const railfence = (plainText, key) => {
    let cipherText = ''
    let plainTextArray = plainText.split('')

    const slicedArray = plainTextArray.reduce((result, value, index, array) => {
        if (index % key === 0) result.push(array.slice(index, index + key))
        return result
    }, [])

    
    for (const i in slicedArray[0]) {
        for (const j in slicedArray) {
            if(slicedArray[j][i]) cipherText += slicedArray[j][i].toUpperCase()
        }
    }
    
    
    return cipherText
}