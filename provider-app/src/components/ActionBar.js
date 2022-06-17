import { FaUserCircle, FaRegBuilding } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBookAdd, BiStats, BiLogOut } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function ActionBar() {
  const navigate = useNavigate();
  useEffect(() => {
    var el = document.getElementById(window.location.pathname);
    el.style.color = '#93ABB2';
  })

  function go(path){
    navigate(path);
    for (var obj of document.getElementById('actionBar').getElementsByTagName('button')){
      obj.style.color = '';
    }
  }

  return (
    <div id='actionBar' class='bg-cyan text-gray-700 text-center w-44 px-2 mt-2 px-2 py-10 rounded-r-3xl shadow-lg'>
      <button onClick={() => go('/profile')} class='w-full'>
        <FaUserCircle class='w-36 h-36 mx-auto rounded-full'/>
      </button>
      <div class='mt-2'>Όνομα Παρόχου</div>
      <button id='/' onClick={() => go('/')} class='mt-10 w-full hover:bg-hover pt-2'>
        <AiOutlineHome class='w-12 h-12 mx-auto'/>
        <div class='w-full border-gray-300 border-b-2 mt-2 text-gray-700'>Αρχική</div>
      </button>
      <button id='/activities' onClick={() => go('/activities')} class='mt-6 w-full hover:bg-hover pt-2'>
        <FiActivity class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2 text-gray-700'>Δραστηριότητες</div>
      </button>
      <button id='/facilities' onClick={() => go('/facilities')} class='mt-6 w-full hover:bg-hover pt-2'>
        <FaRegBuilding class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2 text-gray-700'>Υποδομές</div>
      </button>
      <button id='/add-activity' onClick={() => go('/add-activity')} class='mt-6 w-full hover:bg-hover pt-2'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2 text-gray-700'>Νέα Δραστηριότητα</div>
      </button>
      <button id='/add-facility' onClick={() => go('/add-facility')} class='mt-6 w-full hover:bg-hover pt-2'>
        <BiBookAdd class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 mt-2 text-gray-700'>Νέα Υποδομή</div>
      </button>
      <button id='/statistics' onClick={() => go('/statistics')} class='mt-6 w-full hover:bg-hover pt-2'>
        <BiStats class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 px-10 mt-2 text-gray-700'>Στατιστικά</div>
      </button>
      <button id='/profile' onClick={() => go('/profile')} class='mt-6 w-full hover:bg-hover pt-2'>
        <FaUserCircle class='w-12 h-12 mx-auto'/>
        <div class='border-gray-300 border-b-2 px-2 mt-2 text-gray-700'>Προφίλ</div>
      </button>
      <button class='mt-6 w-full hover:bg-hover pt-2'>
        <BiLogOut class='w-12 h-12 mx-auto'/>
        <div class='mt-2 text-gray-700'>Αποσύνδεση</div>
      </button>
      </div>
  );
}
