// Mostrar a seção de Fale Conosco

window.addEventListener('load', function () {
    sectionFaleConosco.classList.remove('d-none');
});

// Eventos NavLink - Gatos

const navLinkGatos = document.getElementById('nav-link-gatos');
const sectionGatos = document.getElementById('section-gatos');

navLinkGatos.addEventListener('click', function () {
    sectionGatos.scrollIntoView();
});

navLinkGatos.addEventListener('mouseover', function () {
    navLinkGatos.style.cursor = 'pointer';
    navLinkGatos.classList.add('navbar-hover');
});

navLinkGatos.addEventListener('mouseleave', function () {
    navLinkGatos.classList.remove('navbar-hover');
});

// Eventos NavLink - Cachorros

const navLinkCachorros = document.getElementById('nav-link-cachorros');
const sectionCachorros = document.getElementById('section-cachorros');

navLinkCachorros.addEventListener('click', function () {
    sectionCachorros.scrollIntoView();
});

navLinkCachorros.addEventListener('mouseover', function () {
    navLinkCachorros.style.cursor = 'pointer';
    navLinkCachorros.classList.add('navbar-hover');
});

navLinkCachorros.addEventListener('mouseleave', function () {
    navLinkCachorros.classList.remove('navbar-hover');
});

// Eventos NavLink - Banner (Início da Página)

const navLinkBanner = document.getElementById('nav-link-banner');
const sectionBanner = document.getElementById('banner');

navLinkBanner.addEventListener('click', function () {
    sectionBanner.scrollIntoView();
});

navLinkBanner.addEventListener('mouseover', function () {
    navLinkBanner.style.cursor = 'pointer';
    navLinkBanner.classList.add('navbar-hover');
});

navLinkBanner.addEventListener('mouseleave', function () {
    navLinkBanner.classList.remove('navbar-hover');
});

// Eventos NavLink - Fale Conosco

const navLinkFaleConosco = document.getElementById('nav-link-fale-conosco');
const sectionFaleConosco = document.getElementById('section-fale-conosco');

navLinkFaleConosco.addEventListener('click', function () {
    sectionFaleConosco.scrollIntoView();
});

navLinkFaleConosco.addEventListener('mouseover', function () {
    navLinkFaleConosco.style.cursor = 'pointer';
    navLinkFaleConosco.classList.add('navbar-hover');
});

navLinkFaleConosco.addEventListener('mouseleave', function () {
    navLinkFaleConosco.classList.remove('navbar-hover');
});

// Evento de submit do formulário Fale Conosco

const botaoSubmit = document.getElementById('botao-submit');

botaoSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    const inputEmail = document.getElementById('input-email');
    const inputNome = document.getElementById('input-nome');

    console.log('E-mail >>', inputEmail.value);
    console.log('Nome >>', inputNome.value);

    // Aqui você mostra a seção secreta
    document.getElementById('section-secreta').style.display = 'block';
 
    document.getElementById('section-secreta-titulo').innerHTML = `Oi, ${nome.value}! Você encontrou a sessão secreta!!`
});

// Aqui você deve pegar o botao-secreto (lembre-se que o nome dele deve ser botaoSecreto para o código abaixo funcionar)
const botaoSecreto = document.getElementById('botao-secreto');
 
botaoSecreto.addEventListener('click', function (event) {
    event.preventDefault();
 
    // Aqui você deverá pegar o input-secreto
    const inputSecreto = document.getElementById('input-secreto');
 
    // Aqui você deverá pegar a mensagem-erro
    const mensagemErro = document.getElementById('mensagem-erro');
 
    if (inputSecreto.value.toLowerCase() === String.fromCodePoint(97, 117, 114, 111, 114, 97)) {
        mensagemErro.innerHTML = "";
 
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
 
        const conteudoSecreto = document.getElementById('conteudo-secreto');
 
        // Adicione aqui seu segredo personalizado (Micro desafio 2)
 
        conteudoSecreto.innerHTML = `<div class="card-pet"><div class="image-container"><img src="./assets/cat.jpeg" alt="Gata preta"></div><h3>${String.fromCodePoint(65, 117, 114, 111, 114, 97)}</h3><p>Oi! Você conseguiu me encontrar! Eu sou a ${String.fromCodePoint(65, 117, 114, 111, 114, 97)}, estagiária da Isa!</p><p>Esperamos que essa aula tenha te ajudado, e desejamos sorte no seu Checkpoint!</p><p>Se precisar de ajuda, conte com a gente! &hearts;</p></div>`;
    } else {
        mensagemErro.innerHTML = "Resposta errada :(";
    }
});
