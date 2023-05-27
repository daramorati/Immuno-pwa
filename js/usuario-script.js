function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const modalContainer = document.querySelector('.modal-container');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (botaoAbrir && modalContainer && containerModal){
        function abrirModal(event){
            event.preventDefault();
            containerModal.classList.add('ativo');
        }

        function cliqueForaModal(event){
            if(event.target === this); {
                fecharModal(event);
            }
        }

        botaoAbrir.addEventListener('click', abrirModal);
        containerModal.addEventListener('click', cliqueForaModal);
        
    }
}

initModal()