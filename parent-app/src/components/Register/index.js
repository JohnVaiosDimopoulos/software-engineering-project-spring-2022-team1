import { Form } from 'react-bootstrap'


export default function Register() {
  return (
    <div class='bg-black bg-opacity-25 fixed top-0 bottom-0 right-0 left-0 p-10'>
      <div class='bg-cyan w-96 h-auto px-2 pt-6 mx-auto mt-10 rounded-3xl'>
        <h3>Εγγραφή</h3><br/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div class='mr-36 pb-1'>Όνομα χρήστη:</div>
            <Form.Control type="email" placeholder="Εισάγετε το email σας" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div class='mr-52 pb-1'>Email:</div>
            <Form.Control type="email" placeholder="Εισάγετε το email σας" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div class='mr-48 pb-1'>Κωδικός:</div>
            <Form.Control type="email" placeholder="Εισάγετε το email σας" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <div class='mr-48 p-1'>Επιβεβαίωση Κωδικού:</div>
          <Form.Control type="password" placeholder="Εισάγετε Κωδικό" />
          </Form.Group><br/>
          <button class='bg-button text-white h-10 w-32 rounded-lg'>
            Εγγραφή
          </button>
          <br/>
          Έχετε ήδη λογαριασμό; <a href='/login'>Συνδεθείτε</a>
        </Form>
        <br/>
      </div>
    </div>
  );
}
