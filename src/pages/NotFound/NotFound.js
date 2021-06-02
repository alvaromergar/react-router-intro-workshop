import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container mt-3">
      <div className="row-cols-1">
        <div className="col">
          <h1>404</h1>

          <p>
            <Link to="/">Go home</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;