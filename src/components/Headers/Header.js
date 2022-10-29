import React from "react";
import { Container } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #fbe72b 0, #f2db00 100%)" }}>
          <Container fluid>
            <div className="header-body">

            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
