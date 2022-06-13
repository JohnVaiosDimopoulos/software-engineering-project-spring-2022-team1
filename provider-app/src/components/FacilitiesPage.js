import ListItemFacility from "./ListItemFacility";

export default function FacilitiesPage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden font-light'>
      <label for="cars">Ταξινόμηση:</label>
      <select class='ml-1' name="sortby" id="activities">
        <option value="activities">Δραστηριότητες</option>
        <option value="location">Περιοχή</option>
      </select>
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
      <ListItemFacility />
    </div>
  );
}