function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var ubahAngka = angka.toString();

  if (ubahAngka.length === 1){
    return angka

  } else {
    var penampungan = 1
    for ( var i=0; i < ubahAngka.length; i++){
      penampungan = penampungan * Number(ubahAngka[i])
    }
  }
  return kaliTerusRekursif(penampungan)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6