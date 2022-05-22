import React, { useState } from 'react';
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
import { CopyIcon, DeleteIcon, EditIcon, EyeIcon } from "../constants/icons";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { StyledBtn, StyledBox, StyledInput, StyledCheckBoxWrapper } from "../theme/GlobalStyles";

import { Box, Checkbox, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import palette from '../theme/palette';


const StickyColTable = ({ data }) => {


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

    const handleAddRow = () => {
        console.log(rows)
        setRows([...rows,   {
            id: 45,
            isCompleted: false,
            phase: 1,
            task: 23,
            description: 'This is new description.',
            date: new Date(),
            time: new Date(),
            timeXRate: '2,534',
            expenses: '2,534',
            _natc: 1.03,
            _davc: 1.03,
            _jent: 1.03,
            _natc: 1.03,
            _davc: 1.03,
            _jent: 1.03,
        }])

    }

    const [open, setOpen] = React.useState(false);

    console.log(rows)




    return (
        <GridContainer>
            <TableContainer component={Paper} sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>

                {/* Sticky */}
                <Table sx={{ position: 'sticky', left: 0, zIndex: 2 }} aria-label="simple table" size={'small'} className="sticky-table">
                    {/*----------- Sticky Header-------- */}
                    <TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
                        <TableRow>
                            {
                                stickyHeader.map((item, index) => {
                                    return (
                                        <TableCell align={item.align} key={index} style={{ minWidth: `${item.minWidth}px` }}>{item.title}</TableCell>
                                    )
                                })
                            }

                        </TableRow>
                    </TableHead>
                    {/*----------- Sticky Header-------- */}
                    <TableBody>
                        {/* Accordtion Row */}
                        <TableRow sx={{ backgroundColor: "#e3f9ff" }} onClick={() => setOpen(!open)}>
                            <TableCell colSpan={10}  className="accordtion">
                                <Stack direction="row" alignItems="center">
                                <Typography variant="body1" component="div" color={'primary'} fontWeight="bold" sx={{ maxWidth: '300px',paddingLeft:'10px'}}>
                                    Completed Task
                                </Typography>
                                <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        className='downdown'
                                        sx={{visibility: "hidden"}}

                                    >
                                        {open ? <ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} /> : <ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />}
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                        {/* Accordtion Row */}

                        {/* ----------------- Sticky Table row -------------- */}
                        {rows.map((row, index) => {
                            const isItemSelected = isSelected(row.id);

                            const labelId = `enhanced-table-checkbox-${index}`;

                            console.log(row)

                            return (
                                <TableRow
                                    key={row.id}
                                    sx={row.isCompleted && !open && visuallyHidden}
                                    // onClick={(event) => handleClick(event, row.name)}
                                    selected={row.isCompleted ? true : isItemSelected}
                                    className={row.isCompleted && open ? 'shown' : 'hidden'}
                                    style={{ transition: "all 1ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", height: 'auto', transitionDuration: '266ms' }}
                                >
                                    <TableCell component="th" scope="row" >
                                        <Checkbox color="primary"
                                            checked={row.isCompleted ? true : isItemSelected}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }} onChange={(event) => handleClick(event, row.id)} />
                                    </TableCell >
                                    <TableCell align="center">
                                        {isItemSelected || row.isCompleted ? (
                                            <Stack direction="row" alignItems="center" justifyContent={'center'}>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <EyeIcon bg={palette.primary.main} />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <DeleteIcon bg={palette.grey[400]} />
                                                </IconButton>
                                            </Stack>
                                        ) : (
                                            <Stack direction="row" alignItems="center" justifyContent={'center'}>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <CopyIcon bg={palette.primary.main} />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <EditIcon bg={palette.primary.main} />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                    <DeleteIcon bg={palette.primary.main} />
                                                </IconButton>

                                            </Stack>
                                        )}
                                    </TableCell>
                                    <TableCell align="center"><StyledInput value={row.phase} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.task} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.description} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.date} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.time} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.timeXRate} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row.expenses} /></TableCell>
                                </TableRow>
                            )
                        })}

                        {/* ----------------- Sticky Table row -------------- */}
                    </TableBody>
                </Table>
                {/* Sticky */}

                {/* Scroll Table */}
                <Table aria-label="simple table" className="scroll-table" size={'small'}>
                    {/*----------- Scroll Header-------- */}
                    <TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
                        <TableRow>
                            <TableCell align='center' style={{ minWidth: "80px" }}>NATC</TableCell>
                            <TableCell align='center' style={{ minWidth: "80px" }}>DAVC</TableCell>
                            <TableCell align='center' style={{ minWidth: "80px" }}>JENT</TableCell>
                            <TableCell align='center' style={{ minWidth: "80px" }}>NATC</TableCell>
                            <TableCell align='center' style={{ minWidth: "80px" }}>DAVC</TableCell>
                            <TableCell align='center' style={{ minWidth: "80px" }}>JENT</TableCell>
                        </TableRow>
                    </TableHead>
                    {/*----------- Scroll Header-------- */}
                    <TableBody>
                        {/* Accordtion Row */}
                        <TableRow sx={{ backgroundColor: "#e3f9ff", cursor:'pointer', color: palette.common.white }} onClick={() => setOpen(!open)}>
                            <TableCell colSpan={10}  className="accordtion">
                            <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        className='downdown'
                                        sx={{visibility: "hidden"}}

                                    >
                                        {open ? <ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} /> : <ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />}
                                    </IconButton>
                            </TableCell>
                        </TableRow>
                        {/* Accordtion Row */}

                        {/* ----------------- Scroll Table row -------------- */}
                        {rows.map((row, index) => {
                            const isItemSelected = isSelected(row.id);

                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    key={row.id}
                                    sx={row.isCompleted && !open && visuallyHidden}
                                    // onClick={(event) => handleClick(event, row.name)}
                                    selected={row.isCompleted ? true : isItemSelected}
                                    className={row.isCompleted && open ? 'shown' : 'hidden'}
                                    style={{ transition: "all 1ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", height: 'auto', transitionDuration: '266ms' }}
                                >

                                    <TableCell align="center"><StyledInput value={row._natc} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row._davc} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row._jent} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row._natc} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row._davc} /></TableCell>
                                    <TableCell align="center"><StyledInput value={row._jent} /></TableCell>
                                </TableRow>
                            )
                        })}

                        {/* ----------------- Scroll Table row -------------- */}
                    </TableBody>
                </Table>
                {/* Scroll Table */}

                <Table sx={{ position: 'sticky', right: 0,maxWidth:70 }} aria-label="simple table" size={'small'}>
                    <TableHead sx={{ backgroundColor: palette.secondary.main, color: palette.common.white }}>
                        <TableRow>
                            <TableCell align="right" style={{ minWidth: '50px' }}> <div style={{maxWidth:50,paddingBlock:6,paddingInline:10, backgroundColor:palette.primary.main, display:'flex',alignItems:'center',justifyContent:'center',borderRadius:3}}><AddCircleIcon fontSize='small'/></div> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <React.Fragment>
                            <TableRow sx={{ backgroundColor: "#e3f9ff", cursor:'pointer', color: palette.common.white, border: `1px solid ${palette.primary.main}` }} onClick={() => setOpen(!open)}>

                                <TableCell align='right' colSpan={3} className="accordtion">
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        className='downdown'

                                    >
                                        {open ? <ArrowDropUpIcon fontSize="large" style={{ color: palette.primary.main }} /> : <ArrowDropDownIcon fontSize="large" style={{ color: palette.primary.main }} />}
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                            {rows.map((row,index)=>{
                                const isItemSelected = isSelected(row.id);
                                return (
                                    <TableRow key={index}  sx={row.isCompleted && !open && visuallyHidden} >
                                        <TableCell align="center"><div style={{height:37, width:23}}></div></TableCell>
                                    </TableRow>
                                )
                            })}
                        </React.Fragment>

                    </TableBody>
                </Table>
            </TableContainer>

            <StyledBtn variant='contained' onClick={handleAddRow}><AddCircleIcon/></StyledBtn>

        </GridContainer>
    )
}

