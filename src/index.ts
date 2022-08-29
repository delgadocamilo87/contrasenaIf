import "./styles.css";

btnCalc?.addEventListener("click", () => {
  let contrasena: string = "Eureka";
  let contrasenaFinal: string = input1.value;
  if (contrasena === contrasenaFinal) {
    console.log("Lo lograste");
  } else {
    console.log("le has errado");
  }
});
