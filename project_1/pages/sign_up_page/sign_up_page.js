let form = document.getElementById('form')

if(localStorage.getItem('email') && localStorage.getItem('password') && localStorage.getItem('fullname')){
    document.getElementById('email').value = localStorage.getItem('email')
    document.getElementById('password').value = localStorage.getItem('password')
    document.getElementById('fullname').value = localStorage.getItem('fullname')
}

document.getElementById('signup').addEventListener('click', (e) => {
    e.preventDefault ()
   const fullname = document.getElementById('fullname').value
   const email = document.getElementById('email').value
   const password = document.getElementById('password').value

   localStorage.setItem('fullname', fullname)
   localStorage.setItem('email', email)
   localStorage.setItem('password', password)
  

   alert("Your details are saved in localstorage")
})

document.getElementById('clear').addEventListener('click', () => {
    localStorage.removeItem('fullname')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
})