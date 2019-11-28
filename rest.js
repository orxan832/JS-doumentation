////////////////////////////////Misal 1
// function carpmaIslemi(...sayilar){
//     return sayilar.reduce ((x,y) => x*y);
//   }
  
//   console.log(carpmaIslemi(1,2,3));
//   console.log(carpmaIslemi(1,2,3,4,5,6));
//   console.log(carpmaIslemi(1,2));

  //////////////////////////////Misal 2
  const filter = (...args) => {
      return args.filter(el => el >= 1);
  }

  console.log(filter(1,2,3,4,5));