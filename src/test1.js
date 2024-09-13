import React from "react";
import ReactDOM from "react-dom/client";

// // JSX is transpiled before going to the JS engine - This is done by babel(package inside parcel)
// const Title = () => {
//   return <h1 id="heading">Namaste React in jsx!</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div>
//       <Title />
//       {/* {Title()} */}
//       {/* <Title></Title> */}
//       <p>This is a functional component.</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
