import { ChangeEvent, useEffect, useState } from "react";
import { commonStateStore } from "../../store/commonStore";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { produce } from "immer";
import ImageSaveAlert from "./ImageSaveAlert";

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

function ImageList() {
  const { setCurrentMenuKey, commonAjaxWrapper } = commonStateStore();
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [rows, setRows] = useState<ImageMasterType[]>([]);
  const [alertFlag, setAlertFlag] = useState<boolean>(false);

  const searchKeywordChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }

  useEffect(() => {
      setCurrentMenuKey(2);
  },[]);
  
  const columns: GridColDef<ImageMasterType>[] = [
    {
        field: 'checked',
        headerName: '선택',
        width: 70,
        editable: false,
        renderCell: (param) => {
            
            return (
                <Checkbox checked={param.row.checked}
                    onClick={() => {
                        const newRows = produce(rows, (draft => {
                            const row = draft.find(item => item.seq == param.row.seq);
                            if(row) {
                                row.checked = !row.checked;
                            }
                        }));
                        setRows(newRows);
                    }}
                />
            );
        }
    },
    {
        field: 'seq',
        headerName: '그룹 아이디',
        width: 100,
        editable: false,
        sortable: false,
        filterable: false,
    },
    {
        field: 'name',
        headerName: '그룹 명',
        width: 200,
        editable: false,
        sortable: false,
        filterable: false,
    },
    {
        field: 'useYn',
        headerName: '활성화 여부',
        width: 100,
        editable: false,
        sortable: false,
        filterable: false,
    },
    {
        field: 'fullName',
        headerName: '이미지 개수',
        description: '',
        sortable: false,
        filterable: false,
        width: 100,
        valueGetter: (value, row) => `${row.memberList.length}`,
    },
    {
        field: 'imageUpdate',
        headerName: '이미지 그룹 수정',
        width: 150,
        editable: false,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
            return (
                <button className="grid_image_thumnai_button">수정시 클릭</button>
            );
        }
    },
    {
        field: 'imageView',
        headerName: '이미지 미리보기',
        width: 150,
        editable: false,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
            return (
                <Tooltip title={
                    <div>
                        {
                            params.row.memberList.map(item => (
                                <>
                                    <img src={item.imgUrl} alt="Preview" width="100" />
                                </>
                            ))
                        }
                    </div>
                } arrow placement="right">
                    <button className="grid_image_thumnai_button">이미지 미리보기</button>
                </Tooltip>
            );
        }
    },
  ];

  const trySearchList = async() => {
    const param = {};
    const data = await commonAjaxWrapper('get', `/image?page=${1}&size=${10}`, param);
    if(data) {
        const convertRows = data.content.map((item: ImageMasterType) => {
            return {
                ...item,
                checked: false
            }
        });
        setRows(convertRows);
    }
  }

  useEffect(() => {
  }, []);

  return (
    <>
        <h2 className="subtitle">이미지 관리</h2>
        <div className="srch_wrap">
            <ul>
                <li>
                    <label>이미지 그룹 명</label>
                    <input className="inp-text" type="text" placeholder="기본입력필드" maxLength={20}
                    value={searchKeyword} onChange={searchKeywordChangehandler}/>
                </li>
            </ul>
            <div className="btnArea">
                <button className="btn-reset">Reset</button>
                <button className="btn-srch" onClick={trySearchList}>Search</button>
            </div>
        </div>
        <div className="tabArea">
            <div className="tab-content" id="tabC01">
                <div className="grid_btn_right_wrap">
                    <a className="btn-blue" onClick={() => {setAlertFlag(true);}}>추가하기</a>
                    <a className="btn-blue">삭제하기</a>
                </div>
                <div className="grid_area" style={{height: '600px'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row)=>(row.seq)}
                        // initialState={{
                        //     pagination: {
                        //         paginationModel: {
                        //         pageSize: 8,
                        //         },
                        //     },
                        // }}
                        // pageSizeOptions={[5]}
                        // disableRowSelectionOnClick
                        // checkboxSelection
                        // rowSelectionModel={selectionModel}
                        // onRowSelectionModelChange={(newSelection) => {
                        //     setSelectionModel(newSelection);
                        // }}
                    />
                </div>
            </div>
        </div>
        {
            alertFlag ? (<ImageSaveAlert setAlertFlag={setAlertFlag} masterSeq={-1}></ImageSaveAlert>) : ''
        }
    </>
  );
}

export default ImageList;
