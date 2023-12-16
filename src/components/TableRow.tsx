interface Props {
  sessions: Array<Session>;
}

interface Session {
  active?: boolean;
  edited?: string;
  alias?: string;
  __v?: number;
  _id: string;
}

function TableRow({ sessions }: Props) {
  // console.log("creating rows", sessions);
  return (
    <>
      {sessions.map((session, index) => (
        <tr key={session._id}>
          <td>{index}</td>
          <td>{session._id}</td>
          {session.active === false ? (
            <td>{session.active.toString()}</td>
          ) : (
            <td>Unknown</td>
          )}
          <td>{session.edited}</td>
        </tr>
      ))}
    </>
  );
}

export default TableRow;
