import data from "../../data.json";

export default function BoundaryCollection() {
  const boundaries = data.fleet_management.boundary_collection;

  return (
    <>
      <h1>Boundary Collection</h1>
      <section>
        <h2>Boundaries</h2>
        <ul>
          {boundaries.map((boundary) => (
            <li key={boundary.driver}>{`${
              boundary.paid ? boundary.payment_method : "Not Paid"
            } - ${boundary.driver}`}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
