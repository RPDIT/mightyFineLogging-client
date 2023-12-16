import ServerTable from "../components/ServerTable";

function UaSessions() {
  return (
    <div>
      <h2>Unavailable Sessions</h2>
      <ServerTable byStatus="deforested" />
    </div>
  );
}

export default UaSessions;
