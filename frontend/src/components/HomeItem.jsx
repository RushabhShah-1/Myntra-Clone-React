import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import store from "../store";
import { MdDelete } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";

function HomeItem({ item }) {
  const bagItem = useSelector((store) => store.bag);
  let itemAdded = bagItem.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemAdded ? (
        <button
          className="btn-delete-bag"
          onClick={() => dispatch(bagActions.removeFromBag(item.id))}
        >
          <MdDelete /> Remove
        </button>
      ) : (
        <button
          className="btn-add-bag"
          onClick={() => dispatch(bagActions.addToBag(item.id))}
        >
          <MdAddCircleOutline /> Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;
