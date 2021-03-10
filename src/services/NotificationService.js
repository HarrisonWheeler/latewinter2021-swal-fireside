import Swal from 'sweetalert2'

export default class NotificationService {
  static async confirmAction(title = 'Are you sure?', text = 'You wont be able to undo this!', imageUrl = 'placehold.it/200x200') {
    try {
      // NOTE isConfirmed is one of the properties on the object of the Swal.fire response which then is set on the variable res - we want to await this because we don't know how long the user to going to take to choose an option on the sweet alert itself.

      const res = await Swal.fire({
        title: title,
        text: text,
        imageUrl: imageUrl,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      console.log(res)
      // NOTE we can check here if the user confirmed, denied, clicked off the alert itself, etc.
      if (res.isConfirmed) {
        return true
      } else {
        return false
      }
    } catch (error) {
    }
  }
}
