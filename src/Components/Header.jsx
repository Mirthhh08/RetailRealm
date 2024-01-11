import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets";
function Header() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#" className="text-3xl font-semibold  ">
          <img src={logo} className="w-48" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="flex flex-col md:gap-4 mr-auto ml-auto font-medium "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/">Home</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>Categories</Nav.Link>
            <Nav.Link>
              <Link to="/login">Sign Up</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart">
                <IoCartOutline size={28} />
              </Link>{" "}
            </Nav.Link>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div className=" border-gray-500 border-2 rounded-md p-1 focus:border-4 ">
            <form className="flex gap-2 items-center px-1">
              <input
                className="w-100 focus:outline-none "
                placeholder="Here you go!!"
                name="email"
                type="email"
              />
              <div className="cursor-pointer ">
                <IoSearchOutline size={28} />
              </div>
            </form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
