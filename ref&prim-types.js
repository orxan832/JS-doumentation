//REFERENCE & PRIMITIVE TYPES
//MUTABLE IMMUTABLE

let number = 1;
let number2 = number;
//primitiv tiplerde bele kopyalayanda real kopyalama olur. yeni, sonradan
//number deyisse number2 deyismeyecek ve 1 olaraq qalacaq. cunki kopyasini 
//goturur ve gedir.
number = 2;

console.log(number2);
//result 1

////////////////////reference type
//Qeyd: CONST YALNIZ PRIMITIVE TYPE TEYIN OLUNARKEN DEYERI DEYISMEZ QALIR
//REFERENCE TYPE OLANDA ISE DEYERLERI DEYISE BILIR
//reference type olanda ise bunu immutable elemek ucun ya spread operatordan 
//ya da Object.assign metodundan istifade ede bilerik.
//eger yuxaridaki metodlardan istifade etmesek yalniz secondPerson personun 
//yalniz pointerini kopyalayacaq ve personda ne deyisse secondPersonda da 
//o sey deyisecek.
const person = {
    name: "Max"
}


//spread operator ile
//const secondPerson = {...person};

//ve ya Object.assign funksiyasi ile
const secondPerson = Object.assign({}, person, {name: "Manu"});

person.name = "Orxan";


console.log(person);
console.log(secondPerson);



