// Import necessary modules
import React, { useState } from 'react';
import { Navbar, Card, Container, Button, Form, Modal } from 'react-bootstrap';

// Define the App component
function App() {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ]);

  const [show, setShow] = useState(false);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '' });
    handleClose();
  };

  return (
    <>
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Book List</Navbar.Brand>
        </Navbar>
        <h1>My Favorite Books</h1>
        <Button variant="primary" onClick={handleShow}>
          Add Book
        </Button>
        <Container>
          {books.map((book, index) => (
            <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  Author: {book.author}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBookTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter book title" name="title" value={newBook.title} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group controlId="formBookAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author's name" name="author" value={newBook.author} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddBook}>
              Add Book
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

// Export the App component
export default App;
