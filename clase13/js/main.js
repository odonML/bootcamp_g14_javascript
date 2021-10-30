// let h1 =$(`<h1>`).append("hola");
// $("body").append(h1);

$("input").click(() => {
    let inputChecked = $("input[type='radio']:checked").val();
    $("#figure").removeClass();
    if(inputChecked === "cuadrado") $("#figure").addClass("cuadrado");
    else if(inputChecked === "circulo") $("#figure").addClass("circulo");
    else if(inputChecked === "rectangulo") $("#figure").addClass("rectangulo");
});


let list = $("#listNumber");
$("button").click(()=>{
    let valueInput = $("input[name='number']");
    let value = valueInput.val();
    if(value === "") return;
    let div = $("<div>", {
        html: value,
        class: "number",
    })
    list.append(div);
})

list.on("click", 'div', function(){
    $(this).addClass("active");
})

list.on("click", ".active", function(e){
    console.log(e.which)
    $(this).removeClass("active");
});

$("input").click((e)=>{
    console.log(e)
})

// list.on("mousedown", ".active", function(e){
//     console.log(e.which);
//      if( e.which === 3) $(this).remove();
// })