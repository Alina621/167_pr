// задание 1
for (let i = 1; i <= 100; i++){
  alert(i)
}
// задание 2

for (let i = 100; i >=1; i--){
  alert(i)
}

// Задание 3
for (let i = 2; i <= 100; i+=2){
  alert(i)
}

// Задание 4
let array = [];
for(let i = 1; i <=10; i++){
  array.push('x')
}
alert(array)

// Задине 5
let array = [];
for(let i = 1; i <=10; i++){
  array.push(i)
}
alert(array)

// Задание 6
let array = [2,3,78,4,10,27,44,65];
for(let i of array){
  if(i>=0 && i<=10){
    alert(i)
  }
}

// Задание 7
let array = [2,3,78,4,10,27,44,65];
for( let i of array){
  if (i == 5){
    alert('да')
  }
}

// Задание 8
let array = [2,3,4];
let sum = 0;
for( let i of array){
  sum +=i;
}
alert(sum)

// Задание 9
let array = [2,3];
let sum = 0;
for( let i of array){
  sum +=i*i;
}
alert(sum)

// Задание 10

let array = [2,3];
let sum = 0;
for( let i of array){
  sum +=i;
}
alert(sum/array.length)

// Задание 11

let a = 4;
let b = 1;
for ( let i = 1; i <= a; i++){
  b *=i
}
alert(b)

// Задание 12

let array = [];
for(let i = 10; i >=1; i--){
  array.push(i)
}
alert(array)


// Задание 13

let array = [-4,0,2,5,-12];
let a = 0;
for( let i of array){
  if(i >= 0){
    a += i
  }
}
alert(a)

// Задание 14
let arr = [10, 20, 30, 50, 235, 3000];
for( let i of arr){
  if(+String(i)[0] == 1 || +String(i)[0] == 2 || +String(i)[0] == 5 ){
    alert(i)
  }
}

// Задание 15

let arr = [10, 20, 30, 50, 235, 3000];

let rev = arr.reverse();

alert(rev)

// Задание 16
let arr = [10, 1, 2, 50, 4, 3000];
for (let i = 0; i < arr.length-1; i++){
  if(i==arr[i]){alert(i)}
}

// Задание 17

let arr = [1,2,3,4,5,6];
for (let i of arr){
  document.write(i + "<br>")
}

// Задание 18

let arr = [1,2,3,4,5,6];
for (let i of arr){
  document.write(i + "<p>")
}

// Задание 19
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for(let i of week){
  if(i =='Суббота' || i == 'Воскресенье'){
    document.write(`<br>`+`<b>`+ i + `<br>`)
  }else{
    document.write(`<br>`+ i + `<br>`)
  }
}


// Задание 20

const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = new Date().getDay();
for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === day) {
    alert(*${daysOfWeek[i]}*);
  } else {
    alert(daysOfWeek[i]);
  }
}
for(let i of week){
  if(i == day){
    document.write(`<i>` + i);
  }else{
    document.write(i);
  }
  
}

// Задание 21

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i = 1; i < 8; i++){
  obj['employee'+ i] *=1.1
}
alert(obj)

// Задание 22

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let i = 1; i < 8; i++){
  if(obj['employee'+ i] <= 400){
    obj['employee'+i] *= 1.1
  }
}
alert(obj)


// Задание 23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for(let i = 0; i < arr1.length; i++){
    obj[arr1[i]]=arr2[i];
}
alert(obj);

// Задание 24

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keys = Object.keys(obj);

let sum = 0;
let sum0 = 0;
alert(keys)

for(i = 0; i < 5; i ++){
  sum += +keys[i]
  sum0 += obj[keys[i]]
}
alert(sum/sum0)


// Задание 25


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 

let sum = [];
let sum0 = [];

for(let key in obj){
  sum.push(key)
  sum0.push(obj[key])
}
alert(sum);
alert(sum0);




// Задание 26


let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let sum0 = [];
let sum = [];

for(let key in obj){
  sum0.push(obj[key])
}


for( let i of sum0){
  if(+String(i)[0] == 1 || +String(i)[0] == 2){
    sum.push(i)
}
}
alert(sum)

// Задание 27

let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};

for(let i = 0; i < arr.length; ++i){
    obj[i+1] = arr[i]
}

alert(obj) 


//Задание 28

let arr = ['a', 'b', 'c', 'd', 'e'];

let obj = {};

for(let i = 0; i < arr.length; ++i){
    obj[arr[i]] = i+1
}
alert(obj) 



