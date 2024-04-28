import React from "react";
import "../css/Bag.css";
import { useSelector } from "react-redux";
function BagSummary() {
  const bagItem = useSelector((store) => store.bag);

  const items = useSelector((store) => store.items);
  console.log(items);
  let finalItems = items.filter((item) => {
    let finalItem = bagItem.indexOf(item.id);
    return finalItem >= 0;
  });
  let totalMRP = 0,
    totalDiscount = 0,
    finalPayment = 0;
  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
    finalPayment += item.current_price;
  });
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItem.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button
        className="btn btn-place-order"
        disabled={bagItem.length > 0 ? false : true}
      >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
