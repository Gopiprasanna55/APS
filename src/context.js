import { createContext, useState,useContext } from "react";

const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        diameter: 200,
        length: 2000,
        inletqty: 1,
        inletp1:0,
        inletp2:322,
        inletp3:644,
        outletqty: 1,
        outletp1:0,
        outletp2:252,
        outletp3:504
    });
    const [change,setChange]=useState(false)
  const [objdata, setObjdata] = useState([])
  const [showall, setShowall] = useState(false)
  const [partname, setPartname] = useState("")
  const [material, setMaterial] = useState("Carbon Steel")
  const [shadowvisible, setShadowVisible] = useState(true)
  const [inletuuids, setInletuuids] = useState([])
  const [outletuuids, setOutletuuids] = useState([])

  var diameter = formData.diameter;
  var length = formData.length
  var troughtsection2000, qty2000;
  if (diameter == 200) {
    if (length == 2000 || length == 5000 || length == 8000 || length == 11000) {
      troughtsection2000 = "Trough Section 2000 Ø200"
      qty2000 = 1

    }
    if (length == 4000 || length == 7000 || length == 10000) {
      troughtsection2000 = "Trough Section 2000 Ø200"
      qty2000 = 2
    }
  }


  if (diameter == 300) {
    if (length == 2000 || length == 5000 || length == 8000 || length == 11000) {
      troughtsection2000 = "Trough Section 2000 Ø300"
      qty2000 = 1
    }
    if (length == 4000 || length == 7000 || length == 10000) {
      troughtsection2000 = "Trough Section 2000 Ø300"
      qty2000 = 2
    }
  }

  var troughtsection3000, qty3000;
  // diameter200
  if (diameter == 200) {
    if (length == 3000 || length == 5000 || length == 7000) {
      troughtsection3000 = "Trough Section 3000 Ø200"
      qty3000 = 1
    }

    if (length == 6000 || length == 8000 || length == 10000) {
      troughtsection3000 = "Trough Section 3000 Ø200"
      qty3000 = 2
    }


    if (length == 9000 || length == 11000) {
      troughtsection3000 = "Trough Section 3000 Ø200"
      qty3000 = 3
    }
    if (length == 12000) {
      troughtsection3000 = "Trough Section 3000 Ø200"
      qty3000 = 4
    }
  }
  // diameter300
  if (diameter == 300) {
    if (length == 3000 || length == 5000 || length == 7000) {
      troughtsection3000 = "Trough Section 3000 Ø300"
      qty3000 = 1
    }

    if (length == 6000 || length == 8000 || length == 10000) {
      troughtsection3000 = "Trough Section 3000 Ø300"
      qty3000 = 2
    }

    if (length == 9000 || length == 11000) {
      troughtsection3000 = "Trough Section 3000 Ø300"
      qty3000 = 3
    }

    if (formData.length == 12000) {
      troughtsection3000 = "Trough Section 3000 Ø300"
      qty3000 = 4
    }
  } 




  var bearing, bearingqty;
  var bolts, boltqty;
  if (formData.length == 4000 || formData.length == 5000 || formData.length == 6000) {
    bearing = formData.diameter == 200 ? "Intermediate Bearing Ø200" : "Intermediate Bearing Ø300"
    bolts = formData.diameter == 200 ? "Vagen R Bolt Kit Ø200" : "Vagen R Bolt Kit Ø300"
    bearingqty = 1
    boltqty = 1
  }
  if (formData.length == 7000 || formData.length == 8000 || formData.length == 9000) {
    bearing = formData.diameter == 200 ? "Intermediate Bearing Ø200" : "Intermediate Bearing Ø300"
    bolts = formData.diameter == 200 ? "Vagen R Bolt Kit Ø200" : "Vagen R Bolt Kit Ø300"
    bearingqty = 2
    boltqty = 2
  }
  if (formData.length == 10000 || formData.length == 11000 || formData.length == 12000) {
    bearing = formData.diameter == 200 ? "Intermediate Bearing Ø200" : "Intermediate Bearing Ø300"
    bolts = formData.diameter == 200 ? "Vagen R Bolt Kit Ø200" : "Vagen R Bolt Kit Ø300"
    bearingqty = 3
    boltqty = 3
  }

  var kw;
  if(formData.diameter==200){
    if(formData.length<=6000){
      kw=2.2
    }else{
      kw=3
    }
  }
  if(formData.diameter==300){
    if(formData.length<=6000){
      kw=3
    }else{
      kw=5.5
    }
  }


  const tabledata = [
    { partnumber: formData.diameter == 200 ? `Vagen R Drive Station Ø200 ${kw}kW` : `Vagen R Drive Station Ø300 ${kw}kW`, description: "-", qty: 1 },
    { partnumber: formData.diameter == 200 ? "Vagen R End station Ø200" : "Vagen R End station Ø300", description: material, qty: 1 },
    { partnumber:`${troughtsection2000} Rotor ${material}` , description: material, qty: qty2000 },
    { partnumber:`${troughtsection3000} Rotor ${material}`, description: material, qty: qty3000 },
    { partnumber: bearing, description: "-", qty: bearingqty },
    // { partnumber: bolts, description: "-", qty: boltqty },
    { partnumber: `Inlet ${formData.diameter == 200 ? " Ø200" : " Ø300"}`, description: "-", qty: formData.inletqty },
    { partnumber: `Outlet ${formData.diameter == 200 ? " Ø200" : " Ø300"}`, description: "-", qty: formData.outletqty },
  ]
  const filtertabledata = tabledata.filter(item => item.partnumber !== undefined && item.qty !== undefined);
  
   
    return <AppContext.Provider value={{
    formData,
    setFormData,
    change,
    setChange,
    objdata, 
    setObjdata,
    showall,
    setShowall,
    partname,
    setPartname,
    shadowvisible, 
    setShadowVisible,
    filtertabledata,
    setMaterial,
    inletuuids, 
    setInletuuids,
    outletuuids,
    setOutletuuids
  }}>
    {children}
  </AppContext.Provider>
}
export const useGlobalcontext = () => {
  return useContext(AppContext)
}