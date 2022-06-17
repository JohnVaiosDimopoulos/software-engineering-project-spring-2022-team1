const ListItemCritic = props => {
  return (
    <div className='bg-cyan rounded-xl px-4 py-2 mx-auto mt-2 text-gray-700 font-light shadow'>
      <div className='flex justify-between'>
        <div className='text-xl'>{props.activity}</div>
        <div className='ml-80'>Από: {props.user}</div>
      </div>
      <div className=''>{props.comment}</div>
    </div>
  );
}

export default ListItemCritic