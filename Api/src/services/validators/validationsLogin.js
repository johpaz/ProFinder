export const validateEmail = (value, errors, setErrors) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let error
  if (!value) {
    error = 'El correo es requerido'
  } else if (!regexEmail.test(value)) {
    error = 'introduce un correo valido'
  } else if (value !== 'correo.prueba@gmail.com') {
    error = 'Credenciales invalidas'
  } else {
    error = ''
  }
  setErrors({
    ...errors,
    email: error
  })
}
