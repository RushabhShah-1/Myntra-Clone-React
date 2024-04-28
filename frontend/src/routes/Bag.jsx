import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import "../css/Bag.css";
import store from "../store";

const Bag = () => {
  const bagItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let finalItems = items.filter((item) => {
    let finalItem = bagItem.indexOf(item.id);
    return finalItem >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.length > 0 ? (
              finalItems.map((item) => <BagItem item={item}></BagItem>)
            ) : (
              <h2>No products founds</h2>
            )}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
