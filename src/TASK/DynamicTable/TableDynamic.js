import React from "react";

export default function TableDynamic() {
  const postObj = [
    {
      id: 1,
      name: "Tushar",
      Date: "1/2/2023",
      value: 10,
    },
    {
      id: 2,
      name: "Tushar",
      Date: "2/2/2023",
      value: 22,
    },
    {
      id: 3,
      name: "Tushar",
      Date: "3/2/2023",
      value: 40,
    },
    {
      id: 4,
      name: "Jafar",
      Date: "1/2/2023",
      value: 45,
    },
    {
      id: 5,
      name: "Jafar",
      Date: "2/2/2023",
      value: 50,
    },
    {
      id: 6,
      name: "Jafar",
      Date: "3/2/2023",
      value: 45,
    },
    {
      id: 7,
      name: "Mayank",
      Date: "1/2/2023",
      value: 50,
    },
    {
      id: 8,
      name: "Mayank",
      Date: "2/2/2023",
      value: 24,
    },
    {
      id: 9,
      name: "Mayank",
      Date: "3/2/2023",
      value: 48,
    },
    {
      id: 10,
      name: "Vishal",
      Date: "4/2/2023",
      value: 45,
    },
    {
      id: 11,
      name: "Rohit",
      Date: "3/2/2023",
      value: 55,
    },
    {
      id: 12,
      name: "Rohit",
      Date: "1/2/2023",
      value: 45,
    },
  ];

  const tempDate = [...new Set(postObj.map((elem) => elem.Date))].sort();

  const tempName = [...new Set(postObj.map((elem) => elem.name))].sort();

  console.log(tempName);

  return (
    <div>
      <h1>Dynamic Table</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            {tempDate.map((Date, i) => (
              <th key={i}>{Date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempName.map((name, i) => (
            <tr key={i}>
              <td>{name}</td>
              {tempDate.map((Date, i) => {
                const mathchingItem = postObj.find((e) => e.Date === Date && e.name === name);
               return (
                  <td key={i}>{mathchingItem ? mathchingItem.value : "-"}</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
