const formulario = document.getElementById("formulario-diagnostico");
const mensagemFormulario = document.getElementById("mensagem-formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const empresa = document.getElementById("empresa").value.trim();
  const segmento = document.getElementById("segmento").value.trim();
  const link = document.getElementById("link").value.trim();
  const servico = document.getElementById("servico").value;
  const objetivo = document.getElementById("objetivo").value.trim();

  const texto = [
    "*Novo diagnóstico solicitado — Roque Ads*",
    "",
    `*Nome:* ${nome}`,
    `*E-mail:* ${email}`,
    `*Empresa:* ${empresa}`,
    `*Segmento:* ${segmento}`,
    `*Link:* ${link || "Não informado"}`,
    `*Interesse atual:* ${servico}`,
    `*Objetivo:* ${objetivo}`
  ].join("\n");

  const whatsapp = "5551992755891";
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;

  mensagemFormulario.textContent =
    "Abrindo o WhatsApp para enviar seu diagnóstico...";

  window.open(url, "_blank");
});
