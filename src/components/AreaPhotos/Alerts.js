import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
export function LoadingAlert() {
  return (
    <span id="loadingAlert" className="alerts">      
      Loading...
      <CircularProgress color="inherit" size={30}/>
    </span>
  );
}

export function ErrorAlert() {
  return <span id="errorAlert">Incorrect date!</span>;
}


export function PhotoNotFoundAlert() {
    return <span id="photoNotFoundAlert" className="alerts">이 날짜를 나타내는 사진이 없습니다.... :/</span>;
  }
