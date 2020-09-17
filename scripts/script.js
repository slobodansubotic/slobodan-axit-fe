const downloadButtons = document.querySelectorAll('.download')
const downloadModal = document.querySelector('.c-download-modal')
const modalCloseButton = document.querySelector('#modal-close')
const body = document.querySelector('body')

downloadButtons.forEach(element => {
  element.addEventListener('click', () => {
    downloadModal.style.display = 'block'
    body.style.overflow = 'hidden'
  })
})

window.addEventListener('click', (event) => {
  if (event.target === downloadModal) {
    downloadModal.style.display = 'none'
    body.style.overflow = 'visible'
  }
})

modalCloseButton.addEventListener('click', () => {
  downloadModal.style.display = 'none'
  body.style.overflow = 'visible'
})
