const axios = require('axios');

const getUrl = (data) =>
  ` https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='11-29-2021'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao  `;

axios
  .get(getUrl('11-29-2021'))
  .then((res) => console.log(res.data.value[0].cotacaoVenda));
