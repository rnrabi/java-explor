// function inchToFeet(inch){
//     var feetConverter = inch/12;
//     return feetConverter;
// }
// var isFeet = inchToFeet(96);

// console.log(isFeet);
// 1 থেকে 100 পর্যন্ত জোড় সংখ্যা নির্ণয় । 
// for(var i = 0; i<= 100; i+=2){
//     console.log(i);
// }
// কোন একটা এ্যারের ভিতর থেকে জোড় বিজোড় সংখ্যা নির্ণয় । 
// var jhalMuri = [20 , 21, 54, 12, 47, 26, 54 ,89,95];
// var evenNums =[];
// for(var i =  0; i<jhalMuri.length ; i++){
//     if(jhalMuri[i]%2 == 0){
//         var evenNum = jhalMuri[i];
//         console.log(evenNum)
//         evenNums.push(evenNum);
//     }
// }
// console.log(evenNums);
// একটা এ্র্যারের সব উপাদান কে যোগ করবো 
// var numbers =[25, 25, 51, 64, 47, 14, 57, 30]

// function sumArray(sumation){
//     sum = 0;
//     for(let i = 0; i < sumation.length; i++){
//         const index = i;
//         const element = sumation[index];
//         sum = sum + element;
//         // console.log(index , element , sum);
//         // console.log(sum);
//     }
//     return sum;
// }
// sumArray(numbers);
// console.log(sumArray(numbers));

// // এ্যারে থেকে জোড় বিজোড় নির্ণয় করে যোগ করবো । 
// var numbers1 =[251, 254, 517, 645, 474, 143, 570, 300];
// var NewOddNum = [];
// function oddSelect(oddNumber){
//     for(var i = 0 ; i < oddNumber.length ; i++){
//         if(oddNumber[i] % 2 !== 0){
//             var element = oddNumber[i];
//             NewOddNum.push(element);
//         }
//     }
//     return NewOddNum;
// }
// oddSelect(numbers1);
// console.log(NewOddNum);
// console.log(sumArray(NewOddNum));


// function temperatureConverter(valNum) {
//     var heat = valNum - 32;
//       var cel = heat / 1.8;
//       return cel;
//     }
//     temperatureConverter(50);
// console.log(temperatureConverter(50));

// function sum(i){
//     if(i == 1){
//         return 1;
//     }
//     return i + sum(i-1);
// }

// const result = sum(6);
// console.log(result);


// function factorial(i){
    
//     if(i == 1){
//         return 1;
//     }
//     return i*factorial(i-1);
// }
// const result = factorial(5);
// console.log(result);


// const products = [
//     {name:'nokiya' , price: 5500 , model:'gh6'},
//     {name:'howai' , price: 500 , model:'This is is startech'},
//     {name:'walton' , price: 5500 , model:'primo gh6'},
//     {name:'sampony' , price: 25500 , model:'dotto super maarket'},
//     {name:'citicel' , price: 5000 , model:'cyti cell is first phn'}
// ]

// function matchedProducts(products, search){
//     const matched = [];
//     for(const product of products){
//         if(product.model.toLowerCase().includes(search.toLowerCase())){
//             matched.push(product);
//         }
//     }
//     return matched;
// }
// const result = matchedProducts(products , 'cyti');
// console.log(result);







