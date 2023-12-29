import React from "react";

class ClassTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        firstname: "",
        middlename: "",
        lastname: "",
      },
      info: [],
    };
  }

  Handlechange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  };

  SumbitData = () => {
    console.log(this.state.data);

    this.setState({
      info: [...this.state.info,{...this.state.data}],
      data: {
        firstname: "",
        middlename: "",
        lastname: "",
      }

    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="FirstName"
          onChange={this.Handlechange}
          value={this.state.data.firstname}
        />
        <br />
        <input
          type="text"
          name="middlename"
          placeholder="MiddleName"
          onChange={this.Handlechange}
          value={this.state.data.middlename}
        />
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="LastName"
          onChange={this.Handlechange}
          value={this.state.data.lastname}
        />
        <br />
        <button type="button" onClick={this.SumbitData}>
          Submit
        </button>


        <table border={"1px"}>
          <thead>
            <tr>
              <th>index no.</th>
              <th>firstname</th>
              <th>middlename</th>
              <th>LastName</th>
            </tr>
          </thead>


    <tbody>
            {this.state.info.map((item, index) => (
                
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.middlename}</td>
                  <td>{item.lastname}</td>
                </tr>
            
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default ClassTable;
