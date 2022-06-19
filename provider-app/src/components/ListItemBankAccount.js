import { FaTrash } from 'react-icons/fa';

const ListItemBankAccount = ({ data, clicked, isSelected }) => {
  return (
    <div onClick={() => clicked()} className={`cursor-pointer flex w-full mt-2 py-4 px-10 justify-between rounded-full text-gray-700 font-light shadow ${isSelected ? 'bg-white border-4 border-cyan' : 'bg-hover'}`}>
      <div className=''>{data.iban}</div>
      <div className=''>{data.number}</div>
      <div className=''>{data.cardNumber}</div>
      <button className='mt-1'><FaTrash/></button>
    </div>
  );
}

export default ListItemBankAccount
