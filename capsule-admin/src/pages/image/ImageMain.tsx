import { ChangeEvent, useEffect, useState } from "react";
import { commonStateStore } from "../../store/commonStore";
import { DataGrid, GridColDef, GridEditBooleanCell } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function ImageList() {
  const { setCurrentMenuKey, commonAjaxWrapper } = commonStateStore();
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const searchKeywordChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }

  useEffect(() => {
      setCurrentMenuKey(2);
  },[]);
  
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'lastName',
        headerName: '그룹 아이디',
        width: 200,
        editable: false,
        sortable: false,
        filterable: false,
        renderEditCell: GridEditBooleanCell
    },
    {
        field: 'fullName',
        headerName: '이미지 개수',
        description: '',
        sortable: false,
        filterable: false,
        width: 100,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
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
                        <img src={params.value} alt="Preview" width="100" />
                    </div>
                } arrow placement="top">
                    <button className="grid_image_thumnai_button">이미지 미리보기</button>
                </Tooltip>
            );
        }
    },
  ];

  const [rows, setRows] = useState([
    { id: '1herh', lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: '2gfj', lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: '3ncv', lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: '4sd', lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: '5hdf', lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: '6her', lastName: 'Melisandre', firstName: null, age: 150 },
    { id: '7jkty', lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: '8kkk', lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: '9fscgsdg', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]);

  const trySearchList = async() => {
    const param = {

    };
    const data = await commonAjaxWrapper('get', '/image', param);
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
                    <a className="btn-blue">추가하기</a>
                    <a className="btn-blue">삭제하기</a>
                </div>
                <div className="grid_area" style={{height: '600px'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        // getRowId={(row)=>(row.id)}
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
    </>
  );
}

export default ImageList;
