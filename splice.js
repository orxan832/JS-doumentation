/////////////////////////////////////Misal 1
const months = ["Yanvar", "Mart", "Aprel"];
//splice metodu eyni zamanda array icerisinde bir deyeri elave edib basqa 
//deyerleri sile bilir. funksiya icerisindeki 1-ci deyisen arrayin hansi
//indexine deyiseni elave etmek istediyimizi bildirir. 2-ci deyisen ise
//elave etdiyimiz deyisenden sonra nece deyiseni silmek istediyimizi teyin edir.
months.splice(2, 1, "Fevral");
//burda 1 yerine sifir yazsaq hec bir deyisen silinmeyecek. eyni zamanda fevral
//yerine bir sey yazmasaq da yalniz silme islemi varsa onu yerine yetirecek.

console.log(months);


////////////////////////////////////////Misal 2
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
//return olaraq silinen deyisenleri qaytarir.
var removed = myFish.splice(2, 2, 'drum');

console.log(removed);

