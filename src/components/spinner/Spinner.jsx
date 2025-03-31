import { Circles } from "react-loader-spinner";
import PropTypes from "prop-types";

import "./Spinner.scss";

const Spinner = ({ message }) => {
  return (
    <main className="spinner">
      <div className="loader-container">
        <Circles color="#00BFFF" height={80} width={200} className="loader" />
        <p className="message">{message}</p>
      </div>
    </main>
  );
};
export default Spinner;

Spinner.propTypes = {
  message: PropTypes.node.isRequired,
};

/* Where we have Spinners like;
<Audio /> <Circles /> <Rings /> etc 
to see the others, visit the node modules folder, navigate to the "react-loader-spinner" folder and open the main.js file you will see
$parcel$export(module.exports, "Audio", () => $b6f4e6a49a3349b1$export$153755f98d9861de);
with the different type of spinner being exported.
*/
