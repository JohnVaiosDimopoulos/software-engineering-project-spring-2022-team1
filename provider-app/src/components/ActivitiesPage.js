import ListItemActivity from "./ListItemActivity.js";

export default function ActivitiesPage() {
  return (
    <div class='mx-auto mt-10 px-10 w-9/12 text-gray-700 overflow-hidden font-light'>
      <label for="cars">Ταξινόμηση:</label>
      <select class='ml-1' name="sortby" id="activities">
        <option value="books">Κρατήσεις</option>
        <option value="date">Ημερομηνία</option>
        <option value="state">Κατάσταση</option>
      </select>
      <ListItemActivity />
      <ListItemActivity />
      <ListItemActivity />
      <ListItemActivity />
      <ListItemActivity />
      <ListItemActivity />
    </div>
  );
}
