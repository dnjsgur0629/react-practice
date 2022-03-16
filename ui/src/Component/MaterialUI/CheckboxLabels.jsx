import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {pink} from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function CheckboxLabels() {
  const label = {inputProps: {'aria-label': 'Checkbox demo'}};

  return (
      <>
        <Checkbox {...label} defaultChecked/>
        <Checkbox {...label} />
        <Checkbox {...label} disabled/>
        <Checkbox {...label} disabled checked/>
        <Checkbox {...label} defaultChecked/>
        <Checkbox {...label} defaultChecked color="secondary"/>
        <Checkbox {...label} defaultChecked color="success"/>
        <Checkbox {...label} defaultChecked color="default"/>
        <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
        />      {/*커스텀 체크박스*/}
        <FormControlLabel
            control={
              <Checkbox {...label}
                        icon={<FavoriteBorder/>}
                        checkedIcon={<Favorite/>}/>
            } label="Favorite Icon"/>     {/*FormControlLabel로 감싸고 control에 Checkbox를 label에 버튼의 이름을 넣음*/}
        <FormControlLabel
          control={
        <Checkbox
            {...label}
            icon={<BookmarkBorderIcon/>}
            checkedIcon={<BookmarkIcon/>}
        />} label="Bookmark Icon" labelPlacement="top"/>
        <FormGroup>   {/*체크박스를 FormGroup으로 감싸면 세로로 보여줌*/}
          <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
          <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
        </FormGroup>
      </>
  );
}

export default CheckboxLabels;