// exibir msg no console
function showMessage(message) {
    console.log("Mensagem: " + message);
}

// manipulacao de elementos
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', function () {
            showMessage('Botão clicado!');
        });
    }
});
