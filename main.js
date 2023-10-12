let a = Number(prompt("enter your first number!")) ;

let b = Number(prompt("enter your second number!")) ;

let c = Number(prompt("enter your third number!")) ;

if (a+b > c  && b+c > a && a+c > b) {

    alert("triangle can be created!") ;

}

else {

    alert("triangle can't be created!") ;
}


let m = Number(prompt("enter your first number!")) ;

let n = Number(prompt("enter your first number!")) ;

let k = Number(prompt("enter your first number!")) ;

if (m==n && m+n > k) {

    alert("triangle with two equal sides!") ;
}

else if (m==k && m+k > n) {

    alert("triangle with two equal sides!") ;

}

else if (n==k && n+k > m) {

    alert("triangle with two equal sides!") ;

}

else {

    alert("triangle can't be created!") ;
}



let x = Number(prompt("enter your first number!")) ;

let y = Number(prompt("enter your first number!")) ;

if ( x > y) {

    alert(`${x} is greater than ${y}`) ;
}

else if (x==y) {

    alert("numbers are equal!") ;
}

else {

    alert(`${y} is greater than ${x}`) ;
}


let p = Number(prompt("enter your first number!")) ;

let w = Number(prompt("enter your first number!")) ;

let d = Number(prompt("enter your first number!")) ;

if ( p > w  &&  p > d ) {

    alert(`${p} is greater than ${w} and ${d}`) ;
}

else if (w > p  &&  w > d ) {

    alert(`${w} is greater than ${p} and ${d}`) ;
}

else if (d > p  &&  d > w ) {

    alert(`${d} is greater than ${p} and ${w}`) ;
}

else {

    alert("numbers are equal!") ;
}


let f = Number(prompt("enter your first number!")) ;

let r = Number(prompt("enter your first number!")) ;

let h = Number(prompt("enter your first number!")) ;

if ( f > r  &&  f > h  &&  r > h) {

    alert(`${h} , ${r} ,${f}`) ;
}

else if (f > r  &&  f > h  &&  h > r) {

    alert(`${r} , ${h} ,${f}`) ;
}

else if (r >f  &&  r > h  &&  h > f) {

    alert(`${f} , ${h} ,${r}`) ;
}

else if (r >f  &&  r > h  &&  f > h) {

    alert(`${h} , ${f} ,${r}`) ;
}

else if (h >f  &&  h > f  &&  f > r) {

    alert(`${r} , ${f} ,${h}`) ;
}

else if (h >f  &&  h > f  &&  r > f) {

    alert(`${f} , ${r} ,${h}`) ;
}

else {

    alert("numbers are equal!") ;
}




let age = Number(prompt("enter your your age!")) ;


if (age>18) {

    alert(" Bilet - 10 manat") ;
    
}

else if (age==18) {


     let num = Number(prompt("almaq istediyiniz bilet sayini daxil edin")) ;

     if (num<3) {

        alert("minimum 3 bilet almalisiniz");
     }

     else {

        alert("done");
     }

     
}

else {

    alert("you're not allowed!") ;
}





let button = Number(prompt("enter the number!")) ;


if (button==1) {

    alert("balans")
}

else if (button==2) {


}


let monthNum = Number(prompt("enter month NO: "));



switch (monthNum) {
  case 1:
  case 2:
  case 12:
    alert("Winter");
    break;
  case 3:
  case 4:
  case 5:
    alert("Spring");
    break;
  case 6:
  case 7:
  case 8:
    alert("Summer");
    break;
  case 9:
  case 10:
  case 11:
    alert("Fall");
    break;
  default:
    alert("invalid input!")
    
    break;
}










