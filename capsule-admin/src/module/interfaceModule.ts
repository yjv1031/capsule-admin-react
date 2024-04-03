export interface userLoginInputInterface {
  loginId: string,
  loginPwd: string
}

export interface ImageMasterType {
  seq: number,
  name: string,
  useYn: string,
  checked: boolean,
  memberList: ImageMemberType[]
};

export interface ImageMemberType {
  seq: number,
  sortOrder: number,
  imgUrl: string
}

export interface ImageSaveAlertPropsType {
  masterSeq: number
  setAlertFlag: (param: boolean) => void
  trySearchList: () => void
}

export interface ImageNewMemberType {
  seq: number,
  sortOrder: number | null,
  file: File,
  imgUrl: string
}

export interface ImageCardPropsType {
  seq: number,
  sortOrder: number | null,
  imgUrl: string,
  handleImageCardSortOrderChange: (seq: number, sortOrder: number | null) => void,
  onDelete: (seq: number) => void
}

export interface ImageCardParameterType {
  seq: number,
  sortOrder: number | null
}

export interface ImageCardSaveParameterType {
  seq: number,
  name: string,
  updateCard: ImageCardParameterType[],
  createCard: ImageCardParameterType[],
}

export interface ProductInfoType {
  seq: number,
  name: string,
  useYn: string,
  gradeNum: number,
  amount: number,
  checked: boolean,
  imageList: ImageMemberType[]
};

export interface ProductSaveAlertPropsType {
  masterSeq: number
  setAlertFlag: (param: boolean) => void
  trySearchList: () => void
}

export interface ProductSaveStateType {
  seq: number | null,
  name: string,
  gradeNum: number,
  amount: number,
  imageSeq: number | null,
  imageList: ImageMemberType[]
};

export interface ProductSaveImageParamType {
  imageSeq: number | null,
  imageList: ImageMemberType[]
};

export interface ProductSaveImageGridParamType {
  setProductSaveParamImageSeq: (imageSeq: number | null) => void,
  setProductSaveParamImageList: (imageList: ImageMemberType[]) => void
};

export interface ProductSaveApiParameterType {
  seq: number | null,
  name: string,
  gradeNum: number,
  amount: number,
  imageSeq: number | null,
};
