document.getElementById("btnCalcular").addEventListener("click", () => {
  const entrada = Number(document.getElementById("entrada").value);
  const saida = Number(document.getElementById("saida").value);
  const dieta = Number(document.getElementById("dieta").value);
  const peso = Number(document.getElementById("peso").value);
  const tipo = document.getElementById("leiteTipo").value;

  const calorias = {
    leiteHumano: 0.68,
    nan1: 0.70,
    preNan: 0.80,
    infatrini: 1,
    agua: 0
  };

  const balancoTotal = entrada - saida;                    
  const balancoHidrico = balancoTotal / peso;             
  const diurese = saida / peso / 24;                      
  const ofertaHidrica = entrada / peso;                   
  const ofertaCalorica = ofertaHidrica * calorias[tipo];  

  // AJUSTE AQUI 👇
  const ofertaCaloricaIncremental = dieta === 0
    ? 0
    : (dieta / peso) * calorias[tipo];

  document.getElementById("balancoTotal").innerText =
    `${balancoTotal.toFixed(2)} ml`;

  document.getElementById("balancoHidrico").innerText =
    `${balancoHidrico.toFixed(2)} ml/kg`;

  document.getElementById("diurese").innerText =
    `${diurese.toFixed(4)} ml/kg/h`;

  document.getElementById("ofertaHidrica").innerText =
    `${ofertaHidrica.toFixed(2)} ml/kg`;

  document.getElementById("ofertaCalorica").innerText =
    `${ofertaCalorica.toFixed(2)} kcal/kg`;

  document.getElementById("ofertaCaloricaInc").innerText =
    `${ofertaCaloricaIncremental.toFixed(2)} kcal/kg`;
});
