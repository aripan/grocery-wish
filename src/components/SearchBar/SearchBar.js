import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
