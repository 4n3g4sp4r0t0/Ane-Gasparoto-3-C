// Função de simulação de login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulando um login simples com usuário e senha fixos
    if (username === 'f1fan' && password === '12345') {
        alert('Login bem-sucedido! Bem-vindo ao site da Fórmula 1.');
        window.location.href = 'index.html'; // Redireciona para a página principal após login
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.');
    }
});
