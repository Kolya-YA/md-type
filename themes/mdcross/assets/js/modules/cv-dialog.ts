const showCvBtn = document.querySelector('.cv-modal__show') as HTMLButtonElement;
const closeCvBtn = document.querySelector('.cv-modal__close') as HTMLButtonElement;
const cvDetails = document.querySelector('.cv-modal__dialog') as HTMLDialogElement;

// cvDetails.showModal();

showCvBtn.addEventListener('click', () => {    
    cvDetails.showModal();
});

closeCvBtn.addEventListener('click', () => {
    cvDetails.close();
});