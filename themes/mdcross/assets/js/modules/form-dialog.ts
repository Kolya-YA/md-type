const openFormBtns = document.querySelectorAll('.open-form') as NodeListOf<HTMLButtonElement>;
const closeFormBtn = document.querySelector('.form-modal__close') as HTMLButtonElement;
const formDialog = document.querySelector('.form-dialog') as HTMLDialogElement;

formDialog.showModal();

openFormBtns?.forEach(oBtn => {oBtn.addEventListener('click', () => {    
        formDialog.showModal();
        document.body.style.overflow = 'hidden';
    }, false);
});

closeFormBtn?.addEventListener('click', () => {
    formDialog.close();
}, false);

formDialog?.addEventListener('click', ({ target })=> {
    if ((target as HTMLDialogElement).nodeName === 'DIALOG') {
        (target as HTMLDialogElement).close('dismiss');
    }
}, false);

formDialog?.addEventListener('close', () => {
    document.body.style.overflow = 'auto';     
}, false);