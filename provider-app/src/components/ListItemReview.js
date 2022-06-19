const ListItemReview = ({data}) => {
  return (
    <div className='bg-cyan rounded-xl px-4 py-2 mx-auto mt-2 text-gray-700 font-light shadow'>
      <div className='flex justify-between'>
        <div className='text-xl'>{data.activity}</div>
        <div className='ml-80'>Από: {data.user}</div>
      </div>
      <div className=''>{data.comment}</div>
    </div>
  );
}

export default ListItemReview