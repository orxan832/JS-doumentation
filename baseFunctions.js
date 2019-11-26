//find funksiyasi array icerisinde bizim verdiyimiz sertleri odeyen ilk elementi qaytarir.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
/////////////////////////////////////////////////////////////////////////








//findIndex funksiyasi array icerisinde bizim verdiyimiz sertleri odeyen ilk elementin indexini qaytarir.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
/////////////////////////////////////////////////////////////////////////////










//concat funksiyasi iki ve daha cox arrayi birlesdirmek ucun istifade olunur.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
//////////////////////////////////////////////////////////////////////////////











//slice funksiyasi array icerisinde verdiyimiz baslangic ve son indexler sayesinde onlar arasindaki deyerleri 
//getirir. bundan basqa slice funksiyasi listden array duzelde bilir ve bind ede bilir.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

