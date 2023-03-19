import { useState } from "react";
import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import styled from "@emotion/styled";

const drawerWidth = 160;

const Wrapper = styled.article`
  width:${(props) => props.width}px;
  height:100%;
  border-right:1px solid #000;
  h1 {
    padding:10px;
    font-size:18px;
    text-align:center;
    span {
      display:block;
      font-size:14px;
      font-weight:100;
    }
  }
`;

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <Wrapper width={drawerWidth}>
      <h1>본사 관리자<span>(G-Field / 경기관제 / 연단체)</span></h1>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        hideBackdrop
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>제휴골프장관리</ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Wrapper>
  )
}

export default Sidebar;