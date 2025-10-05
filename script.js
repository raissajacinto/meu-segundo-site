function equaçãoSegundo() {
  let inputA = document.querySelector("#a");
  let inputB = document.querySelector("#b");
  let inputC = document.querySelector("#c");
  let spanResposta = document.querySelector("#resposta");
  let a = parseInt(inputA.value);
  let b = parseInt(inputB.value);
  let c = parseInt(inputC.value);
  let mensagem;
  let delta = b * b - 4 * a * c;
  if(delta < 0) { 
    mensagem = "Delta negativo, não é possivel seguir calculando.";
  } else {
    let raizDelta = Math.sqrt(delta);
    let x1 = (-b + raizDelta) / (2 * a);
    let x2 = (-b - raizDelta) / (2 * a);
    mensagem = `As raízes reais são: x1 = ${x1} e x2 = ${x2}`;
  }
  spanResposta.innerHTML = `<b>${mensagem}</b>`;
}