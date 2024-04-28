import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";
function FetchItems() {
  let fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchFinished());
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemsActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
}

export default FetchItems;
