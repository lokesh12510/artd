import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { visuallyHidden } from '@mui/utils';

import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../../../theme/GlobalStyles";
import palette from '../../../theme/palette';
import { Box, Checkbox, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import StickyColTable from '../../../components/StickyColTable';
import { data } from '../../../mockup/stickytableData';

function createData(id,name, calories, fat, carbs, protein,isCompleted) {
  return {id, name, calories, fat, carbs, protein,isCompleted };
}


export default function AddProject() {

  const [selected, setSelected] = React.useState([]);

  const [rows, setRows] = useState(data)

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // const handleAddRow = ()=>{
  //   setRows([...rows,  createData(rows.length+1,'Gingerbread', 356, 16.0, 49, 3.9,false)])

  // }

  const [open, setOpen] = React.useState(false);


  return (
    <StickyColTable data={rows} />
  );
}

