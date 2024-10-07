import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useGlobalcontext } from './context';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const TableData = () => {
  const {  filtertabledata,setPartname,partname,setObjdata,objdata} = useGlobalcontext()
  return (
    <TableContainer component={Paper} style={{ marginTop: "8px", overflow: "hidden", borderRadius: "10px", marginBottom: "50px" }}>
      <div className="acc">
        <TableHead style={{ paddingLeft: "15px", fontSize: "18px", fontWeight: "700" }} >Bill of Materials</TableHead>
      </div>
      <Table sx={{ minWidth: 200 }}  >
        <TableRow>
          <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", fontWeight: "700" }} >Part Number</StyledTableCell>
        
          <StyledTableCell style={{ padding: "10px", fontFamily: "Lato", fontWeight: "700" }} >Qty</StyledTableCell>
        </TableRow>
        <TableBody>
          {
            filtertabledata.map((item,i)=>{
              const {qty,partnumber}=item
              return(
                <StyledTableRow key={i}>
                  <StyledTableCell style={{ padding: "11px", fontFamily: "Lato", cursor: "pointer", color: partname == partnumber && "red" }} onClick={()=>{
                    setPartname(partnumber)
                    const data = objdata.filter(value => value.parent !== null);
                    setObjdata(data)
                    if (data.length == 1) {
                      setTimeout(() => {
                        const data = objdata.filter(value => value.parent !== null);
                        setObjdata(data)
                      }, [100])
                    }
                  }}>{partnumber}</StyledTableCell>
                  <StyledTableCell style={{ padding: "11px", fontFamily: "Lato" }} >{qty}</StyledTableCell>
                </StyledTableRow>
              )
            })
          }
                

         
        </TableBody>
      </Table>
    </TableContainer>


  )
}

export default TableData