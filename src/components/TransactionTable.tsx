import { useEffect, useState } from "react";

interface Transaction {
  company: string;
  DOT: Date;
  transType: string;
  dolValue: number;
  created: Date;
  owner: string;
  purpose?: string;
}
interface User {
  email_address: string;
  password: string;
  created?: string;
  edited?: string;
  _id: string;
  impoundment?: object;
}
interface Props {
  userObj: User;
}

function TransactionTable({ userObj }: Props) {
  let [transactionData, setTransactionData] = useState<Array<Transaction>>([]);

  useEffect(() => {
    if (transactionData.length == 0) {
      fetch("http://localhost:9000/the-dam/transaction/" + userObj._id, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((thisJson: Array<Transaction>) => {
          setTransactionData(thisJson);
        });
    }
    if (!userObj.impoundment) {
      fetch("http://localhost:9000/the-dam/creation/" + userObj._id, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((thisJson) => {
          console.log("impoundment created");
        });
    }
  });

  return (
    <>
      {transactionData && (
        <>
          <table className="table">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Company</th>
              <th scope="col">DOT</th>
              <th scope="col">Value</th>
              <th scope="col">Transaction Type</th>
            </thead>
            <tbody>
              {transactionData.map((transaction, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{transaction.company}</td>
                  <td>{transaction.DOT.toString()}</td>
                  <td>{transaction.dolValue}</td>
                  <td>{transaction.transType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default TransactionTable;
