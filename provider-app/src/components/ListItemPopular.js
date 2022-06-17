const ListItemPopular = props => {
  return (
    <div className='bg-cyan flex mx-auto px-10 py-4 mt-2 justify-between rounded-full text-gray-700 font-normal'>
      <div className='text-lg'>{props.activity}</div>
      <div>
        <div className='inline'>Σύνολο Κρατήσεων:</div>
        <div className='ml-1 font-light inline'>{props.bookCount}</div><br/>
      </div>
      <div>
        <div className='inline'>Κέρδη:</div>
        <div className='ml-1 font-light inline'>{props.earnings}</div><br/>
      </div>
    </div>
  );
}

export default ListItemPopular
