const showFormBtns = document.querySelectorAll('.form-modal__show') as NodeListOf<HTMLButtonElement>;
const closeFormBtn = document.querySelector('.form-modal__close') as HTMLButtonElement;
const formDetails = document.querySelector('.form-modal__dialog') as HTMLDialogElement;

// formDetails.showModal();

showFormBtns.forEach(sFB => {
    sFB.addEventListener('click', () => {    
        formDetails.showModal();
    })
});

closeFormBtn.addEventListener('click', () => {
    formDetails.close();
});