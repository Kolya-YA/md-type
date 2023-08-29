console.log('InfoDet');

const infoDetails = document.querySelectorAll('.info__details')

infoDetails.forEach(iD => {
    iD.addEventListener('click', (event) => {
        console.log(iD.open);
        // if (event.target.getAttribute('open') === 'true') {
        infoDetails.forEach(iD => iD.removeAttribute('open'))
    })
})