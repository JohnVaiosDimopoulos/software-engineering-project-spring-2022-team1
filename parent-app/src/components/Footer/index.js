import "./index.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='column'>
        <b>Επικοινωνία</b>
        <br/>Διεύθυνση:
        <br/><br/>Τηλέφωνο:
      </div>
      <div className='column'>
        <b>Η Εταιρία</b><br />
        <a href="/">Λίγα λόγια για εμάς</a><br />
        <a href="/">Συνεργάτες</a>
      </div>
      <div className='column'>
        <b>Συχνές Ερωτήσεις</b><br />
        <a href="/">Όροι Χρήσης - Δήλωση Απορρήτου<br /></a><br />
        <a href="/">Πολιτική  Cookies</a>
      </div>
    </div>
  );
}
