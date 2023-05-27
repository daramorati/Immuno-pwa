function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrirmodal"]');
    const containerModal = document.querySelector('[data-modal="vacina"]');
    
    if(botaoAbrir && containerModal) {
      
      function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
      }
      function cliqueForaModal(event) {
        if(event.target === this) {
          toggleModal(event);
        }
      }
    
      botaoAbrir.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', cliqueForaModal);
    }
  }

  initModal()

  function initTroca(){
    const trocaModal = document.querySelector('[data-modal="trocamodal"]');
    const modal1 = document.querySelector('[data-modal="vacina"]');
    const modal2 = document.querySelector('[data-modal="vacina2"]');

    

    function mudarModal(event) {
        event.preventDefault();
        modal1.classList.remove('ativo');
    }

    function abrirModal() {
        modal2.classList.add('ativo');
    }
    

    function toggleModal(event) {
        event.preventDefault();
        modal2.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
    if(event.target === this) {
        toggleModal(event);
    }
    }

    trocaModal.addEventListener('click', mudarModal);
    trocaModal.addEventListener('click', abrirModal);
    modal2.addEventListener('click', cliqueForaModal);
  }

  initTroca()

  function initTroca2(){
    const trocaModal = document.querySelector('[data-modal="trocamodal2"]');
    const fecharoModal = document.querySelector('[data-modal="fecharmodal"]');
    const modal2 = document.querySelector('[data-modal="vacina2"]');
    const modal3 = document.querySelector('[data-modal="vacina3"]');



    function mudarModal(event) {
        event.preventDefault();
        modal2.classList.remove('ativo');
    }

    function abrirModal() {
        modal3.classList.add('ativo');
    }

    function fecharModal(event){
        event.preventDefault();
        modal3.classList.remove('ativo');
    }

    function toggleModal(event) {
        event.preventDefault();
        modal3.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
    if(event.target === this) {
        toggleModal(event);
    }
    }


    trocaModal.addEventListener('click', mudarModal);
    trocaModal.addEventListener('click', abrirModal);
    fecharoModal.addEventListener('click', fecharModal);
    modal3.addEventListener('click', cliqueForaModal);
  }
  
  initTroca2()