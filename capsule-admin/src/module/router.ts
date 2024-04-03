import DashBoard from "../pages/dash_board/DashBoard";
import ImageMain from "../pages/image/ImageMain";
import ProductMain from "../pages/product/ProductMain";

export default [
  {
    menu: '대쉬보드',
    menuKey: 1,
    path: `${process.env.REACT_APP_CONTEXT_PATH}/`,
    element: DashBoard
  },
  {
    menu: '이미지',
    menuKey: 2,
    path: `${process.env.REACT_APP_CONTEXT_PATH}/image`,
    element: ImageMain
  },
  {
    menu: '상품',
    menuKey: 3,
    path: `${process.env.REACT_APP_CONTEXT_PATH}/product`,
    element: ProductMain
  },
];
