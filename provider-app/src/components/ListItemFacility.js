import { useNavigate } from 'react-router-dom';

const ListItemFacility = props => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/facility')} class='bg-white hover:bg-gray-50 w-full px-10 py-2 mx-auto rounded-3xl mt-4 text-gray-700 font-light shadow-lg'>
      <div class='text-2xl font-normal'>{props.facility}</div>
      <div class='float-left'>Οδός: {props.street}</div><br/>
      <div class='float-left'>Τ.Κ.: {props.postalCode}</div><br/>
      <div class='float-left'>Περιοχή: {props.location}</div>
      <div class='text-xl float-right'>Δραστηριότητες: {props.activityCount}</div>
    </button>
  );
}

export default ListItemFacility