export default StickyColTable



const GridContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    '& .Mui-selected': {
        "& .MuiInputBase-input": {
            pointerEvents:'none'
        },

    },
    "& .MuiTableHead-root":{
        minHeight:80
    },
    '& .sticky-table': {
        backgroundColor: '#fff',
        '& .MuiTableCell-head': {
            color: '#fff',
            padding: theme.spacing(1),
            paddingBlock: theme.spacing(2)
        },
    },
    '& .scroll-table': {
        flex: 2,
        backgroundColor: '#fff',
        '& .MuiTableCell-body':{
            paddingBlock: theme.spacing(1)
        },
        '& .MuiTableCell-head': {
            color: '#fff',
            padding: theme.spacing(1),
            paddingBlock: theme.spacing(2)
        },
    },

    "& .MuiTableRow-root": {
        border: 'none',
        cursor:'pointer'
    },
    '& .MuiTableCell-head': {
        color: '#fff',
        padding: theme.spacing(1.5),
    },
    '& .MuiTableRow-root.Mui-selected': {
        "&:hover":{
            backgroundColor:'rgba(16, 87, 118, 0.08)'
        },
       
    },
    '& .Mui-selected':{
        "& .MuiTextField-root":{
            pointerEvents:'none',
            "& input":{
                color:palette.grey[400],
            }
           
        },
    },
    '& .MuiTableCell-root': {
        
        '& .downdown': {
            padding:0,
            '& .MuiSvgIcon-root':{
                width:32,
                height:32
            }
        },
    },
    
    '& .MuiTableCell-body': {
        paddingBlock: theme.spacing(1),
        paddingInline: theme.spacing(1),
        "& .MuiInputBase-input": {
            padding: theme.spacing(1),
        },
        "& .MuiCheckbox-root": {
            padding: theme.spacing(.8),
        },

    },
   
    '& .accordtion': {
       
            borderBottom:`1px solid ${palette.primary.main}`
        

    },

  



}));


const stickyHeader = [
    {
        title: "Completed",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Action",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Phase",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Task",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Description",
        minWidth: 120,
        align: 'center',
    },
    {
        title: "Date",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Time",
        minWidth: 80,
        align: 'center',
    },
    {
        title: "Time X Rate",
        minWidth: 100,
        align: 'center',
    },
    {
        title: "Expense",
        minWidth: 80,
        align: 'center',
    },
];