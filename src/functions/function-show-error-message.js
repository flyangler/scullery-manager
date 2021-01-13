import { Dialog, Loading } from 'quasar'
// showErrorMessage(error.message)

export function showErrorMessage (errorMessage) {
  Loading.hide()
  Dialog.create({
    dark: true,
    title: 'Error',
    message: errorMessage
  }).onOk(() => {
    // console.log('OK')
  })
}
