import { Form } from 'react-bootstrap'


export default function Login() {
  return (
    <div class='bg-cyan w-96 h-96 px-14 pt-6 mx-auto mt-10 rounded-3xl'>
      <h3>Είσοδος</h3><br/>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div class='mr-36 pb-1'>Όνομα χρήστη:</div>
          <Form.Control type="email" placeholder="Εισάγετε το email σας" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <div class='mr-48 p-1'>Κωδικός:</div>
        <Form.Control type="password" placeholder="Εισάγετε Κωδικό" />
        </Form.Group><br/>
        <button class='bg-button text-white h-10 w-32 rounded-lg'>
          Είσοδος
        </button>
        <br/>
        Δεν έχετε λογαριασμό; <a href='/register'>Εγγραφτείτε</a>
      </Form>
    </div>
  );
}
