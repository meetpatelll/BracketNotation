import "./styles.css";

export default function App() {
  const arry1 = [
    { "id-key": "1", "name-id": "jay" },
    { "id-key": "2", "name-id": "meet" }
  ];
  const arry2 = [
    { "id-key": 1, "name-id": "meet" },
    { "id-key": 2, "name-id": "meet" },
    { "id-key": 1, "name-id": "meet" },
    { "id-key": 2, "name-id": "meet" }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {arry2.map((key1) => {
        console.log(
          arry1.find((key) => key["id-key"] === key1["id-key"].toString())
        );

        return (
          <>
            <tr key={Math.random(10)}>
              <td>nhfio</td>
              <td>
                {
                  arry1.find(
                    (key) => key["id-key"] === key1["id-key"].toString()
                  )["name-id"]
                }
              </td>
            </tr>
          </>
        );
      })}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
