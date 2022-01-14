import Head from "next/head";

export default function Home() {
  return (
    <main className="container">
      <Head>
        <title>NextJS Boiler | Bootstrap</title>
      </Head>
      <section className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="mt-3">
            Welcome to the <span className="text-info">NextJS Bootstrap </span>{" "}
            Boiler
          </h2>
          <ul className="list-group">
            <li className="list-group-item bg-light text-danger">Pages</li>
            <li className="list-group-item bg-light text-success">Links</li>
            <li className="list-group-item bg-light text-warning">
              Dynamic Routes
            </li>
            <li className="list-group-item bg-light text-secondary">
              Learn something new!
            </li>
          </ul>
        </div>
      </section>
      <div className="d-flex justify-content-center">
        <div className="card p-2 mt-4 col-md-6">
          <h4 className="card-header text-primary">Bootstrap cards</h4>
          <div className="card-body bg-info">
            <p>Check out this card.</p>
          </div>
          <div className="card-footer">Thanks to good ole Bootstrap</div>
        </div>
        <div className="card p-2 mt-4 col-md-6">
          <h4 className="card-header text-primary">Bootstrap cards</h4>
          <div className="card-body bg-info">
            <p>Check out this card.</p>
          </div>
          <div className="card-footer">Thanks to good ole Bootstrap</div>
        </div>
      </div>
      <h2 className="mt-3 text-primary text-center">Slap-a-tha-Bass</h2>
    </main>
  );
}
