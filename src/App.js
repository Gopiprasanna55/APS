
import React, {  useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import './styles.css'
import { Button, ButtonGroup } from "@mui/material";
import ResizePanel from "react-resize-panel";
import { useGlobalcontext } from './context'
import logo from './images/logo.png'
import Sidepanel from './Sidepanel'
import Model from './Model'
import axios from 'axios';



export default function App() {
  const [res, setRes] = useState()
  const [loading, setLoading] = useState(false)
  const [btnsdisable, setBtnsDisable] = useState(false)
  const {filtertabledata,formData}=useGlobalcontext()
  var { diameter, length, inletqty, outletqty,inletp1,inletp2,inletp3,outletp1,outletp2,outletp3 } = formData

  

  
  const DownLoadPdf = async () => {
    const arrangethedata = filtertabledata.map((item, i) => {
      const newObj = {
        id: i + 1,
        partnumber: item.partnumber,
        qty: item.qty,
      };
      return newObj;
    });
    
    
    setLoading(true)
    try {
      const response = await axios.post("https://vagenexpressapi.azurewebsites.net/api/Main/GenerateUDrawing", {
        BOM: arrangethedata,
        Diameter: diameter,
        Inletp1: inletp1,
        Inletp2: inletp2,
        Inletp3:inletp3,
        Inletqty: inletqty,
        Length: length,
        Outletp1: outletp1,
        Outletp2: outletp2,
        Outletp3: outletp3,
        Outletqty: outletqty
      },);
      setBtnsDisable(true)
      setRes(response.data)
      setLoading(false)
    } catch (err) {
      alert(err)
      setLoading(false)
      setBtnsDisable(false)
      setRes('')
    }
  };
  
  
  
  return (
    <div className={`${loading ? 'overlay ' : ''}`} >
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      <div className='body' style={{ display: "flex", height: "100vh" }}>
        <div className='content' style={{ overflow: "hidden", flex: "1", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "5px 20px", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={logo} alt="" style={{ width: "100px" }} />
              <h3 style={{ margin: "0", color: "#000c66" }}>Express Conveyor</h3>
            </div>
            <div>
              <ButtonGroup variant="contained" aria-label="outlined primary  group" style={{ backgroundColor: "none" }}>
                <Button style={{ backgroundColor: 'rgb(23, 18, 31)', borderRightColor: "white", textTransform: "capitalize", color: "#fff", fontFamily: "Lato", fontWeight: "400" }} onClick={DownLoadPdf}>Generate</Button>
                <Button disabled={!btnsdisable} style={{ display: "flex", fontFamily: "Lato", alignItems: "center", justifyContent: "center", gap: "7px", backgroundColor: 'rgb(23, 18, 31)', textTransform: "capitalize", borderRightColor: "white", color: "#fff", fontWeight: "400", opacity: btnsdisable ? 1 : 0.4 }} onClick={() => {
                  window.open(res.DrawingURL, "_blank")
                }}>
                  <span><FaDownload size={15} /></span>
                  <span>Pdf</span>
                </Button>
                <Button disabled={!btnsdisable} style={{ display: "flex", fontFamily: "Lato", alignItems: "center", justifyContent: "center", gap: "5px", backgroundColor: 'rgb(23, 18, 31)', textTransform: "capitalize", borderRightColor: "white", color: "#fff", fontWeight: "400", opacity: btnsdisable ? 1 : 0.4 }} onClick={() => {
                  window.open(`https://vagen.no/no/nettbutikk/forhaandsvisning?t=${res.WorkItemId}`)
                }}>
                  <span style={{ display: "flex", justifyContent: "center" }}><HiCurrencyDollar size={17} /></span>
                  <span>Add To Basket</span>
                </Button>
              </ButtonGroup>
            </div>
          </nav>
          <div className="model" style={{ overflow: "auto", flex: "1" }}>
            <Model/>
          </div>
        </div>
        <ResizePanel direction="w" borderClass='customResizeBorder' className="r">
          <Sidepanel setBtnsDisable={setBtnsDisable} setRes={setRes}/>
        </ResizePanel>
      </div>
    </div>




  )
}

