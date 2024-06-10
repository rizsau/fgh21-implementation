function cekPalindrom(kata){
    let hasil = ""
    for(let i = kata.length; i > 0; i--){
        hasil = hasil + kata[i-1]
    }
    if(hasil === kata){
        console.log("Palindrom")
    }
}

cekPalindrom("malam")