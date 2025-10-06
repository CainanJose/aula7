// --- Mantém as 5 anteriores ---
alert("🎮 Bem-vindo ao Portal de Feedback de Jogos!");

// Cor do título
document.querySelector("h2").style.color = "#4CAF50";

// Contador de cliques
const cards = document.querySelectorAll(".jogo-card");
let totalCliques = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {
    totalCliques++;
    console.log(`Card clicado! Total de cliques: ${totalCliques}`);
  });
});

// Mostra hora de acesso
const rodape = document.querySelector("#rodape");
const hora = new Date().toLocaleTimeString("pt-BR");
rodape.insertAdjacentHTML("beforeend", `<p>Hora de acesso: ${hora}</p>`);

// Efeito de borda com hover
cards.forEach(card => {
  card.addEventListener("mouseover", () => card.style.borderColor = "#4CAF50");
  card.addEventListener("mouseout", () => card.style.borderColor = "#ddd");
});


// ==========================
// 🔹 NOVAS 5 FUNCIONALIDADES
// ==========================

// 6️⃣ Botão para voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.textContent = "⬆️ Topo";
botaoTopo.classList.add("btn-topo");
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// 7️⃣ Alternar tema (claro/escuro)
const btnTema = document.createElement("button");
btnTema.textContent = "🌙 Modo Escuro";
btnTema.classList.add("btn-tema");
document.body.appendChild(btnTema);

let modoEscuro = false;
btnTema.addEventListener("click", () => {
  modoEscuro = !modoEscuro;
  document.body.style.background = modoEscuro ? "#212121" : "#f5f5f5";
  document.body.style.color = modoEscuro ? "#fff" : "#333";
  btnTema.textContent = modoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// 8️⃣ Sistema de avaliação (nota)
cards.forEach(card => {
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Nota (0-10)";
  input.min = 0;
  input.max = 10;
  input.classList.add("avaliacao");
  card.appendChild(input);
});

// 9️⃣ Mostrar data atual no título
const dataAtual = new Date().toLocaleDateString("pt-BR");
document.querySelector("h1").insertAdjacentHTML("beforeend", `<br><small>${dataAtual}</small>`);

// 🔟 Animação simples nos cards ao carregar
window.addEventListener("load", () => {
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 100);
  });
});
