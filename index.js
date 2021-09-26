const readlineSync = require('readline-sync');
console.log("Welcome to the Great Indian G.K. quiz \nLet's see how much you know about your country..\nTest your knowledge about India by attempting 5 questions below...\n")

let name = readlineSync.question("But before starting I'm eager to know your name..\n")
console.log(`\nWelcome ${name}, To kya aap taiyar h??!!\n`)
let score = 0;
console.log(" 1 point ke liye phla swal ye rha aapke computer screen pe : ")

let answer1 = readlineSync.question("\n1. What is economical capital of India?\nA. Kolkata.\nB. Delhi\nC. Mumbai\nD. Ab aaphi puche ho to aaphi btao..\n")
if (answer1 === "C" || answer1 === "Mumbai") {
  console.log("Bilkul shi jwab..,");
  score = score + 1
  console.log(`\nBilkul shi jwab.., ${name} ji! To hmara agla swal ye rha --->\n`)
}
else {
  console.log("Glt jwab..")
}
let answer2 = readlineSync.question("\n2. Who discovered India?\nA. Pta nhi\nB. Hme kya lena dena\nC. Columbus\nD. Vasco da Gama\n");
if (answer2 === "D" || answer2 === "Vasco da Gama") {
  console.log("Bilkul shi jwab..,");
  score = score + 1
  console.log(`\nBilkul shi jwab.., ${name} ji! To hmara agla swal ye rha --->\n`)
}
else {
  console.log("Glt jwab..")
}

let answer3 = readlineSync.question("\n3. Which state has the largest population?\nA. Uttar Pradesh\nB. Maharastra\nC. Bihar\nD. Andra Pradesh\n");

if (answer3 === "A" || answer3 === "Uttar Pradesh") {
  console.log("Bilkul shi jwab..,");
  score = score + 1
  console.log(`\nBilkul shi jwab.., ${name} ji! To hmara agla swal ye rha --->\n`)
}
else {
  console.log("Glt jwab..")
}
let answer4 = readlineSync.question("4. Which state has the largest area?\nA. Maharashtra\nB. Madhya Pradesh\nC. Uttar Pradesh\nD. Rajasthan\n");

if (answer4 === "D" || answer4 === "Rajasthan") {
  console.log("Bilkul shi jwab..,");
  score = score + 1
  console.log(`\nBilkul shi jwab.., ${name} ji! To hmara agla swal ye rha --->\n`)
}
else {
  console.log("Glt jwab..")
}
let answer5 = readlineSync.question(" Now one hard question!\n5. Which is considered the Magna Carta of the Indian people?\nA. Queen Victoria’s Proclamation\nB.King George's Proclamation\nC.Vallab Bhai Patel's Proclamation\nD.Mahatma Gandhi's proclamation\n ");

if (answer5 === "A" || answer5 === "Queen Victoria’s Proclamation") {
  console.log("Bilkul shi jwab..,");
  score = score + 1
  console.log(`\nFinal Score: ${score} `)
  console.log(`\nShabash , ${name}!!! Aap ye quiz zeet gye h aur apko milega....\n\n\n\n\n\n\n\n\n\n\n\n\n Khud hi Lelo..Lockdown me paise khtm ho gye h.\n\nhahaha!!`)
  

}
