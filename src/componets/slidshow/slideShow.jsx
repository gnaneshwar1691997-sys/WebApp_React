import React, { useEffect, useState, useRef } from "react";
import "./slideShow.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SlideShowComp = () => {
  const [curntProduct, setCurntProduct] = useState({});
  const [productId, setProductId] = useState(1);
  const playSlideShowRef = useRef(null);

  // ✅ Fetch product by ID
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setCurntProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  // ✅ Prev / Next buttons
  const handlePrevNextClick = (text) => {
    if (text === "prev" && productId > 1) {
      setProductId(productId - 1);
    } else if (text === "next" && productId < 20) {
      setProductId(productId + 1);
    }
  };

  // ✅ Range slider
  const handleRangeBarChange = (event) => {
    setProductId(Number(event.target.value));
  };

  // ✅ Play / Pause slideshow
  const handlePlayAndPauseClick = (type) => {
    if (type === "play") {
      // Clear existing interval before starting new one
      clearInterval(playSlideShowRef.current);

      playSlideShowRef.current = setInterval(() => {
        setProductId((prevId) => (prevId < 20 ? prevId + 1 : 1));
      }, 2000);
    } else {
      clearInterval(playSlideShowRef.current);
    }
  };

  // ✅ Cleanup when component unmounts
  useEffect(() => {
    return () => clearInterval(playSlideShowRef.current);
  }, []);

  return (
    <>
    <div>{productId}</div>
      <div className="slideShowContainer container py-3">
        <div className="row align-items-center mb-3">
          <div
            className="col-2 text-center"
            onClick={() => handlePrevNextClick("prev")}
          >
            <i className="bi bi-arrow-left fs-3"></i>
          </div>
          <div className="col-8 text-center productTitle fw-bold">
            {curntProduct.title || "Loading product..."}
          </div>
          <div
            className="col-2 text-center"
            onClick={() => handlePrevNextClick("next")}
          >
            <i className="bi bi-arrow-right fs-3"></i>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 text-center">
            <img
              src={curntProduct.image}
              alt={curntProduct.title}
              height="300px"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 text-center">
            <h3>Price: ${curntProduct.price}</h3>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 text-center">
            <input
              value={productId}
              type="range"
              className="form-range"
              min="1"
              max="20"
              step="1"
              onChange={handleRangeBarChange}
            />
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-12 text-center">
            <button
              className="btn btn-primary me-2"
              onClick={() => handlePlayAndPauseClick("play")}
            >
              <i className="bi bi-play-circle-fill fs-4"></i>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handlePlayAndPauseClick("pause")}
            >
              <i className="bi bi-pause-circle-fill fs-4"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideShowComp;
