//zad1
//const tab1 = [67, 31, 17, 6, 19, 5, 43, 10, 27, 20];
//console.log(tab1[6]);
//tab1[3] = 12;
//zad2
//const tab2 = tab1;
//zad3
//const tab3 = [];
//for (i = 0; i < tab1.lenght; i++) {
//tab3[i] = tab1[i] = tab2[i];
//}
//console.log(tab3);
//zad4
//tab2 = tab1.reverse();
//document.write(tab2);
//zad2
//1)
let tab4 = [10];
for (let i = 0; i < 10; i++) {
  tab4[i] = prompt("podaj liczbe do pozycji w tablicy nr." + i);
}
console.log(tab4);

//zad2
//2)
console.log(tab4);
let min = Math.min(...tab4);
let max = Math.max(...tab4);
console.log(min, max);
//zad2
//3)
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += parseInt(tab4[i]);
}
//zad2
//3)
