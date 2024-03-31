import { ChangeEvent, useEffect, useState } from "react";
import { commonStateStore } from "../../store/commonStore";
import { DataGrid, GridColDef, GridEditBooleanCell } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { produce } from "immer";
import AlertLayout from "../../component/layout/AlertLayout";

interface ImageMasterType {
    seq: number,
    name: string,
    useYn: string,
    checked: boolean,
    memberList: ImageMemberType[]
};

interface ImageMemberType {
    seq: number,
    order: number,
    imgUrl: string
}

interface ImageSaveAlertPropsType {
    masterSeq: number
    setAlertFlag: (param: boolean) => void
}

function ImageSaveAlert(props: ImageSaveAlertPropsType) {
  const { commonAjaxWrapper } = commonStateStore();
  const setAlertFlag = props.setAlertFlag;
  const masterSeq = props.masterSeq;

  useEffect(() => {
  }, []);

  return (
    <AlertLayout>
        <div className="popup_wrap">
            <div className="popup_header">팝업 테스트</div>
            <div className="popup_contents">
                <div className="srch_wrap">
                    <ul>
                        <li>
                            <label>Option Title01</label>
                            <input className="inp-text" type="text" placeholder="기본입력필드" value=""/>
                        </li>
                        <li>
                            <label>Option Title03</label>
                            <input className="inp-text" type="text" placeholder="기본입력필드" value=""/>
                        </li>
                        
                        
                    </ul>
                    <div className="btnArea">
                        <button className="btn-srch">그룹 저장</button>
                    </div>
                </div>
                <div className="grid_btn_right_wrap">
                    <a className="btn-blue">추가</a>
                    <a className="btn-blue">삭제</a>
                    <a className="btn-blue">조회</a>
                    <a className="btn-blue">Button</a>
                </div>
                <div className="popup_grid_area">
                    Grid Area
                </div>
            </div>
            <div className="popup_footer">
                <div className="btn_wrap">
                    {/* <a className="btn-blue">Save</a> */}
                    <a className="btn-gray" onClick={() => { setAlertFlag(false); }}>Close</a>
                </div>
            </div>
        </div>
    </AlertLayout>
  );
}

export default ImageSaveAlert;
