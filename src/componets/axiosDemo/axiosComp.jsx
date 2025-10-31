// for all products fetching 

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AxiosDemo = () => {
  const [productDetails, setProductDetails] = useState([]); // ✅ for array

  useEffect(() => {
    const allProductsUrl = "https://fakestoreapi.com/products";

    axios
      .get(allProductsUrl)
      .then((result) => {
        console.log("Result:", result);
        setProductDetails(result.data); // ✅ set all products (array)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
       document.querySelector("#username").innerHTML = "PRASAD";
  }, []); // ✅ run once on mount

  return (
    <div className="container mt-5">
      <div>
        hello my name is <span id="username"></span>
      </div>

      <h2 className="text-center text-primary mb-4">
        Product List (All Products)
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price ($)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((details, index) => (
              <tr key={details.id || index}>
                <td className="text-center">{details.id}</td>
                <td className="text-center">
                  <img
                    src={details.image}
                    alt={details.title}
                    width="80"
                    className="rounded shadow-sm"
                  />
                </td>
                <td>{details.title}</td>
                <td>${details.price}</td>
                <td>{details.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AxiosDemo;




// for single product fetch
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AxiosDemo = () => {
//   const [productDetails, setProductDetails] = useState({}); // ✅ for single object
//   const [selectedProduct, setSelectedProduct] = useState("1");
//   const username = "Prasad.."; // ✅ simple variable

//   useEffect(() => {
//     const singleProductUrl = "https://fakestoreapi.com/products/" + selectedProduct;

//     axios
//       .get(singleProductUrl)
//       .then((result) => {
//         console.log("Result:", result);
//         setProductDetails(result.data); // ✅ single object
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [selectedProduct]); // ✅ refetch when input changes

//   const setCountValue = (event) => {
//     setSelectedProduct(event.target.value);
//   };

//   return (
//     <div className="container mt-5">
//       <div>
//         hello my name is <span>{username}</span>
//       </div>

//       <h2 className="text-center text-primary mb-4">Product Details (Single Product)</h2>

//       <input
//         type="text"
//         value={selectedProduct}
//         onChange={setCountValue}
//         className="form-control mb-4"
//         placeholder="Enter product ID (1–20)"
//       />

//       <div className="table-responsive">
//         <table className="table table-bordered table-striped table-hover align-middle">
//           <thead className="table-dark text-center">
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price ($)</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* ✅ No .map() — render single product */}
//             {productDetails && productDetails.id && (
//               <tr>
//                 <td className="text-center">{productDetails.id}</td>
//                 <td className="text-center">
//                   <img
//                     src={productDetails.image}
//                     alt={productDetails.title}
//                     width="80"
//                     className="rounded shadow-sm"
//                   />
//                 </td>
//                 <td>{productDetails.title}</td>
//                 <td>${productDetails.price}</td>
//                 <td>{productDetails.description}</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AxiosDemo;










// import React, { useState } from "react";
// import axios from 'axios'
// import "bootstrap/dist/css/bootstrap.min.css";

// const AxiosDemo = () => {
//   const [productDetails, setProductDetails] = useState([]);


//   //fetch('https://fakestoreapi.com/products').then(response.json()).then((result)=>{
//   // console.log('result') ;
//   // console.log(result)
//   // })


// axios.get("https://fakestoreapi.com/products")
//   .then((result) => {
//     console.log("Result:");
//     console.log(result);
//     setProductDetails(result.data); // ✅ print data from API
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error); // ✅ handle errors properly
//   });
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center text-primary mb-4">
//         Product List (Hardcoded Data)
//       </h2>

//       <div className="table-responsive">
//         <table className="table table-bordered table-striped table-hover align-middle">
//           <thead className="table-yellow text-center">
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price ($)</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {productDetails.map((details, index) => (
//               <tr key={index}>
//                 <td className="text-center">{index + 1}</td>
//                 <td className="text-center">
//                   <img
//                     src={details.image}
//                     alt={details.title}
//                     width="80"
//                     className="rounded shadow-sm"
//                   />
//                 </td>
//                 <td>{details.title}</td>
//                 <td>${details.price}</td>
//                 <td>{details.description}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AxiosDemo;
