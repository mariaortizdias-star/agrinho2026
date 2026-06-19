// INTERAÇÃO 1: Menu Hamburguer para Dispositivos Móveis
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Altera o ícone visível entre "Menu" (☰) e "Fechar" (✕)
    if (navMenu.classList.contains('active')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

// Fecha o menu móvel automaticamente ao clicar em qualquer link interno
const menuLinks = document.querySelectorAll('.nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});

// INTERAÇÃO 2: Efeito Dinâmico de Entrada nos Cards de Serviço
const cards = document.querySelectorAll('.card');

const verificarVisibilidade = () => {
    const pontoDeAtivacao = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTopo = card.getBoundingClientRect().top;

        if (cardTopo < pontoDeAtivacao) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease-out';
        }
    });
};

// Aplica configuração inicial transparente nos cards para a animação do scroll funcionar
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
});

// Dispara a checagem no carregamento da página e ao rolar o scroll
window.addEventListener('scroll', verificarVisibilidade);
window.addEventListener('load', verificarVisibilidade);
