import data from "../../data.json";

export default function FleetManagement() {
  const jeepneys = data.fleet_management.vehicles.jeepneys;
  const tricycles = data.fleet_management.vehicles.tricycles;

  return (
    <>
      <h1>Fleet Management</h1>
      <section>
        <h2>Jeepneys</h2>
        <ul>
          {jeepneys.map((jeepney) => (
            <li key={jeepney.plate_number}>{jeepney.plate_number}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Tricycles</h2>
        <ul>
          {tricycles.map((tricycle) => (
            <li key={tricycle.plate_number}>{tricycle.plate_number}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
