// function temperatureConverter(valNum) {
//     var result = (valNum - 32)/1.8;
//     return parseFloat(result.toFixed(2));
// }
// console.log(temperatureConverter(103));

// function stringCombine(str1, str2){
  
//     return str1 + ' ' + str2;
// }
// var one = 'i am going to be';
// var two = 'an awesome webveloper';
// console.log(stringCombine(one , two));

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

// let testPositive = [10, 20, 0, 45, -12, 14, -4, 18];
// let onlyPositive = [];
// for(let i = 0; i<testPositive.length; i++){
//     let element = testPositive[i];
//     if(element >= 0){
//         onlyPositive.push(element);
//     }
//     else{
//         break;
//     }
// }
// console.log(onlyPositive);
// // উপরের প্রশ্ন টার এটা উত্তর বাট এখানে  ঋনাত্মক মান গুলো বাদ দিয়ে । 
// let testPositive = [10, 20, 0, 45, -12, 14, -4, 18];
// let onlyPositive = [];
// for(let i = 0; i<testPositive.length; i++){
//     let element = testPositive[i];
//     if(element < 0){
//         continue;
//     }
//     else{
//         onlyPositive.push(element);
//     }
// }
// console.log(onlyPositive);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

// let friends = ['mashiur' , 'rajes chandro barman', 'habib' , 'mostafijar', 'rayhan']
// function bestFriend(large){
//     let lergestFriend = large[0];
//     for(let i = 0; i < large.length; i++){
//         let element = large[i];
//         if(element.length > lergestFriend.length){
//             lergestFriend = element;
//         }
//         else{
//             continue;
//         }
//     }
//     return lergestFriend;
// }
// let result = bestFriend(friends);
// console.log(result);

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
// function paperRequirements(book1, book2, book3){
//     let firstBookPage = 100;
//     let secondBookPage = 200;
//     let thirdBookPage = 300;
//     let firstPage = firstBookPage * book1;
//     let secondPage = secondBookPage *book2;
//     let thirdPage = thirdBookPage * book3;
//     let totalpage = firstPage + secondPage + thirdPage;
//     return totalpage;
// }

// var result = paperRequirements(10, 20 , 1);
// console.log(result);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।
// function centimeterToMeter(centi){
//     let meterConvert = centi / 100;
//     let result = meterConvert.toFixed(2);
//     return result;
// }
// var finalResult = centimeterToMeter(250);
// console.log(finalResult);
// let car = {
//     name:'bajaj',
//     color:'black',
//     price:100012,
//     cc:110,
//     mileg:'height'
// }
// delete car['bajaj'];
// console.log(car);
// function average(subjects){
//     let sum = 0;
//     for(let i = 0; i <subjects.length ; i++){
//         let element = subjects[i];
//         sum = sum + element;
//     }
//     let totalSum = sum / subjects.length;
//     return parseFloat(totalSum.toFixed(2));
// }
// // let subjectMarks = [75.25, 65, 80, 35.45, 99.50];
// let subjectMarks = [100, 100, 100, 100, 100];
// var result = average(subjectMarks);
// console.log(result);

// কম বয়সি ব্যাক্তি কে আউট পুট হিসাবে দেখাও 
// let person = [
//     {name:'raton', age: 50},
//     {name:'tapon' , age: 10},
//     {name:'sujon' , age:40},
//     {name:'naten' , age:70},
//     {name:'haridash' , age:65},
//     {name:'goutom' , age:18}
// ];
// function younger(testAge){
//     let smallest = testAge[0];
//     let smallestAge = testAge[0].age;
//     for(let i = 0; i < testAge.length; i++){
//         let element = testAge[i].age;
//         if(element < smallestAge){
//             smallest = testAge[i];
//             smallestAge = element;
//         }
//         else{
//             continue;
//         }
//     }
//     return smallest;
// }
// var result = younger(person);
// console.log(result);










