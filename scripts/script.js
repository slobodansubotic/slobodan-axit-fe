const downloadButtons = document.querySelectorAll('.download')
const downloadModal = document.querySelector('.c-download-modal')
const modalCloseButton = document.querySelector('#modal-close')

downloadButtons.forEach(element => {
  element.addEventListener('click', () => {
    downloadModal.style.display = 'block'
  })
})

window.addEventListener('click', (event) => {
  if (event.target === downloadModal) downloadModal.style.display = 'none'
})

modalCloseButton.addEventListener('click', () => {
  downloadModal.style.display = 'none'
})
