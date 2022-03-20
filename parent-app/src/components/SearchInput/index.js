import './index.css'
import { Form } from 'react-bootstrap'

export default function SearchInput() {
  return (
    <Form id="search">
      <Form.Control type="search" placeholder="Αναζήτηση..." />
    </Form>
  );
}