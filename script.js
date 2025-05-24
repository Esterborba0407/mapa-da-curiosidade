// Inicializei o mapa
const map = L.map('map').setView([20, 0], 2);

// Adicionei o mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Função para atualizar o painel com animação
function updatePanel(name, curiosity, flagPath, lat, lng) {
  const flagEl = document.getElementById("flag");
  const nameEl = document.getElementById("country-name");
  const infoEl = document.getElementById("country-info");

  flagEl.src = flagPath;
  nameEl.textContent = name;
  infoEl.textContent = curiosity;

  map.setView([lat, lng], 5);

  [flagEl, nameEl, infoEl].forEach(el => {
    el.classList.remove("fade");
    void el.offsetWidth;
    el.classList.add("fade");
  });
}

// Função que encontrei para adicionar países ao mapa
function addCountry(lat, lng, name, curiosity, flagPath) {
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(name).on('click', () => {
    updatePanel(name, curiosity, flagPath, lat, lng);
  });
}

// Lista de países com curiosidades e imagens
const countries = [
  {
    name: "Brasil",
    curiosity: "O Brasil possui a maior biodiversidade do mundo...",
    flag: "imagens/brasil.png",
    lat: -14.2350,
    lng: -51.9253
  },
  {
    nome: "França",
    curiosity: "Paris tem mais de 1.800 pontes...",
    flag: "imagens/franca.png",
    lat: 48.8566,
    lng: 2.3522
  },
  {
    nome: "Japão",
    curiosity: "No japão a cor verde do Semáfaro é chamado de azul , Mesmo que a luz do semáforo seja verde, os japoneses a chamam de “ao” (青) ",
    flag: "imagens/japao.png",
    lat: 35.6762,
    lng: 139.6503
  },
  {
    nome: "Egito",
    curiosity: "A Pirâmide de Quéops foi uma das 7 maravilhas do mundo antigo...",
    flag: "imagens/egito.png",
    lat: 29.9792,
    lng: 31.1342
  },
  {
    nome: "Índia",
    curiosity: "O Taj Mahal foi construído em homenagem à esposa do imperador Shah Jahan.",
    flag: "imagens/india.png",
    lat: 27.1751,
    lng: 78.0421
  },
  {
    nome: "Estados Unidos",
    curiosity: "O Grand Canyon é tão grande que levaria 3 horas para atravessá-lo de carro.",
    flag: "imagens/estadosunidos.png",
    lat: 36.1069,
    lng: -112.1129
  },
  {
    nome: "China",
    curiosity: "A Grande Muralha da China tem mais de 21.000 quilômetros de extensão.",
    flag: "imagens/China.png",
    lat: 39.9042,
    lng: 116.4074
  },
  {
    nome: "Itália",
    curiosity: "Roma tem mais igrejas do que qualquer outra cidade no mundo.",
    flag: "imagens/italia.png",
    lat: 41.9028,
    lng: 12.4964
  },
  {
    nome: "Islândia",
    curiosity: "Na Islândia, você pode ver auroras boreais e tomar banho em fontes termais naturais.",
    flag: "imagens/inslandia.png",
    lat: 64.9631,
    lng: -19.0208
  },
  {
    nome: "Coreia do Norte",
    curiosity: "A Coreia do Norte tem uma das internets mais restritas do mundo.",
    flag: "imagens/coreiadonorte.png",
    lat: 39.0392,
    lng: 125.7625
  },
  {
    name: "Canadá",
    curiosity: "O Canadá tem mais lagos do que todos os outros países juntos!",
    flag: "imagens/Canada.png",
    lat: 56.1304,
    lng: -106.3468
  },  
  {
    name: "Coreia do Sul",
    curiosity: "Na Coreia do Sul, existe um festival dedicado ao amor chamado Dia Branco!",
    flag: "imagens/coreiadosul.png",
    lat: 36.5,
    lng: 127.8
  },
  {
    name: "Uruguai",
    curiosity: "O Uruguai foi o primeiro país a legalizar totalmente a maconha.",
    flag: "imagens/uruguai.png",
    lat: -32.5228,
    lng: -55.7658
  },
  {
    name: "Suíça",
    curiosity: "A Suíça tem mais de 7.000 lagos em seu território!",
    flag: "imagens/suica.png",
    lat: 46.8182,
    lng: 8.2275
  },
  {
    name: "Sri Lanka",
    curiosity: "Sri Lanka é conhecido como a 'Lágrima da Índia' por causa de seu formato.",
    flag: "imagens/srilanka.png",
    lat: 7.8731,
    lng: 80.7718
  },
  {
    name: "Romênia",
    curiosity: "O Castelo de Bran, na Romênia, é famoso por sua associação com Drácula!",
    flag: "imagens/romenia.png",
    lat: 45.9432,
    lng: 24.9668
  },
  {
    name: "Paraguai",
    curiosity: "Paraguai é um dos poucos países sem saída para o mar na América do Sul.",
    flag: "imagens/paraguai.png",
    lat: -23.4425,
    lng: -58.4438
  },
  {
    name: "Reino Unido",
    curiosity: "O Big Ben não é o relógio, mas o sino dentro da torre!",
    flag: "imagens/reinounido.png",
    lat: 55.3781,
    lng: -3.4360
  },
  {
    name: "Nova Zelândia",
    curiosity: "A Nova Zelândia foi o primeiro país a permitir o voto feminino.",
    flag: "imagens/novazelandia.png",
    lat: -40.9006,
    lng: 174.8860
  },
  {
    name: "Noruega",
    curiosity: "Na Noruega, o sol pode não se pôr por semanas no verão, no norte do país!",
    flag: "imagens/Noruega.PNG",
    lat: 60.4720,
    lng: 8.4689
  },
  {
    name: "Nepal",
    curiosity: "O Nepal abriga o Monte Everest, o ponto mais alto da Terra.",
    flag: "imagens/nepal.png",
    lat: 28.3949,
    lng: 84.1240
  },
  {
    name: "Mongólia",
    curiosity: "Na Mongólia, ainda existem nômades que vivem em tendas chamadas 'gers'.",
    flag: "imagens/mongolia.png",
    lat: 46.8625,
    lng: 103.8467
  },
  {
    name: "Maldivas",
    curiosity: "As Maldivas são o país mais baixo do mundo, com média de apenas 1,5m acima do mar.",
    flag: "imagens/maldivas.png",
    lat: 3.2028,
    lng: 73.2207
  },
  {
    name: "Jordânia",
    curiosity: "A Jordânia abriga Petra, uma das 7 maravilhas do mundo moderno.",
    flag: "imagens/jordania.png",
    lat: 30.5852,
    lng: 36.2384
  },
  {
    name: "Holanda",
    curiosity: "Cerca de um terço da Holanda está abaixo do nível do mar.",
    flag: "imagens/holanda.png",
    lat: 52.1326,
    lng: 5.2913
  },
  {
    name: "Finlândia",
    curiosity: "A Finlândia é o país com mais lagos do mundo!",
    flag: "imagens/finlandia.png",
    lat: 61.9241,
    lng: 25.7482
  },
  {
    name: "Espanha",
    curiosity: "Na Espanha, há uma cidade que realiza a 'Tomatina', uma guerra de tomates!",
    flag: "imagens/espanha.png",
    lat: 40.4637,
    lng: -3.7492
  },
  {
    name: "Bahamas",
    curiosity: "As Bahamas têm águas tão claras que você pode ver o fundo do mar a 60 metros de profundidade!",
    flag: "imagens/Bahamas.png",
    lat: 25.0343,
    lng: -77.3963
  },
  {
    name: "Austrália",
    curiosity: "A Austrália tem mais cangurus do que habitantes.",
    flag: "imagens/Australia.png",
    lat: -25.2744,
    lng: 133.7751
  },
  {
    name: "Argentina",
    curiosity: "Na Argentina, o tango é considerado Patrimônio Cultural da Humanidade.",
    flag: "imagens/argentina.png",
    lat: -38.4161,
    lng: -63.6167
  },
  {
    name: "Alemanha",
    curiosity: "Na Alemanha, existe uma estrada sem limite de velocidade: a Autobahn.",
    flag: "imagens/alemanha.png",
    lat: 51.1657,
    lng: 10.4515
  },
  {
    name: "Colômbia",
    curiosity: "A Colômbia é o segundo país mais biodiverso do mundo, atrás apenas do Brasil.",
    flag: "imagens/colombia.png",
    lat: 4.5709,
    lng: -74.2973
  },
  {
    name: "Turquia",
    curiosity: "Istambul, na Turquia, é a única cidade do mundo situada em dois continentes: Europa e Ásia.",
    flag: "imagens/turquia.png",
    lat: 38.9637,
    lng: 35.2433
  },
  {
    name: "Polônia",
    curiosity: "A Polônia abriga o maior castelo do mundo em área: o Castelo de Malbork.",
    flag: "imagens/polonia.png",
    lat: 51.9194,
    lng: 19.1451
  },
  {
    name: "Croácia",
    curiosity: "A Croácia é famosa por suas praias e foi cenário de várias cenas de Game of Thrones.",
    flag: "imagens/croacia.png",
    lat: 45.1000,
    lng: 15.2000
  },
  {
    name: "Irã",
    curiosity: "O Irã é um dos berços das civilizações mais antigas do mundo, com mais de 5 mil anos de história.",
    flag: "imagens/ira.png",
    lat: 32.4279,
    lng: 53.6880
  },
  {
    name: "Bélgica",
    curiosity: "A Bélgica é famosa por seus chocolates e é considerada a criadora da batata frita.",
    flag: "imagens/belgica.png",
    lat: 50.5039,
    lng: 4.4699
  },
  {
    name: "Cazaquistão",
    curiosity: "O Cazaquistão é o maior país sem litoral do mundo.",
    flag: "imagens/cazaquistao.png",
    lat: 48.0196,
    lng: 66.9237
  },
  {
    name: "Filipinas",
    curiosity: "A Filipinas é composta por mais de 7.600 ilhas!",
    flag: "imagens/filipinas.png",
    lat: 12.8797,
    lng: 121.7740
  },
  {
    name: "Dinamarca",
    curiosity: "A Dinamarca é frequentemente classificada como um dos países mais felizes do mundo.",
    flag: "imagens/dinamarca.png",
    lat: 56.2639,
    lng: 9.5018
  },
  {
    name: "Tailândia",
    curiosity: "A Tailândia nunca foi colonizada por nenhuma potência europeia, ao contrário de seus vizinhos asiáticos.",
    flag: "imagens/tailandia.png",
    lat: 15.8700,
    lng: 100.9925
  },
  {
    name: "México",
    curiosity: "O México é o berço do chocolate! Os astecas foram os primeiros a preparar bebidas de cacau.",
    flag: "imagens/mexico.png",
    lat: 23.6345,
    lng: -102.5528
  },
  {
    name: "Índia",
    curiosity: "A Índia é o maior produtor de filmes do mundo, com a famosa indústria Bollywood.",
    flag: "imagens/india.png",
    lat: 20.5937,
    lng: 78.9629
  },
  {
    name: "Grécia",
    curiosity: "A Grécia é o berço da democracia, filosofia ocidental e dos Jogos Olímpicos.",
    flag: "imagens/grecia.png",
    lat: 39.0742,
    lng: 21.8243
  },
  {
    name: "Indonésia",
    curiosity: "A Indonésia é o maior arquipélago do mundo, com mais de 17.000 ilhas.",
    flag: "imagens/indonesia.png",
    lat: -0.7893,
    lng: 113.9213
  },
  {
    name: "Hungria",
    curiosity: "A Hungria inventou o cubo mágico, criado por Ernő Rubik em 1974.",
    flag: "imagens/hungria.png",
    lat: 47.1625,
    lng: 19.5033
  },
  {
    name: "Vietnã",
    curiosity: "O Vietnã é um dos maiores exportadores de café do mundo.",
    flag: "imagens/vietna.png",
    lat: 14.0583,
    lng: 108.2772
  },
  {
    name: "Irlanda",
    curiosity: "A Irlanda é conhecida por ter mais de 30 mil castelos espalhados pelo país.",
    flag: "imagens/irlanda.png",
    lat: 53.1424,
    lng: -7.6921
  },
  {
    name: "Peru",
    curiosity: "O Peru abriga Machu Picchu, uma das 7 novas maravilhas do mundo.",
    flag: "imagens/peru.png",
    lat: -9.189967,
    lng: -75.015152
  }
  
];

// Adicionei 10 países 
countries.forEach(country => {
  addCountry(country.lat, country.lng, country.name, country.curiosity, country.flag);
});

// Botão "Me Surpreenda"
function surpreenda() {
  const random = Math.floor(Math.random() * countries.length);
  const country = countries[random];
  updatePanel(country.name, country.curiosity, country.flag, country.lat, country.lng);
}
