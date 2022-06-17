import ListItemFacility from "./ListItemFacility";

export default function FacilitiesPage() {
  return (
    <div className='mx-auto p-10 w-9/12 max-w-4xl text-gray-700 overflow-hidden font-light'>
      <label for="cars">Ταξινόμηση:</label>
      <select className='ml-1' name="sortby" id="activities">
        <option value="activities">Δραστηριότητες</option>
        <option value="location">Περιοχή</option>
      </select>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
      <ListItemFacility facility='Τίτλος Υποδομής' street='-' postalCode='-' location='-' activityCount='-'/>
    </div>
  );
}
