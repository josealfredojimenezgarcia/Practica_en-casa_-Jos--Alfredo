console.log("Dios es Amor José Alfredo")

let Restar= function(id1,id2) {
    let x=parseFloat(document.getElementById("id1").value)
    let y=parseFloat(document.getElementById("id2").value)
    let z=x-y
    document.getElementById('resulta1').innerHTML=z;
    return z;
}

let Multiplicar= function(id1,id2) {
    let x=parseFloat(document.getElementById("id1").value)
    let y=parseFloat(document.getElementById("id2").value)
    let z=x*y
    document.getElementById('resulta2').innerHTML=z;
    return z;
}

let Dividir= function(id1,id2) {
    let x=parseFloat(document.getElementById("id1").value)
    let y=parseFloat(document.getElementById("id2").value)
    let z=x/y
    document.getElementById('resulta3').innerHTML=z;
    return z;
}

let Módulo= function(id1,id2) {
    let x=parseFloat(document.getElementById("id1").value)
    let y=parseFloat(document.getElementById("id2").value)
    let z=x%y
    document.getElementById('resulta4').innerHTML=z;
    return z;
}

let Potencia= function(id1,id2) {
    let x=parseFloat(document.getElementById("id1").value)
    let y=parseFloat(document.getElementById("id2").value)
    let z=x**y
    document.getElementById('resulta5').innerHTML=z;
    return z;
}