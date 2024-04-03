import { useEffect } from "react";
import { commonStateStore } from "../../store/commonStore";


function ProductMain() {
    const { setCurrentMenuKey, commonAjaxWrapper } = commonStateStore();

    useEffect(() => {
        setCurrentMenuKey(3);
    },[]);
    return (
        <>
        </>
    );
}

export default ProductMain;
