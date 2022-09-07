import React from "react";

export default function PageHeader(props) {
  const [search, setSearch] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.search(search);
  };

  return (
    <nav className="navbar navbar-light bg-color">
      <div className="container-fluid row w-100">
        <div className="col-sm-3">
          <a className="navbar-brand px-5" href="#/">
            <img
              src={process.env.PUBLIC_URL + "/images/wetube.png"}
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt=""
            ></img>
          </a>
        </div>

        <div className="col-sm-4 col-md-6">
          <form className="form-inline pt-2" onSubmit={(e) => onSubmit(e)}>
            <div className="flex d-flex">
              <input
                className="form-control w-100 me-1"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search"
              ></input>
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-end col-sm-3">
          <div className="pt-2 me-3">
            <i className="bi bi-three-dots-vertical text-primary fs-4"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
