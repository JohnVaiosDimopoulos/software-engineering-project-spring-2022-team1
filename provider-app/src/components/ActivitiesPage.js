import ListItemActivity from "./ListItemActivity.js";

export default function ActivitiesPage() {
  return (
    <div className='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <label for="cars">Ταξινόμηση:</label>
      <select className='ml-1' name="sortby" id="activities">
        <option value="books">Κρατήσεις</option>
        <option value="date">Ημερομηνία</option>
        <option value="state">Κατάσταση</option>
      </select>
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
        <ListItemActivity activity='Τίτλος Δραστηριότητας' date='-' state='-' facility='-' bookCount='-' />
    </div>
  );
}
