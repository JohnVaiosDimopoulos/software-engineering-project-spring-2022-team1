import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ListItemActivity = props => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/activity')} class='bg-white hover:bg-gray-50 w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-light shadow-lg'>
      <div class='flex'>
        <FiActivity class='w-1/3 h-32 border-2 border-gray-300 rounded-3xl'/>
        <div class='mx-auto ml-4 w-8/12'>
          <div class='text-2xl font-normal'>{props.activity}</div>
          <div class='float-left'>Ημερομηνία: {props.date}</div><br/>
          <div class='float-left'>Κατάσταση: {props.state}</div><br/>
          <div class='float-left'>Υποδομή: {props.facility}</div>
          <div class='float-right text-xl'>Κρατήσεις: {props.bookCount}</div>
        </div>
      </div>
    </button>
  );
}

export default ListItemActivity
