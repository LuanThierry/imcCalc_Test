const send = document.querySelector ("#send");
total.style.display="none";

function IMC(e) {
  e.preventDefault();
  var altura = document.querySelector("#altura").value;
  var peso = document.querySelector("#peso").value;
  var total = document.querySelector("#total")
  tamanho = parseFloat(altura);
  peso = parseFloat(peso);
  if (altura !== '' && peso !== ''){
    const imcV = (peso/(altura*altura)).toFixed(1);
    let result = '';
      if (imcV < 18.5){
        result = "muito abaixo do peso";
      }else if(imcV < 25){
        result = "ideal!!!";
      }else if(imcV < 30){
        result = "pouco acima do peso";
      }else if(imcV < 35){
        result = "obeso grau I";
      }else if(imcV < 40){
        result = "obeso grau II";
      }else{
      result = "obeso grau III, urgente!!!"
      }
      total.innerText = `seu imc ${imcV}, ${result}`;
      total.style.display="flex";
      }else{
        total.innerText = "Digite novamente";
        total.style.display="flex";
      }
  
}

send.addEventListener("click", IMC);