import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"
import "./style.css";

export default function Index() {
  return (
    <section className="site-nav">
      <div className="nav-container">
        <nav className="nav-menu">
          <a href="" className="logo top-link">
            Logo
          </a>
          <div>
            <Link to="/">
              <Button>
                <span className="top-link active">Home</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button>
                <span className="top-link">Profile</span>
              </Button>
            </Link>

            <Link to="/work-experiance">
              <Button>
                <span className="top-link">Work Experiance</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button>
                <span className="top-link">Contact</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}
