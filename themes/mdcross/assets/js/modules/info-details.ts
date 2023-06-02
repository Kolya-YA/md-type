console.log('InfoDet');

const infoDetails = document.querySelectorAll('.info__details')

infoDetails.forEach(iD => {
    iD.addEventListener('click', ({ target }) => {
        infoDetails.forEach(iD => iD.removeAttribute('open'))
    })
})