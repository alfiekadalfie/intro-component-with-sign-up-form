const emailAddress = document.querySelector('#email');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const password = document.querySelector('#password');
const claimButton = document.querySelector('.claim')

claimButton.addEventListener('click', () => {
  if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || password.value == "") {
    alert('Please fill all four entries.')
  }

  else if (!(emailAddress.value.includes('@') && emailAddress.value.includes('.'))) {
    alert('Please format email address correctly (@ and .)')
  }
})
