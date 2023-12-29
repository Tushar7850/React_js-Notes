import React, { useState } from "react";



export default function CrudOpration() {
  const [inputs, setInputs] = useState({ name: "", email: "" });
  const [tableData, setTableData] = useState([]);

  const [editClick, setEditClick] = useState(false);

  const [editIndex, setEditIndex] = useState("");

  const handlechange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const AddData = () => {
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setInputs({ name: "", email: "" });
      setEditClick(false);
    } else {
      setTableData([...tableData, inputs]);
      setInputs({ name: "", email: "" });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
    console.log(filterData);
  };

  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      name: tempData.name,
      email: tempData.email,
    });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div>
      <h1>CRUD App</h1>

      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={handlechange}
          name="name"
          value={inputs.name}
        />
        <label>email</label>
        <input
          type="text"
          onChange={handlechange}
          name="email"
          value={inputs.email}
        />
        <button onClick={AddData}>{editClick ? "Update" : "Add"}</button>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>Index no.</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(i)}>📝</button>
              </td>
              <td>
                <button onClick={() => handleDelete(i)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
