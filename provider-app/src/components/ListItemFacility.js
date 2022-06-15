import { useNavigate } from 'react-router-dom';

const ListItemFacility = props => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/facility')} class='bg-white hover:bg-gray-50 w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-normal shadow-lg'>
      <div class='text-2xl'>{props.facility}</div>
      <div class='float-right text-lg'>Επεξεργασία</div>
      <div class='float-left'>Οδός:</div>
      <div class='float-left ml-1 font-light'>{props.street}</div><br/>
      <div class='float-left'>Τ.Κ.:</div>
      <div class='float-left ml-1 font-light'>{props.postalCode}</div><br/>
      <div class='float-left'>Περιοχή:</div>
      <div class='float-left ml-1 font-light'>{props.location}</div>
      <div class='float-right ml-1 text-lg font-light'>{props.activityCount}</div>
      <div class='float-right text-lg'>Δραστηριότητες:</div>
    </button>
  );
}

export default ListItemFacility