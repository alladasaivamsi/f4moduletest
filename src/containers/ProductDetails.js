import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productsActions";
import "./ProductDetails.css";

const ProductDetails = ({ match }) => {
  const product = useSelector((state) => state.product);

  const productId = useParams();

  const dispatch = useDispatch();

  const { id, title, body } = product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${productId.id}`)
      .catch((err) => {
        console.log("Err : ", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="container">
      <div key={productId.id} className="data">
        <h1>
          <span>Details Page For Post With ID : </span>
          {id}
        </h1>
        <div>
          <div>
            <div className="image">
              <img src={`https://picsum.photos/200?random=${id}`} alt={title} />
            </div>
            <div className="content">
              <div className="idData">
                <h1>
                  <span>User Id : </span> {id}
                </h1>
              </div>
              <div className="headerData">
                <h1>
                  <span>Title : </span>
                  {title}
                </h1>
              </div>
              <div className="bodyData">
                <h1>
                  <span>Body : </span> {body}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
