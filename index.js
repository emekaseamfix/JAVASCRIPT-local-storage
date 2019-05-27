

// console.log(localStorage);
// console.log(localStorage.clear());

// console.log(localStorage.setItem("name" , "cunrad"));
// console.log(localStorage);

// console.log(localStorage.removeItem("name"));
// console.log(localStorage);

// console.log(localStorage.setItem("age","28"));
// console.log(localStorage.setItem("name", "cunrad"));

// console.log(localStorage.getItem("age"));

// console.log(localStorage.key(0));


const inpkey = document.getElementById("inpkey");
const inpvalue = document.getElementById("inpvalue");
const btninsert = document.getElementById("btninsert");
const isoutput = document.getElementById("isoutput");

btninsert.onclick = function(){
    const key = inpkey.value;
    const value = inpvalue.value;

    console.log(key);
    console.log(value);

    if(key && value){
        localStorage.setItem(key,value);
        location.reload();
    }

}

for(let i=0; i<localStorage.length;i++){
    const key = localStorage.key(i);
    const value =localStorage.getItem(key);

    isoutput.innerHTML += `${key}: ${value} <br>`;

}

































