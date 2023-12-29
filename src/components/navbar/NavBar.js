import React, { useState } from "react";
import {
  Navbar,
  Container,
  Form,
  Button
} from "react-bootstrap";

function NavbarComponent({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target[0].value;
        console.log(query);
        onSearch(query);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Find Recipes</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex ml-auto" onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for recipes..."
            />
            <Button type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
