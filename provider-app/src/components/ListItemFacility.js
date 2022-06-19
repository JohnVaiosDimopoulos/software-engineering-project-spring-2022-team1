import { useNavigate } from 'react-router-dom';

const ListItemFacility = ({data}) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/facility')} className='bg-white hover:bg-gray-50 w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-normal shadow-lg'>
      <div className='text-2xl'>{data.title}</div>
      <div className='float-right text-lg'>Επεξεργασία</div>
      <div className='float-left'>Οδός:</div>
      <div className='float-left ml-1 font-light'>{data.street}</div><br/>
      <div className='float-left'>Τ.Κ.:</div>
      <div className='float-left ml-1 font-light'>{data.postalCode}</div><br/>
      <div className='float-left'>Περιοχή:</div>
      <div className='float-left ml-1 font-light'>{data.location}</div>
      <div className='float-right ml-1 text-lg font-light'>{data.activityCount}</div>
      <div className='float-right text-lg'>Δραστηριότητες:</div>
    </button>
  );
}

export default ListItemFacility