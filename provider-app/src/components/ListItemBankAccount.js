import { FaTrash } from 'react-icons/fa';

const ListItemBankAccount = props => {
  return (
    <button id={props.iban} onClick={() => props.click(props.iban)} className='bg-white flex w-full mt-2 py-4 px-10 justify-between rounded-full text-gray-700 font-light shadow'>
      <div className=''>{props.iban}</div>
      <div className=''>{props.number}</div>
      <div className=''>{props.cardNumber}</div>
      <button className='mt-1'><FaTrash/></button>
    </button>
  );
}

export default ListItemBankAccount
