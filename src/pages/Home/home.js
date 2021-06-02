import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

import Main from "../../components/Main";

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    async function getProvincias() {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://www.el-tiempo.net/api/json/v2/provincias"
        );

        setError(null);
        setLoading(false);
        setProvincias(response.data.provincias);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    if (provincias.length === 0) {
      getProvincias();
    }
    console.log(provincias);
  }, [provincias]);

  return (
    <div>
      <Main>
        {loading && (
          <section className="row-cols-1 mt-3">
            <div className="col">
              <p>Loading provincias...</p>
            </div>
          </section>
        )}
        {error && !loading && (
          <section className="row-cols-1 mt-3">
            <div className="col">
              <p className="mb-3">Something went wrong...</p>
              <code>{error}</code>
            </div>
          </section>
        )}
        {provincias.length > 0 && (
          <section className="row mt-3">
            {provincias.map((provincias) => (
              <div key={provincias.id} className="col col-4">
                <div className="border p-2 mb-4">
                  {/* <code className="d-block mb-1">@{user.username}</code>
                  <Link to={`/users/${user.id}`}>User details</Link> */}
                  <p>Dentro</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </Main>
    </div>
  );
}

export default Home;
