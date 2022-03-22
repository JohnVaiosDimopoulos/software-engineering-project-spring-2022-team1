import './index.css'
import { Card, CardGroup } from 'react-bootstrap'

export default function Cards() {
  return (
    <div className="card-list">
      <CardGroup id="card-group">
        <Card id="card">
          <Card.Img variant="top" id="card-image" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Αθλητισμός</Card.Title>
            <Card.Text>
              <a href="/">Ποδόσφαιρο</a><br/>
              <a href="/">Μπάσκετ</a><br/>
              <a href="/">Κολύμβηση</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id="card">
          <Card.Img variant="top" id="card-image" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Παιδότοποι</Card.Title>
            <Card.Text>
              <a href="/">Ποδόσφαιρο</a><br/>
              <a href="/">Μπάσκετ</a><br/>
              <a href="/">Κολύμβηση</a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id="card">
          <Card.Img variant="top" id="card-image" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Εκδηλώσεις</Card.Title>
            <Card.Text>
              <a href="/">Ποδόσφαιρο</a><br/>
              <a href="/">Μπάσκετ</a><br/>
              <a href="/">Κολύμβηση</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
