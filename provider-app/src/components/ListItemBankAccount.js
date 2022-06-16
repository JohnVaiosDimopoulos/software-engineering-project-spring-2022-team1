import { FaTrash } from 'react-icons/fa';

function switchSelected(id){
  //Array.prototype.slice.call(document.querySelectorAll('')).forEach(function(element){
  //  element.classList.remove('border-2 border-cyan');
  //});
  var el = document.getElementById(id);
  el.className += 'w-full border-4 border-cyan';
}

const ListItemBankAccount = props => {
  return (
    <button id={props.iban} onClick={() => switchSelected(props.iban)} class='bg-white flex w-full mt-2 py-4 px-10 justify-between rounded-full text-gray-700 font-light shadow'>
      <div class=''>{props.iban}</div>
      <div class=''>{props.number}</div>
      <div class=''>{props.cardNumber}</div>
      <button class='mt-1'><FaTrash/></button>
    </button>
  );
}

export default ListItemBankAccount