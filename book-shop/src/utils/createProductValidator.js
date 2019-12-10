import toastr from 'toastr'

function createProductValidator (title, author, price) {
  if (title.length < 3 || title === '') {
    toastr.error('Title must be at least 3 characters long')
    return false
  }
 
  if (!author) {
    toastr.error('Author is required!')
    return false
  }

  if (price < 0) {
    toastr.error('Price must be a positive number')
    return false
  }

  return true
}

export default createProductValidator
