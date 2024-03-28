import { useEffect } from "react";
import { commonStateStore } from "../../store/commonStore";

function ImageList() {
  const { setCurrentMenuKey } = commonStateStore();
  useEffect(() => {
      setCurrentMenuKey(2);
  },[]);

  return (
    <div>
      <h1>Image List</h1>
    </div>
  );
}

export default ImageList;
