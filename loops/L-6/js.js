btn.addEventListener("click",fnc);
function fnc() {
    n1 = Number(n.value);
    console.log(n1);
    let total =0;
    for (let i =1; i<= n1; i++){
        if(i%2==0) {
            total +=i;
            answer.innerHTML= "Cумма = " +total;
            console.log(total);
        }
    }

}


