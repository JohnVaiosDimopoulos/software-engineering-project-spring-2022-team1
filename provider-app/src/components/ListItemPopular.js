const ListItemPopular = ({data}) => {
  return (
    <div className='bg-cyan flex mx-auto px-10 py-4 mt-2 justify-between rounded-full text-gray-700 font-normal'>
      <div className='text-lg'>{data.title}</div>
      <div>
        <div className='inline'>Σύνολο Κρατήσεων:</div>
        <div className='ml-1 font-light inline'>{data.bookCount}</div><br/>
      </div>
      <div>
        <div className='inline'>Κέρδη:</div>
        <div className='ml-1 font-light inline'>{data.earnings}</div><br/>
      </div>
    </div>
  );
}

export default ListItemPopular
