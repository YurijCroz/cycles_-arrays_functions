"use strict"
//Все задания оформить в виде функций: 
//1 Вывести знак * столько раз сколько задаст пользователь
function starSymbolOutput(howMany) {
    if (howMany<1){
        howMany=1;
    } else if (howMany>0){
        howMany;
    } else {
        howMany =1;
    }
    let starSymbol='*'.repeat(howMany);
    console.log(starSymbol);
}
//starSymbolOutput(prompt('how many * to display in the console? If the result you entered is less than one or not a numeric character, then the default will be 1.'));

//2 Вывод чисел от limit1 до limit2, которые кратны num
function outputNumbersFromAndTo(limit1=1, limit2=10, num=2) {
    for(limit1;limit1<=limit2;limit1++){
        if (limit1%num==0){
            console.log(limit1);
        }
    }
}
//outputNumbersFromAndTo(1,100,10);

//3 Сумма четных элементов массива
let arrayNumb=[12, 26, 0, 1.23, 35, 43, 57, 0, -23, 63, 100, 1];
function sumOfEvenArrayElements(array) {
    let sum=0, i;
    for(i=0;i<array.length;i++){
        if (i%2==0) {
            sum += array[i];
        }
    }
    console.log(sum);
}
//sumOfEvenArrayElements(arrayNumb);

/* 3. Так как не понял элементы или индексы то сделал все=) и бонус по нечетным=) */

function sumOfOddArrayElements(array) {
    let sum=0, i;
    for(i=0;i<array.length;i++){
        if (i%2==1) {
            sum += array[i];
        }
    }
    console.log(sum);
}
//sumOfOddArrayElements(arrayNumb);

function sumOfEvenArrayIndex(array) {
    let sum=0, i;
    for(i=0;i<array.length;i++){
        if (array[i]%2==0) {
            sum += array[i];
        }
    }
    console.log(sum);
}
//sumOfEvenArrayIndex(arrayNumb);

function sumOfOddArrayIndex(array) {
    let sum=0, i;
    for(i=0;i<array.length;i++){
        if (array[i]%2==1) {
            sum += array[i];
        }
    }
    console.log(sum);
}
//sumOfOddArrayIndex(arrayNumb);

//4 Обнулите все элементы массива меньше 10
let arrayNumbTwo=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbThree=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbFour=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbTest=[-4.6,1,2,-3.3,44,5.0,6.0,-7,-8,-0.009,-0.00001,-0.0000011];

function zeroingArrayElements(array, num=10) {
    let i;
    for(i=0;i<array.length;i++){
        if (array[i]<num) {
            array[i]=0;
        }
    }
    console.log(array);
}
//zeroingArrayElements(arrayNumbTwo, 10);

//(дополнительные ):
//5 Напишите функцию, которая дополняет нулями целое число до оказанной длины.
//Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004

function addsZeros(numb, amount=5) {
    let zeroSymbol='0'.repeat(amount);
    if (numb%1==0 && numb>0) {
        console.log(zeroSymbol+numb);
    } else if (numb%1==0 && numb<0) {
        numb=Math.abs(numb);
        console.log('-'+zeroSymbol+numb);
    }
}
addsZeros(15,6);


//6 соедините два массива в один большой
//6.1

function greatArrayConnector(arrayOne, arrayTwo) {
    let arrayNew=[]
    function arrayConnector(array) {
        let i, j=arrayNew.length;
        for(i=0;i<array.length;i++,j++){
            arrayNew[j]=array[i];
        }
        return arrayNew;
    }
    arrayConnector(arrayOne);
    arrayConnector(arrayTwo);
    console.log(arrayNew);
}
//greatArrayConnector(arrayNumb, arrayNumbTwo);

//6.2

function excellentArrayConnector(arrayArgument) {
    let arrayNew=[]
    for(let i=0,j=0;i<arguments.length;i++) {
        arrayConnector(arguments[j]);
        j++;
    }
    function arrayConnector(array) {
        let i, j=arrayNew.length;
        for(i=0;i<array.length;i++,j++){
            arrayNew[j]=array[i];
        }
        return arrayNew;
    }
    console.log(arrayNew);
}
//excellentArrayConnector(arrayNumb, arrayNumbTwo, arrayNumbTest, arrayNumbThree, arrayNumbFour);



function cheatArrayConnector(arrayArgument) {
    let arrayNew=[]
    for(let i=0,j=0;i<arguments.length;i++) {
        arrayConnector(arguments[j]);
        j++;
    }
    function arrayConnector(array) {
        arrayNew=arrayNew.concat(array);
        return arrayNew;
    }
    console.log(arrayNew);
}
//cheatArrayConnector(arrayNumb, arrayNumbTwo, arrayNumbTest, arrayNumbThree, arrayNumbFour);