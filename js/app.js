class opinions {
  constructor(title, text, name) {
      this.title = title;
      this.text = text;
      this.name = name;
  }
}

const opinionsList = [
  new opinions("Excelente Servicio", "El trato del personal fue muy amable y profesional.", "Dr. Martínez"),
  new opinions("Muy Satisfecho", "El procedimiento fue rápido y sin dolor. ¡Altamente recomendado!", "Laura G."),
  new opinions("Instalaciones Impecables", "La clínica está muy limpia y bien equipada.", "Carlos P."),
  new opinions("Resultados Increíbles", "Mi sonrisa luce mejor que nunca. ¡Gracias!", "Ana R."),
  new opinions("Atención Personalizada", "El dentista explicó todo con detalle y resolvió mis dudas.", "Jorge L.")
];

const clientSay = document.getElementById('opiones');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let currentIndex = 0;

function updateOpinion() {
  const opinion = opinionsList[currentIndex];
  clientSay.innerHTML = `
      <h5>${opinion.title}</h5>
      <p>${opinion.text}</p>
      <p><strong>- ${opinion.name}</strong></p>
  `;
}

updateOpinion();

leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + opinionsList.length) % opinionsList.length;
  setTimeout(() => {
      updateOpinion();
  }, 300); 
});

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % opinionsList.length;
  setTimeout(() => {
      updateOpinion();
  }, 300); 
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % opinionsList.length;
  setTimeout(() => {
      updateOpinion();
  }, 300);
}, 4000);