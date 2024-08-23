import { netIncomes } from "../data/data.js";
import DarkExample from "./table.jsx";
import PropTypes from "prop-types";

const App = () => {
  return <DarkExample data={netIncomes} />;
};

App.propTypes = {
  data: PropTypes.array,
};

export default App;
