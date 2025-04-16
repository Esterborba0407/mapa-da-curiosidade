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
    flag: "imagens/china.png",
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
