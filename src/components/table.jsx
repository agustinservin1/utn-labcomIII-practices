import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const DarkExample = ({ data }) => {
  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const averageIncome = totalIncome / data.length;

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total income</td>
            <td>{totalIncome}</td>
          </tr>
        </tfoot>
      </Table>
      <p>Average Net Income: {averageIncome}</p>
    </>
  );
};

DarkExample.propTypes = {
  data: PropTypes.array,
};

export default DarkExample;
