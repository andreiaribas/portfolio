function calculoNumerologia() {
  // pega a data do input, por padrão ela vem formata YYYY-MM-DD
  let dataDeNascimentoInput =
    document.getElementById("data-de-nascimento").value;

  // data formatada para o padrão do Brasil. Está guardada na variável para caso queira utilizá-la no futuro
  let dataDeNascimentoFormatada = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(new Date(dataDeNascimentoInput));

  // mensagem de erro caso digite uma data que não existe. Ex: 31 de fev. Quando digita uma data inválida pelo pc usando o input type date, o valor fica vazio
  if (dataDeNascimentoInput == "") {
    alert("Ops, esta não é uma data válida! Tente novamente.");
    return false;
  }

  console.log(`Você nasceu em ${dataDeNascimentoFormatada}`);

  // tira todos os hífens
  let dataNumero = dataDeNascimentoInput.replace(/-/g, "");

  // Usei o while para se repetir até que dê um dos números da numerologia
  while (
    dataNumero != 1 &&
    dataNumero != 2 &&
    dataNumero != 3 &&
    dataNumero != 4 &&
    dataNumero != 5 &&
    dataNumero != 6 &&
    dataNumero != 7 &&
    dataNumero != 8 &&
    dataNumero != 9 &&
    dataNumero != 11 &&
    dataNumero != 22 &&
    dataNumero != 33 &&
    dataNumero != 44
  ) {
    // transforma em string para poder usar split
    dataNumero = dataNumero
      .toString()

      // usa o split para transformar em array para poder usar reduce
      .split("")

      // usa o reduce para somar cada um dos números
      .reduce((soma, x) => Number(x) + Number(soma));

    console.log(`A soma dos dígitos da sua data de nascimento é ${dataNumero}`);
  }

  // Resultado da numerologia
  // Se resultado for x, redireciona para a página com a descrição da personalidade x
  if (dataNumero == 1) {
    return (location.href = "/numero-01");
  } else if (dataNumero == 2) {
    return (location.href = "/numero-02");
  } else if (dataNumero == 3) {
    return (location.href = "/numero-03");
  } else if (dataNumero == 4) {
    return (location.href = "/numero-04");
  } else if (dataNumero == 5) {
    return (location.href = "/numero-05");
  } else if (dataNumero == 6) {
    return (location.href = "/numero-06");
  } else if (dataNumero == 7) {
    return (location.href = "/numero-07");
  } else if (dataNumero == 8) {
    return (location.href = "/numero-08");
  } else if (dataNumero == 9) {
    return (location.href = "/numero-09");
  } else if (dataNumero == 11) {
    return (location.href = "/numero-11");
  } else if (dataNumero == 22) {
    return (location.href = "/numero-22");
  } else if (dataNumero == 33) {
    return (location.href = "/numero-33");
  } else if (dataNumero == 44) {
    return (location.href = "/numero-44");
  }
}
