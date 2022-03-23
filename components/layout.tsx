import React from "react";

import Link from "next/link";
import { Nav } from "react-bootstrap";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav
      // activeKey="/home"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/platforms">Platforms</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/games">Games</Nav.Link>
        </Nav.Item>
      </Nav>
      {children}
    </>
  );
};
export default Layout;
