import { FaTrash } from 'react-icons/fa';

const ListItemBankAccount = props => {
  return (
      <button class='bg-white flex w-full mt-2 py-4 px-10 justify-between rounded-full text-gray-700 font-light shadow'>
      <div class=''>IBAN ***125</div>
      <div class=''>Αριθμός</div>
      <div class=''>*****************125</div>
      <button class=''><FaTrash/></button>
    </button>
  );
}

export default ListItemBankAccount