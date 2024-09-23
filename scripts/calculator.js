const keys = document.querySelectorAll(".key");
const display_in =document.querySelector(".display .input");
const display_out =document.querySelector(".display .output");
let inp ="";

for (let key of keys) {
    const val = key.dataset.key;
    key.addEventListener("click", ()=>{
        if (val == "clear"){
            inp = "";
            display_in.innerHTML="";
            display_out.innerHTML="";
        } else if (val == "backspace"){
            inp = inp.slice(0,-1);
            display_in.innerHTML= CleanInp(inp);
        } else if (val =="="){
            let res = eval(prep_inp(inp));
            display_out.innerHTML = CleanOut(res);
        } else if(val =="brackets"){
            //if we dont have an open bracket
            if(inp.indexOf("(") == -1 
            // or we have and open bracket 
            || inp.indexOf("(") != -1 
            //and we have an end bracket 
            && inp.indexOf(")") != -1
            // and the last index of ) is greater than the las index of (
            && inp.lastIndexOf("(") < inp.lastIndexOf(")")){
                // we need to add a start breacket
                inp += "(";
            }else if (
                //if we have (
                inp.indexOf("(") != -1
                // and we dont have )
                && inp.indexOf(")") == -1
                //or we hagve (
                || inp.indexOf("(") != -1
                // and  )
                && inp.indexOf(")") != -1
                //and the last index of ( is greater than the last index of that )
                && inp.lastIndexOf("(") > inp.lastIndexOf(")")
                )
                {
                    //we need to add this )
                    inp += ")";
            }
            display_in.innerHTML = CleanInp(inp) ;
        } else {
            if(doubling_Inp(val)){
            inp += val ;
            display_in.innerHTML = CleanInp(inp);
            }
        }
    })  
}
//function for helping the calculator behave better
//cleanin changes the keys design by adding a class and some html
function CleanInp(inp){
    let in_arr = inp.split("");
    let in_arr_l = in_arr.length;

    for (let i = 0; i < in_arr_l; i++){
        if(in_arr[i] == "+"){
            in_arr[i] =
            '<span class="operator"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span>';
        }
        if(in_arr[i] == "-"){
            in_arr[i] =
            '<span class="operator"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></span>';
        }
        //to display x insted of *
        if(in_arr[i] == "*"){
            in_arr[i] =
            '<span class ="operator"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>';
        }
        if(in_arr[i]=="/"){
            in_arr[i] =
            '<span class ="operator"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M272 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 320a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 288c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H400z"/></svg></span>';
        }
        if(in_arr[i]== "%"){
            in_arr[i]=
            '<span id ="percent"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg></span>';
        }
        if(in_arr[i]== "("){
            in_arr[i]= '<span id= "brackets" ><style>font-size:medium;</style>(</span>';
        }
        if(in_arr[i]== ")"){
            in_arr[i]= '<span id= "brackets"><style>font-size:medium;</style>)</span>';
        }
    }
    return in_arr.join("");
}
//validate input (dont repeate any opperator )
function doubling_Inp(val){
    let last_in =inp.slice(-1);
    let opp =["+", "-", "*", "/"];


    if(val =="."
    && last_in == "."){
        return alert("you aleady added a decimel ");
    }
    if(opp.includes(val)){
        if(opp.includes(last_in)){
            
            return alert("only one opperator is requierd");
        } else{
            return true;
        }
    }
    return true; 
}
//preper input
function prep_inp(inp){
    let in_arr = inp.split("");

    for (let i= 0; i < in_arr.length; i++){
        if(in_arr[i] == "%"){
            in_arr[i] = "/100";
        }
    }
    return in_arr.join("");
}
//changes in the output design by adding a , after evry 3 digits 
function CleanOut(out){
	let out_str = out.toString();
	let deci = out_str.split(".")[1];//after thr string
	out_str = out_str.split(".")[0];// before the string
	let out_arr = out_str.split("");
	
	if (out_arr.length > 3) {
		for (let i = out_arr.length - 3; i > 0; i -= 3) {
			out_arr.splice(i, 0, ",");
		}
	}
	if (deci) {
		out_arr.push(".");
		out_arr.push(deci);
	}
	return out_arr.join("");
}

