
export default function Home() {
  return (
    <div class='text-gray-700 p-2'><br/>
      <div class='bg-cyan rounded-3xl w-11/12 mx-auto p-20'>
        <h1> Καλωσήρθατε στο e-Parent</h1><br/><br/>
        <h3>Βρές τώρα τη καλύτερη δραστηριότητα για το παιδί σου από τις αμέτρητες επιλογές</h3><br/>
        <h5>Δεν ξέρεις από που να αρχίσεις; Δες όλες τις <a href="/" id="a2">Κατηγορίες</a></h5>
      </div>
      <div class='py-10'>
        <h2>Κατηγορίες</h2>
      </div>
      <div class='bg-cyan p-20 place-content-center flex'>
        <div class='relative bottom-10'>
          <div class='bg-blue-100 py-4 w-20 h-20 rounded-full'>
            -image-
          </div>
          Αθλητισμός
        </div>
        <div class='relative top-10'>
          <div class='bg-blue-100 py-4 p-2 w-20 h-20 rounded-full'>
            -image-
          </div>
          Εκδηλώσεις
        </div>
        <div class='relative bottom-10'>
          <div class='bg-blue-100 py-4 p-2 w-20 h-20 rounded-full'>
            -image-
          </div>
          Γυμναστήρια
        </div><div class='relative top-10'>
          <div class='bg-blue-100 py-4 p-2 w-20 h-20 rounded-full'>
            -image-
          </div>
          Χώροι
        </div>
        <div class='relative bottom-10'>
          <div class='bg-blue-100 py-4 p-2 w-20 h-20 rounded-full'>
            -image-
          </div>
          Χόμπι
        </div>
      </div>
      <div class='py-20'>
        <h2>Δημοφιλέστερα</h2>
      </div>
    </div>
  );
}
