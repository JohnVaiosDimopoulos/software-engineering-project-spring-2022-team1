import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function ListItemActivity() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/activity')} class='bg-cyan w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-light shadow-lg'>
      <div class='flex'>
        <FiActivity class='w-1/3 h-32 border-2 border-white rounded-xl'/>
        <div class='mx-auto ml-4 w-8/12'>
          <div class='text-2xl'>Τίτλος Δραστηριότητας</div>
          <div class='float-left'>Ημερομηνία:</div><br/>
          <div class='float-left'>Κατάσταση:</div><br/>
          <div class='float-left'>Υποδομή:</div>
          <div class='float-right text-xl'>Κρατήσεις:</div>
        </div>
      </div>
    </button>
  );
}
