import './index.css'

export default function SearchInput() {
  return (
    <form id="search">
      <input type="text" name="search" class="search-box" placeholder="Αναζήτησε την δραστηριότητα που θες πχ. Κολυμβητήριο, Γυμναστήριο, Παιδότοποι" />
      <input type="submit" class="search-submit" value="Src" />
    </form>
  );
}