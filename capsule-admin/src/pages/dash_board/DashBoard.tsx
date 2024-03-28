import { useEffect } from "react";
import { commonStateStore } from "../../store/commonStore";

function DashBoard() {
    const { setCurrentMenuKey } = commonStateStore();
    useEffect(() => {
        setCurrentMenuKey(1);
    },[]);
    return (
        <>
            <h2 className="subtitle">대시보드</h2>
            <div className="srch_wrap">
                <ul>
                    <li>
                        <label>Option Title01</label>
                        <input className="inp-text" type="text" placeholder="기본입력필드" value=""/>
                    </li>
                    <li>
                        <label>Option Title02</label>
                        <div className="type-selectbox" style={{width: '95%'}}>
                            <select className="inp-selectbox">
                                <option>Option01</option>
                                <option>Option02</option>
                                <option>Option03</option>
                                <option>Option04</option>
                                <option>Option05</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <label>Option Title03</label>
                        <input className="inp-text" type="text" placeholder="기본입력필드" value=""/>
                    </li>
                </ul>
                <div className="btnArea">
                    <button className="btn-reset">Reset</button>
                    <button className="btn-srch">Search</button>
                </div>
            </div>
            <div className="tabArea">
                <div className="tab-content" id="tabC01">
                    <div className="grid_btn_right_wrap">
                        <a className="btn-blue">추가하기</a>
                        <a className="btn-blue">삭제하기</a>
                        <a className="btn-blue">조회하기</a>
                        <a className="btn-blue">Button</a>
                    </div>
                    <div className="grid_area" style={{height: '600px'}}>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;
