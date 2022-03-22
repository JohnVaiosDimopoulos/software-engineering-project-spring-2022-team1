import './index.css'
import SearchInput from '../SearchInput/index.js'
import Cards from '../Cards/index.js'

export default function Home() {
  return (
    <div><br/>
      <div className="advertisment">
        <h1> Καλωσήρθατε στο e-Parent</h1><br/><br/><br/>
        <h3>Βρές τώρα τη καλύτερη δραστηριότητα για το παιδί σου από τις αμέτρητες επιλογές</h3>
        <br/><br/><SearchInput/><br/>
        <h5>Δεν ξέρεις από που να αρχίσεις; Δες όλες τις <a href="/" id="a2">Κατηγορίες</a></h5>
      </div>
      <div className="title">
        <h3>Κατηγορίες</h3>
      </div>
      <Cards/>
    </div>
  );
}
