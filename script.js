let input_value=document.getElementById("input_value");
function convertor() {
    let input_id=Number(document.getElementById("input_id").value);
    let show=document.getElementById("show")
    // console.log(input_id)
    let inchval=input_id/2.54;
    show.innerHTML=inchval.toFixed(3) +"Inches";
}
convertor();


function convert(){
    let input_val=Number(document.getElementById("input_id2").value);
    let show_result=document.getElementById("show_result");
    let formula=(input_val * 9/5) + 32;
    show_result.innerHTML=formula + "Faranheit";
}
convert();