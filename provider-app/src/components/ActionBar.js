import { FaUserCircle, FaRegBuilding } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAdd, BiStats, BiLogOut } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function ActionBar() {
  const navigate = useNavigate();
  useEffect(() => {
    var id = (window.location.pathname === '/activity') ? '/activities' : window.location.pathname;
    var el = document.getElementById(id);
    el.style.color = '#93ABB2';
  })

  function go(path){
    navigate(path);
    for (var obj of document.getElementById('actionBar').getElementsByTagName('button')){
      obj.style.color = '';
    }
  }

  return (
    <div id='actionBar' className='bg-cyan text-center w-44 px-2 mt-2 px-2 py-10 rounded-r-3xl shadow-lg'>
      <button onClick={() => go('/profile')} className='w-full'>
        <FaUserCircle className='w-36 h-36 mx-auto rounded-full'/>
      </button>
      <div className='mt-2'>Όνομα Παρόχου</div>
      <button id='/' onClick={() => go('/')} className='mt-10 w-full hover:bg-hover pt-2'>
        <AiOutlineHome className='w-12 h-12 mx-auto'/>
        <div className='w-full border-gray-300 border-b-2 mt-2 text-gray-700'>Αρχική</div>
      </button>
      <button id='/activities' onClick={() => go('/activities')} className='mt-6 w-full hover:bg-hover pt-2'>
        <FiActivity className='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 mt-2 text-gray-700'>Δραστηριότητες</div>
      </button>
      <button id='/facilities' onClick={() => go('/facilities')} className='mt-6 w-full hover:bg-hover pt-2'>
        <FaRegBuilding className='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 mt-2 text-gray-700'>Υποδομές</div>
      </button>
      <button id='/add-activity' onClick={() => go('/add-activity')} className='mt-6 w-full hover:bg-hover pt-2'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 mt-2 text-gray-700'>Νέα Δραστηριότητα</div>
      </button>
      <button id='/add-facility' onClick={() => go('/add-facility')} className='mt-6 w-full hover:bg-hover pt-2'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 mt-2 text-gray-700'>Νέα Υποδομή</div>
      </button>
      <button id='/statistics' onClick={() => go('/statistics')} className='mt-6 w-full hover:bg-hover pt-2'>
        <BiStats className='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 px-10 mt-2 text-gray-700'>Στατιστικά</div>
      </button>
      <button id='/profile' onClick={() => go('/profile')} className='mt-6 w-full hover:bg-hover pt-2'>
        <FaUserCircle className='w-12 h-12 mx-auto'/>
        <div className='border-gray-300 border-b-2 px-2 mt-2 text-gray-700'>Προφίλ</div>
      </button>
      <button className='mt-6 w-full hover:bg-hover pt-2'>
        <BiLogOut className='w-12 h-12 mx-auto'/>
        <div className='mt-2 text-gray-700'>Αποσύνδεση</div>
      </button>
      </div>
  );
}
