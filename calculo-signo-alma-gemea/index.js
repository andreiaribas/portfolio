function calculoSigno() {
  //  ~~ 1. Descobrir signo solar ~~

  // pega a data do input, por padrão ela vem formatada YYYY-MM-DD
  let nascimentoInput = document.getElementById("data-de-nascimento").value;

  // data formatada para o padrão do Brasil. Pega apenas o dia.
  let nascimentoDia = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(nascimentoInput));
  console.log(`Você nasceu no dia: ${nascimentoDia}`);

  // data formatada para o padrão do Brasil. Pega apenas o mês.
  let nascimentoMes = Number(
    new Intl.DateTimeFormat("pt-BR", {
      month: "numeric",
      timeZone: "UTC",
    }).format(new Date(nascimentoInput))
  );
  console.log(`Você nasceu no mês: ${nascimentoMes}`);

  let signosArray = [
    { name: "Leão", id: 1 },
    { name: "Virgem", id: 2 },
    { name: "Libra", id: 3 },
    { name: "Escorpião", id: 4 },
    { name: "Sagitário", id: 5 },
    { name: "Capricórnio", id: 6 },
    { name: "Aquário", id: 7 },
    { name: "Peixes", id: 8 },
    { name: "Áries", id: 9 },
    { name: "Touro", id: 10 },
    { name: "Gêmeos", id: 11 },
    { name: "Câncer", id: 12 },
    { name: "Leão", id: 13 },
    { name: "Virgem", id: 14 },
    { name: "Libra", id: 15 },
    { name: "Escorpião", id: 16 },
    { name: "Sagitário", id: 17 },
    { name: "Capricórnio", id: 18 },
    { name: "Aquário", id: 19 },
    { name: "Peixes", id: 20 },
    { name: "Áries", id: 21 },
    { name: "Touro", id: 22 },
    { name: "Gêmeos", id: 23 },
    { name: "Câncer", id: 24 },
  ];

  if (
    (nascimentoMes === 1 && nascimentoDia >= 21) ||
    (nascimentoMes === 2 && nascimentoDia <= 18)
  ) {
    var signoSolarId = 7;

    // o nome do signo solar é o name correspondente ao número que está no array
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 7)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 2 && nascimentoDia >= 19) ||
    (nascimentoMes === 3 && nascimentoDia <= 20)
  ) {
    var signoSolarId = 8;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 8)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 3 && nascimentoDia >= 21) ||
    (nascimentoMes === 4 && nascimentoDia <= 20)
  ) {
    var signoSolarId = 9;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 9)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 4 && nascimentoDia >= 21) ||
    (nascimentoMes === 5 && nascimentoDia <= 20)
  ) {
    var signoSolarId = 10;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 10)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 5 && nascimentoDia >= 21) ||
    (nascimentoMes === 6 && nascimentoDia <= 20)
  ) {
    var signoSolarId = 11;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 11)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 6 && nascimentoDia >= 21) ||
    (nascimentoMes === 7 && nascimentoDia <= 22)
  ) {
    var signoSolarId = 12;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 12)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 7 && nascimentoDia >= 23) ||
    (nascimentoMes === 8 && nascimentoDia <= 22)
  ) {
    var signoSolarId = 1;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 1)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 8 && nascimentoDia >= 23) ||
    (nascimentoMes === 9 && nascimentoDia <= 22)
  ) {
    var signoSolarId = 2;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 2)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 9 && nascimentoDia >= 23) ||
    (nascimentoMes === 10 && nascimentoDia <= 22)
  ) {
    var signoSolarId = 3;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 3)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 10 && nascimentoDia >= 23) ||
    (nascimentoMes === 11 && nascimentoDia <= 21)
  ) {
    var signoSolarId = 4;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 4)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 11 && nascimentoDia >= 22) ||
    (nascimentoMes === 12 && nascimentoDia <= 21)
  ) {
    var signoSolarId = 5;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 5)
      .map((signo) => signo.name);
  } else if (
    (nascimentoMes === 12 && nascimentoDia >= 22) ||
    (nascimentoMes === 1 && nascimentoDia <= 20)
  ) {
    var signoSolarId = 6;
    var signoSolarName = signosArray
      .filter((signo) => signo.id == 6)
      .map((signo) => signo.name);
  }
  console.log(`Seu signo solar é: ${signoSolarName}`);

  //  ~~ 2. Descobrir signo ascendente ~~
  // Pega o horário que foi digitado no input
  let nascimentoHorario = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
  }).format(new Date(nascimentoInput));

  console.log(`Você nasceu às: ${nascimentoHorario}`);

  // Tira o : do horario
  let nascimentoHorarioNumero = nascimentoHorario.replace(":", "");
  console.log(`Horário sem formatação ":": ${nascimentoHorarioNumero}`);

  if (nascimentoHorarioNumero >= 631 && nascimentoHorarioNumero <= 830) {
    var signoAscId = Number(signoSolarId) + 1;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 831 &&
    nascimentoHorarioNumero <= 1030
  ) {
    var signoAscId = Number(signoSolarId) + 2;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 1031 &&
    nascimentoHorarioNumero <= 1230
  ) {
    var signoAscId = Number(signoSolarId) + 3;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 1231 &&
    nascimentoHorarioNumero <= 1430
  ) {
    var signoAscId = Number(signoSolarId) + 4;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 1431 &&
    nascimentoHorarioNumero <= 1630
  ) {
    var signoAscId = Number(signoSolarId) + 5;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 1631 &&
    nascimentoHorarioNumero <= 1830
  ) {
    var signoAscId = Number(signoSolarId) + 6;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 1831 &&
    nascimentoHorarioNumero <= 2030
  ) {
    var signoAscId = Number(signoSolarId) + 7;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    nascimentoHorarioNumero >= 2031 &&
    nascimentoHorarioNumero <= 2230
  ) {
    var signoAscId = Number(signoSolarId) + 8;
    var signoAscName = signosArray
      .filter((signo) => signo.id === signoAscId)
      .map((signo) => signo.name);
  } else if (
    (nascimentoHorarioNumero >= 2231 && nascimentoHorarioNumero <= 2359) ||
    (nascimentoHorarioNumero >= 0 && nascimentoHorarioNumero <= 030)
  ) {
    var signoAscId = Number(signoSolarId) + 9;
    var signoAscName = signosArray
      .filter((signo) => signo.id == signoAscId)
      .map((signo) => signo.name);
  } else if (nascimentoHorarioNumero >= 031 && nascimentoHorarioNumero <= 230) {
    var signoAscId = Number(signoSolarId) + 10;
    var signoAscName = signosArray
      .filter((signo) => signo.id == signoAscId)
      .map((signo) => signo.name);
  } else if (nascimentoHorarioNumero >= 231 && nascimentoHorarioNumero <= 430) {
    var signoAscId = Number(signoSolarId) + 11;
    var signoAscName = signosArray
      .filter((signo) => signo.id == signoAscId)
      .map((signo) => signo.name);
  } else if (nascimentoHorarioNumero >= 431 && nascimentoHorarioNumero <= 630) {
    var signoAscId = Number(signoSolarId) + 12;
    var signoAscName = signosArray
      .filter((signo) => signo.id == signoAscId)
      .map((signo) => signo.name);
  }

  console.log(`Seu signo ascendente é: ${signoAscName}`);

  // 3. Alma gêmea
  let signoAlmaGemeaId = signoAscId + 6;
  let signoAlmaGemeaName = signosArray
    .filter((signo) => signo.id == signoAlmaGemeaId)
    .map((signo) => signo.name);

  console.log(`Seu signo alma gêmea é: ${signoAlmaGemeaName}`);

  if (signoAlmaGemeaId === 1 || signoAlmaGemeaId === 13) {
    return (location.href = "/alma-gemea-leao");
  } else if (signoAlmaGemeaId === 2 || signoAlmaGemeaId === 14) {
    return (location.href = "/alma-gemea-virgem");
  } else if (signoAlmaGemeaId === 3 || signoAlmaGemeaId === 15) {
    return (location.href = "/alma-gemea-libra");
  } else if (signoAlmaGemeaId === 4 || signoAlmaGemeaId === 16) {
    return (location.href = "/alma-gemea-escorpiao");
  } else if (signoAlmaGemeaId === 5 || signoAlmaGemeaId === 17) {
    return (location.href = "/alma-gemea-sagitario");
  } else if (signoAlmaGemeaId === 6 || signoAlmaGemeaId === 18) {
    return (location.href = "/alma-gemea-capricornio");
  } else if (signoAlmaGemeaId === 7 || signoAlmaGemeaId === 19) {
    return (location.href = "/alma-gemea-aquario");
  } else if (signoAlmaGemeaId === 8 || signoAlmaGemeaId === 20) {
    return (location.href = "/alma-gemea-peixes");
  } else if (signoAlmaGemeaId === 9 || signoAlmaGemeaId === 21) {
    return (location.href = "/alma-gemea-aries");
  } else if (signoAlmaGemeaId === 10 || signoAlmaGemeaId === 22) {
    return (location.href = "/alma-gemea-touro");
  } else if (signoAlmaGemeaId === 11 || signoAlmaGemeaId === 23) {
    return (location.href = "/alma-gemea-gemeos");
  } else if (signoAlmaGemeaId === 12 || signoAlmaGemeaId === 24) {
    return (location.href = "/alma-gemea-cancer");
  }
}
