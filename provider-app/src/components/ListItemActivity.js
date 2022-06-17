import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ListItemActivity = props => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/activity')} className='bg-white hover:bg-gray-50 w-full px-8 py-3 mx-auto rounded-3xl mt-4 text-gray-700 font-normal shadow-lg'>
      <div className='flex'>
        <FiActivity class='w-2/5 h-32 border-2 border-gray-300 rounded-3xl'/>
        <div className='mx-auto ml-4 w-8/12'>
          <div className='text-2xl mb-3'>{props.activity}</div>
          <div className='float-left'>Ημερομηνία:</div>
          <div className='float-left ml-1 font-light'>{props.date}</div><br/>
          <div className='float-left'>Κατάσταση:</div>
          <div className='float-left ml-1 font-light'>{props.state}</div><br/>
          <div className='float-left'>Υποδομή:</div>
          <div className='float-left ml-1 font-light'>{props.facility}</div>
          <div className='float-right mr-1 text-lg font-light'>{props.bookCount}</div>
          <div className='float-right mr-1 text-lg'>Κρατήσεις:</div>
        </div>
      </div>
    </button>
  );
}

export default ListItemActivity
