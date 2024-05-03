`use strict`

//definisco una variabile di body
const body =document.querySelector(`body`)

//definisco  variabili per document.createElement(``);
const div = document.createElement("div");
const div1 = document.createElement("div");
const h1 = document.createElement("h1");
const ul = document.createElement("ul"); 

//aggiungo dentro di body gli elementi
body.append(div)
div.append(h1)
h1.append(`FizzBuzzDOM`)
div.append(div1);

// aggiungo selettori css di body e div
body.classList.add(`bg-primary`, `text-center`)
div.classList.add(`container`)


// aggiungo for 
for (let index = 1; index <= 100; index++) {
    
    //definisco una variabile del div2
    const div2 = document.createElement("div");

    // aggiungo selettori css di div1 e div2
    div1.classList.add(`grid`, `text-center`, `d-flex`, `flex-wrap`)
    div2.classList.add(`col-2`, `p-5`,`bg-primary-subtle`, `m-3`)

    // aggiungo dentro di div1 > div2 e div2 > index
    div1.append(div2);
    div2.append(index);
    
    // aggiungo una condizionale per fare una differenza tra multipli 3 e 5, multipli di 3, multipli di 5 
    if(index % 3 ==0 && index % 5 ==0) {
        div2.innerHTML=(`FizzBuzz`)
        div2.classList.remove(`bg-primary-subtle`)
        div2.classList.add(`bg-danger`)
    }else if (index % 3 ==0) {
        div2.innerHTML=(`Fizz`)
        div2.classList.remove(`bg-primary-subtle`)
        div2.classList.add(`bg-warning`)
    }
    else if (index % 5 ==0) {
        div2.innerHTML=(`Buzz`)
        div2.classList.remove(`bg-primary-subtle`)
        div2.classList.add(`bg-success`)
    }
}