//Array.reduce array icerisindeki deyisenleri bir deyisene cevirmek ucun muxtelif emeliyyatlara imkan verir.
///////////////////////////////////Misal 1
// const data = [2, 4, 5, 13];

// const reducer = (resultParam, item) => {
//     return resultParam + item;
// }

// const sum = data.reduce(reducer, 0);

// console.log("The data is: ", sum);


/////////////////////////////////////Misal 2
// let books = [
//     "“javascript”",
//     "“javascript”",
//     "“clojure”",
//     "“clojure”",
//     "“clojure”",
//     "“java”",
//     "“kotlin”",
//     "“kotlin”",
//  ];
//  const firstValue = {};
//  const reducer = function(obj, count){
//      console.log(obj);
//     if (!obj[count]){
//        obj[count] = 1;
//     } else {
//        obj[count] = obj[count] + 1;
//     }
//     return obj;
//  };
//  const result = books.reduce(reducer, firstValue);
//  console.log("“Okuduğum kitaplar: “", result);