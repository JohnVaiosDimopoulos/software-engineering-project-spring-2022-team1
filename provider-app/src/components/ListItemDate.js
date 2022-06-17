const ListItemDate = props => {
  return (
    <div className='flex border-b-2 px-16 justify-between mt-2 text-gray-700 font-light'>
      <div className=''>{props.date}</div>
      <div className=''>{props.time}</div>
    </div>
  );
}

export default ListItemDate