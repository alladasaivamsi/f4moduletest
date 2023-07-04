import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, body } = product;
    return (
      <div key={id} className="body-data">
        <Link to={`/posts/${id}`}>
          <div className="link-cards">
            <div className="card">
              <div className="images">
                <img
                  src={`https://picsum.photos/200?random=${id}`}
                  alt={title}
                />
              </div>
              <div className="content">
                <div className="userId">
                  <strong>User Id : {id}</strong>
                </div>
                <div className="header">
                  <strong>Title : {title}</strong>
                </div>
                <div className="body">
                  <strong>Body : {body.slice(0, 50)}......</strong>
                </div>
                <p>
                 <strong className="readMore">Read More...</strong>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
