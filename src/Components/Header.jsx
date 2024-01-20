import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets";
import { ShopContext } from "../context/ShopContext";
function Header() {
  const { totalCartItems } = useContext(ShopContext);
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#" className="text-3xl font-semibold  ">
          <img src={logo} className="w-32 xl:w-48 md:w-36 lg:w-40" />
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
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>Categories</Nav.Link>

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
          <Nav
            style={{ maxHeight: "100px" }}
            navbarScroll
            className="flex flex-col md:gap-4  font-medium mr-4"
          >
            <Nav.Link>
              <Link to="/login">Log in</Link>
            </Nav.Link>
            <Nav.Link className="relative">
              <Link to="/cart">
                <IoCartOutline size={30} />{" "}
                <div className=" flex items-center justify-center absolute top-1 left-6 text-white bg-[#d44444] w-[20px] h-[20px]  rounded-full">
                  <p className="">{totalCartItems()}</p>
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
