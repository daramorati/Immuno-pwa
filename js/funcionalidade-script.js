function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const modalContainer = document.querySelector('.modal-container');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (botaoAbrir && modalContainer && botaoFechar && containerModal){
        function abrirModal(event){
            event.preventDefault();
            containerModal.classList.add('ativo');
        }

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

        botaoAbrir.addEventListener('click', abrirModal);
        botaoFechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', cliqueForaModal);
        
    }
}

initModal()

function initModal2() {
    const botaoAbrir = document.querySelectorAll('[data-modal="abrir"]');
    const modalContainer = document.querySelector('.modal-container');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (botaoAbrir && modalContainer && botaoFechar && containerModal){

        if(botaoAbrir.length) {
            function abrirModal(event){
                event.preventDefault();
                containerModal.classList.add('ativo');
            }
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
    
        botaoAbrir.forEach((item) => {
            item.addEventListener('click', abrirModal);
        });
        
        botaoFechar.addEventListener('click', fecharModal);
        containerModal.addEventListener('click', cliqueForaModal);
        
    }
}

initModal2()

