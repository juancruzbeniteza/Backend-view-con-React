import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then(({ data }) => {
        setProducts(data.response.docs);
        setNext(data.response.nextPage);
        setPrev(data.response.prevPage);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/real">
                Real
              </a>
              <a className="nav-link" href="/products/form" id="formButton">
                Form
              </a>
              <a
                className="nav-link"
                href="/sessions/register"
                id="registerButton"
              >
                Register
              </a>
              <a className="nav-link" href="/sessions/login" id="loginButton">
                Login
              </a>
              <a className="nav-link" href="/orders" id="ordersButton">
                Orders
              </a>
              <span className="btn btn-danger fs-5 m-1" id="signout">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <h1 className="text-center pt-5 pb-3">
          Ecommerce de Tecnologia
        </h1>
        <img
          width="100%"
          src="https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png"
        />

        <section className=" py-3 position-relative d-flex justify-content-center align-items-center">
          <input
            id="text"
            type="text"
            className="p-2 text-center"
            placeholder="search..."
            /></section>
        <section>
          <article
            className="d-flex flex-wrap justify-content-center"
            id="products"
          >
            {products.map((each) => (
              <div key={each._id} className="card m-2" style={{ width: 250 }}>
                <img
                  src={each.photo}
                  className="card-img-top object-fit-cover"
                  alt={each.title}
                />
                <h5 className="p-2 text-center card-title">{each.title}</h5>
              </div>
            ))}
          </article>
        </section>

  
  { <span className="w-100 d-flex justify-content-center">
    {prev &&
      <a
        className="btn btn-primary fs-5 m-4 mt-0"
        href="/?title={{filter}}&page={{prev}}"
      >PREV</a>
    }
    {next &&
      <a
        className="btn btn-primary fs-5 m-4 mt-0"
        href="/?title={{filter}}&page={{next}}"
      >NEXT</a>
     } 
  </span>  }

      </main>
    </>
  );
}

export default App;

