(function(){
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if (menuBtn && menu){
    menuBtn.addEventListener('click', () => {
      const aberto = menu.classList.toggle('aberto');
      menuBtn.setAttribute('aria-expanded', String(aberto));
    });
  }

  const form = document.getElementById('contatoForm');
  const status = document.getElementById('status');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dados = Object.fromEntries(new FormData(form).entries());
      // Simulação de envio
      status.textContent = `Obrigado, ${dados.nome}! Recebemos sua mensagem.`;
      form.reset();
    });
  }
})();
