function initModal() {
    const modalContainer = document.querySelector('.modal-container1');
    const botaoFechar = document.querySelector('[data-modal="fechar1"]');
    const containerModal = document.querySelector('[data-modal="container1"]');


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

    console.log(botaoFechar)
}

initModal()