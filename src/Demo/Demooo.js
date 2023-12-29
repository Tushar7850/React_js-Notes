import React from "react";

export default function Demooooo() {
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
      name: "vishal",
      Date: "4/2/2023",
      value: 45,
    },
  ];

  const uniqueDates = [...new Set(postObj.map((elem) => elem.Date))];
  console.log(uniqueDates);
  const uniqueNames = [...new Set(postObj.map((elem) => elem.name))].sort();
console.log(uniqueNames);
  return (
    <div>
      <h1>Dynamic Table</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            {uniqueDates.map((date, i) => (
              <th key={i}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {uniqueNames.map((name, i) => (
            <tr key={i}>
              <td>{name}</td>
              {uniqueDates.map((date, j) => {
                const matchingItem = postObj.find(
                  (item) => item.name === name && item.Date === date
                );

                return (
                  <td key={j}>{matchingItem ? matchingItem.value : "-"}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
