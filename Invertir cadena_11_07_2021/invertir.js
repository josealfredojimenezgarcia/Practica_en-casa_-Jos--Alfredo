const invertirCadena = (cadena = "") =>
  !cadena
    ? console.warn("No ingresastes una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Dios es Amor");
invertirCadena("Dios tiene el control");
