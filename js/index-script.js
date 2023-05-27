function initModal() {
    const modalContainer = document.querySelector('.modal-container');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (modalContainer && botaoFechar && containerModal){


        function abrirPopUp(){
            modalContainer.classList.add('ativo');
        }

        function fecharModal(event){
            event.preventDefault();
            containerModal.classList.remove('ativo');
        }

        function cliqueForaModal(event){
            if(event.target === this); {
                fecharModal(event);
            }
        }
        
        setTimeout(abrirPopUp, 2000);
        botaoFechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', cliqueForaModal);
        
    }
}

initModal()