import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Button from "@mui/material/Button"; //따로 install해서 사용

function renderRow(props) { //List의 Item을 하나씩 그려주는 function이다 여기를 Custom해서 리스트를 디자인할 수 있다.
  const { index, style } = props; //prop으로 index와 style이 넘어옴

  return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
          <Button variant="outlined">Item?</Button>
        </ListItemButton>
      </ListItem>
  );
}

export default function VirtualizedListExample() {
  return (
      <Box
          sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList  //리스트의 정보
            height={400}
            width={360}
            itemSize={46} //item 개별 마다의 size
            itemCount={200} //item은 200개
            overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
  );
}