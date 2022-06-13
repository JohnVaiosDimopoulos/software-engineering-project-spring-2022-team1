const ListItemDate = props => {
  return (
    <div class='flex border-b-2 px-16 justify-between mt-2 text-gray-700 font-light'>
      <div class=''>{props.date}</div>
      <div class=''>{props.time}</div>
    </div>
  );
}

export default ListItemDate