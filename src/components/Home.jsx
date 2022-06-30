import Hero from "./Hero";
import ItemListContainer from "./ItemListContainer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Our Books</h3>
          </div>
          <hr />
        </div>
        <div className="row g-3">
          <ItemListContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
