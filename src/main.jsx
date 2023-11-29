// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating";

// function Test() {
//   const [movRat, setMovRat] = useState(0);

//   return (
//     <div>
//       <StarRating color="purple" maxRating={10} onSetRating={setMovRat} />

//       <p>External output is {movRat}</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
    />
    <StarRating color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
