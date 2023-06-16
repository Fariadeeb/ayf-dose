import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function BreadCrumb() {
  return (
    <>
      <Breadcrumb className="mt-4">
        <Breadcrumb.Item>
          <Link to="/" className="text-decoration-none">
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>News</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
export default BreadCrumb;
