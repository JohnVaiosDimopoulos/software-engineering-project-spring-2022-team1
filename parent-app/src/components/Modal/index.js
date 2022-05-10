const Modal = props => {
  const overlay = document.getElementById('overlay');
  if(!props.show) {
    return null
  }
  return (
    <>
      <div onClick={props.onClose} class='bg-black bg-opacity-25 fixed top-0 bottom-0 right-0 left-0 z-40'></div>
      <div class='fixed top-20 left-0 right-0 w-96 mx-auto z-50'>{props.children}</div>
    </>
  )
}

export default Modal
