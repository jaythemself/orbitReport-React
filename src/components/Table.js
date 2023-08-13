const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type Of Satellite
          </th>
          <th>
            Launch Date
          </th>
          <th>
            Status
          </th>
        </tr>
        </thead>
        <tbody>
          {sat.map(data => {
            return (
              <tr key = {data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational === true ? "Active" : "Inactive"}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
  );
};

//okay good to know, cannot put comments inside the table lol
//tbody note to self: idk why my comment isn't green now but?? okay use map func to render data based on selected button iterate through sat using map using callbacks id and data map func will return data to each row in the table
//status button (4, operational): for the status, create conditional that will tell a user if satellite is active/inactive based on operational value

export default Table;