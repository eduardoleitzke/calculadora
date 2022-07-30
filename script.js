let display = $("#display");
let buttons =$("#buttons");
let b1 = $(".b1");
let b2 = $(".b2");
let b3 = $(".b3");
let b4 = $(".b4");
let b5 = $(".b5");
let b6 = $(".b6");
let b7 = $(".b7");
let b8 = $(".b8");
let b9 = $(".b9");
let add = $(".b13");
let be1 = $(".be1");
let be2 = $(".be2");
let be3 = $(".be3");
let be4 = $(".be4");
let result = $(".b17");
let b = $(".b")
b.click((e) => {
    if(e.target.innerHTML != "="){
        display.append((e.target.innerHTML))
    }   
});

 
be1.click((e) =>{
    display.text("");
})

be2.click((e) =>{
    
})

be3.click((e) =>{
    display.text("");
})

be4.click((e) =>{
    if(display.text().length == 1){
        display.append("^");
    }else{
        
    }
})
result.click((e) =>{
    let condiction = 0;
    for(i=0;i<display.text().length;i++){
        // console.log(display.text()[i])
        console.log(condiction)
        if(display.text()[i] == "^"){
            condiction = 1;
        }
    }
    if(condiction == 0){
        display.text((eval(display.text())));
    }else{
        let num = parseInt(display.text()[0]);
        let exp = parseInt(display.text()[2]);
        console.log("num = " + num)
        display.text(Math.pow(num, exp));   
    }    

})

