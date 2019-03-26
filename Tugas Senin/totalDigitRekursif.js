function totalDigitRekursif(angka) {

  //ubah parameter angka kedalam string
  var ubahAngka = angka.toString();// 512
  
  if(ubahAngka.length === 1){
    return Number(angka);
  } else {
    var penampungAngka = Number(ubahAngka[0]); // diubah kembali menjadi integer
    ubahAngka = ubahAngka.slice(1);// dibuang 1 dari depan
    return penampungAngka + totalDigitRekursif(Number(ubahAngka))//yang sudah diubah ditambah oleh totaldigit
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

