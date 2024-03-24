import axios, { AxiosResponse } from "axios";

const BACK_END_URL = process.env.REACT_APP_BACK_END_URL;

const commonAxios = async (
  method: string, url: string, data?: any, 
  setIsLoadingState?: (param: boolean) => void,
  setIsLoginState?: (param: boolean) => void) => {
  const headers: any = {};
  
  //퍼블릭한 서비스가 아닌경우 토큰포함
  if(!url.startsWith('/public/')) {
    const adminTokenStr = localStorage.getItem('adminToken');
    if(adminTokenStr) {
      const adminToken = JSON.parse(adminTokenStr);
      if(adminToken && adminToken.accessToken) {
        headers['Authorization'] = `Bearer ${adminToken.accessToken}`;
      }
    }
  }

  if(setIsLoadingState) {
    setIsLoadingState(true);
  }

  try {
    const res = await axios({
      method: method,
      url: `${BACK_END_URL}${url}`,
      data: data,
      headers: headers
    });

    if (res.data.status.code === 0) {
      alert(res.data.status.message);
      return null;
    }

    return res.data.data;
  } catch (error: any) {
    //엑세스토큰 재갱신
    if (!url.startsWith('/public/') && error.response && (error.response.status === 401 || error.response.status === 403)) {
      const adminTokenStr = localStorage.getItem('adminToken');
      if(adminTokenStr) {
        const adminToken = JSON.parse(adminTokenStr);
        if(adminToken && adminToken.refreshToken) {
          try {
            const refreshResponse = await axios.post(`${BACK_END_URL}/public/token/refresh`, {
              refreshToken: adminToken.refreshToken
            });
            if(refreshResponse.data.status.code === 1) {
              const serverToken = refreshResponse.data.res.data;
              localStorage.setItem('adminToken', JSON.stringify(serverToken));
              // 헤더에 새로운 액세스 토큰 추가
              headers['Authorization'] = `Bearer ${serverToken.accessToken}`;
  
              // 재시도
              const retryResponse = await axios({
                method: method,
                url: `${BACK_END_URL}${url}`,
                data: data,
                headers: headers
              });
  
              return retryResponse.data.data;
            } else {
              throw new Error();
            }
          } catch(e) {
            alert('재 로그인이 필요합니다');
            //로그인 비즈니스 전개
            localStorage.removeItem('adminToken');
            //리코일 상태값변경필요
            if(setIsLoginState) {
              setIsLoginState(false);
            }
            return null;
          }
        }
      }
    }

    // 그 외 에러 처리
    alert('서버에러 입니다');
    return null;
  } finally {
    if(setIsLoadingState) {
      setIsLoadingState(false);
    }
  }
};

export default commonAxios;