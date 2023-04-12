function calculateImc() {
  
  let weight = parseFloat(document.getElementById('weight').value, 10);
  let height = parseFloat(document.getElementById('height').value, 10);
  const imc = weight / (height * height);

  if (imc < 18.5) {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = ABAIXO DO PESO IDEAL.`);
  } else if (imc <= 24.9) {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = PESO IDEAL.`);
  } else if (imc <= 29.9) {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = ACIMA DO PESO IDEAL.`);
  } else if (imc <= 34.9) {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = OBESIDADE 1.`);
  } else if (imc <= 39.9) {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = OBESIDADE 2.`);
  } else {
    document.querySelector(".result").innerHTML = (`IMC = <strong>${imc.toFixed(2)}</strong> = OBESIDADE 3.`);
  };
}