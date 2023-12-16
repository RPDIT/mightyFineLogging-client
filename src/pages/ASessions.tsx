import ServerTable from "../components/ServerTable";

function ASessions() {
  return (
    <div>
      <h2>Available Sessions</h2>
      <ServerTable byStatus="forest" />
    </div>
  );
}

export default ASessions;
