// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }


// 2
for ( let i = 1; i<=10; i++){
    console.log(i)
}


// 3
let sum = 0; // inicializaciashi shevitanot cvladi sum mnishvnelobit 0, rata shevagrovot jami

for (let i = 1; i <= 50; i++) { // viwyebt cikls , sadac i miigebs mnishvenlobas  1dan 50mde ( chatvlit ).
    sum += i; // vamatebt miminare mnishvnelobas i cvlad sum-s, vagrovebt sabolo jams.
}

console.log(sum); 

// 4
for (let i = 0; i < 10; i += 2) {
    console.log(i);
 } //pasuxi 5 iteracia.  1 iteracia=0, 2 iteracia=2, 3 iteracia =4,  4 iteracia = 6, 5 iteracia = 8
 


// 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // wyvets cikls , rodesac i = 5 
    }
    console.log(i);
  }


// 6
// javascriptshi operatori continue gamoiyeneba cicklis shemdegi iteraciis dasawyebad . am codshi continue gamotovebs ricxv 3s
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; 
    }
    console.log(i);
  }

