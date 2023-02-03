// var friends = ['abul', 'kabul' , 'rahoman', 'jamil' ,'abul', 'krishno' , 'dinesh', 'krishno' , 'bokul'];
// var newFriend = ['sadi', 'dorbes' , 'provu'];
// console.log(typeof friends);
// console.log(Array.isArray(friends));
// const allFriend = friends.concat(newFriend);
// console.log(allFriend);
// var partial = friends.splice(2 , 5 , 10, 20);
// console.log(friends);
// console.log(partial);
// function uniqe(oneName){
//     const onlyOne = [];
//     for(let i= 0; i<oneName.length; i++){
//         let element = oneName[i];
//         if(onlyOne.includes(element) === false){
//             onlyOne.push(element);
//         }
//     }
//     return onlyOne;
// }

// var resultUnique = uniqe(friends);
// console.log(resultUnique);


// 0- 100 টিকিট 100টাকা
// 101 -200 টিকিট 90 টাকা 
// 200+ টিাকিট 70 টাকা । একটি ফাংশন লিখ 250 বা অন্য কোনো সংখ্যার জন্য টিকিট কিনলে কত টাকা লাগবে । 
const tikit100 = 100;
const tikit200 = 90;
const tikitUp200 =70;
function tikit(quintity){
    if(quintity <= 100){
        let price = tikit100 * quintity;
        return price;
    }
    else if(quintity > 100 && quintity <=200){
        let price1 =tikit100 * 100;
        let rest = quintity - 100;
        let price2 = rest * tikit200;
        let price = price1 + price2;
        return price;
    }
    else{
        let price1 = tikit100 *100;
        let price2 = tikit200 * 100;
        let rest = quintity - 200;
        let price3 = rest *tikitUp200;
        let price = price1 + price2 + price3;
        return price;
    }
}
let totalTaka = tikit(201);
console.log(totalTaka);
