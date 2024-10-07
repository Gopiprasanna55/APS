import React, { useEffect, useState } from 'react'
import { FormLabel, Card } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TableData from './TableData';
import { useGlobalcontext } from './context';
import { toast } from 'react-toastify';
const Sidepanel = ({ setRes, setBtnsDisable }) => {
  const { formData, setFormData, setPartname, setObjdata, setMaterial, partname, setShadowVisible, inletuuids, objdata, outletuuids, setOutletuuids, setInletuuids } = useGlobalcontext()
  const [firstdropdown, setFirstDropdown] = useState(false)
  const [seconddropdown, setSecondDropdown] = useState(false)
  const [inputfirstvalue, setInputFirstValue] = useState(0)
  const [inputsecondvalue, setInputsecondValue] = useState(322)
  const [inputthirdvalue, setInputThirdValue] = useState(644)
  const [ouletfirstvalue, setOutletFirstValue] = useState(0)
  const [ouletsecondvalue, setOutletSecondValue] = useState(252)
  const [ouletthirdvalue, setOutletThirdValue] = useState(504)


  const FirstDropDown = () => {
    setFirstDropdown(!firstdropdown)
    setSecondDropdown(false)
  }
  const SecondDropdown = () => {
    setSecondDropdown(!seconddropdown)
    setFirstDropdown(false)
  }

 
  

  useEffect(() => {
    if (formData.diameter == 200) {
      setInputFirstValue(0);
      setInputsecondValue(322);
      setInputThirdValue(644);
      setOutletFirstValue(0);
      setOutletSecondValue(252);
      setOutletThirdValue(504);
      setFormData((prop) => ({
        ...prop,
        inletp1: 0,
        inletp2: 322,
        inletp3: 644,
        outletp1: 0,
        outletp2: 252,
        outletp3: 504
      }))
    } else {
      setInputFirstValue(0);
      setInputsecondValue(422);
      setInputThirdValue(844);
      setOutletFirstValue(0);
      setOutletSecondValue(352);
      setOutletThirdValue(704);
      setFormData((prop) => ({
        ...prop,
        inletp1: 0,
        inletp2: 422,
        inletp3: 844,
        outletp1: 0,
        outletp2: 352,
        outletp3: 704
      }))
    }

  }, [formData.diameter, formData.length])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    toast.dismiss();
    setBtnsDisable(false)
    setRes('')
    if (name === "length" || name === "diameter") {
      setPartname('');
      setShadowVisible(true);
      setObjdata([]);
      setInletuuids([]);
      setOutletuuids([]);
    }



    if (name === "inletqty" && inletuuids.length > 0) {
      inletuuids.forEach((item) => {
        setObjdata((prev) => prev.filter((obj) => obj.uuid !== item));
      });
    }

    if (name === "outletqty" && outletuuids.length > 0) {
      outletuuids.forEach((item) => {
        setObjdata((prev) => prev.filter((obj) => obj.uuid !== item));
      });
    }


    setFormData((prev) => ({
      ...prev,
      [name]: value === '' || isNaN(Number(value)) ? 0 : Number(value),
    }));
  };




  const getMinMaxValues = (length, diameter) => {
    if (diameter == 200) {
      switch (length) {
        case 2000:
          return {
            inletp1: { min: 0, max: 1698 },
            inletp2: { min: 322, max: 1698 },
            inletp3: { min: 644, max: 1698 },
            outletp1: { min: 0, max: 1768 },
            outletp2: { min: 252, max: 1768 },
            outletp3: { min: 504, max: 1768 },
          };
        case 3000:
          return {
            inletp1: { min: 0, max: 2698 },
            inletp2: { min: 322, max: 2698 },
            inletp3: { min: 644, max: 2698 },
            outletp1: { min: 0, max: 2768 },
            outletp2: { min: 252, max: 2768 },
            outletp3: { min: 504, max: 2768 },
          };
        case 4000:
          return {
            inletp1: { min: 0, max: 3698 },
            inletp2: { min: 322, max: 3698 },
            inletp3: { min: 644, max: 3698 },
            outletp1: { min: 0, max: 3768 },
            outletp2: { min: 252, max: 3768 },
            outletp3: { min: 504, max: 3768 },
          };
        case 5000:
          return {
            inletp1: { min: 0, max: 4698 },
            inletp2: { min: 322, max: 4698 },
            inletp3: { min: 644, max: 4698 },
            outletp1: { min: 0, max: 4768 },
            outletp2: { min: 252, max: 4768 },
            outletp3: { min: 504, max: 4768 },
          };
        case 6000:
          return {
            inletp1: { min: 0, max: 5698 },
            inletp2: { min: 322, max: 5698 },
            inletp3: { min: 644, max: 5698 },
            outletp1: { min: 0, max: 5768 },
            outletp2: { min: 252, max: 5768 },
            outletp3: { min: 504, max: 5768 },
          };
        case 7000:
          return {
            inletp1: { min: 0, max: 6698 },
            inletp2: { min: 322, max: 6698 },
            inletp3: { min: 644, max: 6698 },
            outletp1: { min: 0, max: 6768 },
            outletp2: { min: 252, max: 6768 },
            outletp3: { min: 504, max: 6768 },
          };
        case 8000:
          return {
            inletp1: { min: 0, max: 7698 },
            inletp2: { min: 322, max: 7698 },
            inletp3: { min: 644, max: 7698 },
            outletp1: { min: 0, max: 7768 },
            outletp2: { min: 252, max: 7768 },
            outletp3: { min: 504, max: 7768 },
          };
        case 9000:
          return {
            inletp1: { min: 0, max: 8698 },
            inletp2: { min: 322, max: 8698 },
            inletp3: { min: 644, max: 8698 },
            outletp1: { min: 0, max: 8768 },
            outletp2: { min: 252, max: 8768 },
            outletp3: { min: 504, max: 8768 },
          };
        case 10000:
          return {
            inletp1: { min: 0, max: 9698 },
            inletp2: { min: 322, max: 9698 },
            inletp3: { min: 644, max: 9698 },
            outletp1: { min: 0, max: 9768 },
            outletp2: { min: 252, max: 9768 },
            outletp3: { min: 504, max: 9768 },
          };
        case 11000:
          return {
            inletp1: { min: 0, max: 10698 },
            inletp2: { min: 322, max: 10698 },
            inletp3: { min: 644, max: 10698 },
            outletp1: { min: 0, max: 10768 },
            outletp2: { min: 252, max: 10768 },
            outletp3: { min: 504, max: 10768 },
          };
        case 12000:
          return {
            inletp1: { min: 0, max: 11698 },
            inletp2: { min: 322, max: 11698 },
            inletp3: { min: 644, max: 11698 },
            outletp1: { min: 0, max: 11768 },
            outletp2: { min: 252, max: 11768 },
            outletp3: { min: 504, max: 11768 },
          };
        default:
          return {};
      }
    }
    else {
      switch (length) {
        case 2000:
          return {
            inletp1: { min: 0, max: 1598 },
            inletp2: { min: 422, max: 1598 },
            inletp3: { min: 844, max: 1598 },
            outletp1: { min: 0, max: 1668 },
            outletp2: { min: 352, max: 1668 },
            outletp3: { min: 704, max: 1668 },
          };
        case 3000:
          return {
            inletp1: { min: 0, max: 2598 },
            inletp2: { min: 422, max: 2598 },
            inletp3: { min: 844, max: 2598 },
            outletp1: { min: 0, max: 2668 },
            outletp2: { min: 352, max: 2668 },
            outletp3: { min: 704, max: 2668 },
          };
        case 4000:
          return {
            inletp1: { min: 0, max: 3598 },
            inletp2: { min: 422, max: 3598 },
            inletp3: { min: 844, max: 3598 },
            outletp1: { min: 0, max: 3668 },
            outletp2: { min: 352, max: 3668 },
            outletp3: { min: 704, max: 3668 },
          };
        case 5000:
          return {
            inletp1: { min: 0, max: 4598 },
            inletp2: { min: 422, max: 4598 },
            inletp3: { min: 844, max: 4598 },
            outletp1: { min: 0, max: 4668 },
            outletp2: { min: 352, max: 4668 },
            outletp3: { min: 704, max: 4668 },
          };
        case 6000:
          return {
            inletp1: { min: 0, max: 5598 },
            inletp2: { min: 422, max: 5598 },
            inletp3: { min: 844, max: 5598 },
            outletp1: { min: 0, max: 5668 },
            outletp2: { min: 352, max: 5668 },
            outletp3: { min: 704, max: 5668 },
          };
        case 7000:
          return {
            inletp1: { min: 0, max: 6598 },
            inletp2: { min: 422, max: 6598 },
            inletp3: { min: 844, max: 6598 },
            outletp1: { min: 0, max: 6668 },
            outletp2: { min: 352, max: 6668 },
            outletp3: { min: 704, max: 6668 },
          };
        case 8000:
          return {
            inletp1: { min: 0, max: 7598 },
            inletp2: { min: 422, max: 7598 },
            inletp3: { min: 844, max: 7598 },
            outletp1: { min: 0, max: 7668 },
            outletp2: { min: 352, max: 7668 },
            outletp3: { min: 704, max: 7668 },
          };
        case 9000:
          return {
            inletp1: { min: 0, max: 8598 },
            inletp2: { min: 422, max: 8598 },
            inletp3: { min: 844, max: 8598 },
            outletp1: { min: 0, max: 8668 },
            outletp2: { min: 352, max: 8668 },
            outletp3: { min: 704, max: 8668 },
          };
        case 10000:
          return {
            inletp1: { min: 0, max: 9598 },
            inletp2: { min: 422, max: 9598 },
            inletp3: { min: 844, max: 9598 },
            outletp1: { min: 0, max: 9668 },
            outletp2: { min: 352, max: 9668 },
            outletp3: { min: 704, max: 9668 },
          };
        case 11000:
          return {
            inletp1: { min: 0, max: 10598 },
            inletp2: { min: 422, max: 10598 },
            inletp3: { min: 844, max: 10598 },
            outletp1: { min: 0, max: 10668 },
            outletp2: { min: 352, max: 10668 },
            outletp3: { min: 704, max: 10668 },
          };
        case 12000:
          return {
            inletp1: { min: 0, max: 11598 },
            inletp2: { min: 422, max: 11598 },
            inletp3: { min: 844, max: 11598 },
            outletp1: { min: 0, max: 11668 },
            outletp2: { min: 352, max: 11668 },
            outletp3: { min: 704, max: 11668 },
          };
        default:
          return {};
      }
    }
  };
  const currentinputsdata = getMinMaxValues(formData.length, formData.diameter)


  // inlets   onChange events 
  const firstInlethandleChange = (e) => {
    const { value } = e.target
    toast.dismiss()
    setInputFirstValue(value)
    setBtnsDisable(false)
    setRes('')
    setFormData((prev) => ({
      ...prev,
      inletp1: value
    }));
    if (value < currentinputsdata.inletp1.min) {
      setFormData((prev) => ({
        ...prev,
        inletp1: currentinputsdata.inletp1.min
      }));
      toast(`Inlet Position 1 ranges between ${currentinputsdata.inletp1.min} mm to ${currentinputsdata.inletp1.max} mm`)

    }
    if (value > currentinputsdata.inletp1.max) {
      setFormData((prev) => ({
        ...prev,
        inletp1: currentinputsdata.inletp1.max
      }));
      toast(`Inlet Position 1 ranges between ${currentinputsdata.inletp1.min} mm to ${currentinputsdata.inletp1.max} mm`)
    }


  }



  const secondInlethandleChange = (e) => {
    const { value } = e.target
    if (formData.inletqty === 2 || formData.inletqty === 3) {
      toast.dismiss()
      setInputsecondValue(value)
      setBtnsDisable(false)
      setRes('')
      setFormData((prev) => ({
        ...prev,
        inletp2: value
      }));
      if (value < currentinputsdata.inletp2.min) {
        setFormData((prev) => ({
          ...prev,
          inletp2: currentinputsdata.inletp2.min
        }));
        toast(`Inlet Position 2 ranges between ${currentinputsdata.inletp2.min} mm to ${currentinputsdata.inletp2.max} mm`);
      }
      if (value > currentinputsdata.inletp2.max) {
        setFormData((prev) => ({
          ...prev,
          inletp2: currentinputsdata.inletp2.max
        }));
        toast(`Inlet Position 2 ranges between ${currentinputsdata.inletp2.min} mm to ${currentinputsdata.inletp2.max} mm`);

      }
    }



  }


  const thirdInlethandleChange = (e) => {
    const { value } = e.target
    if (formData.inletqty === 3) {
      setBtnsDisable(false)
      setRes('')
      toast.dismiss()
      setInputThirdValue(value)
      setFormData((prev) => ({
        ...prev,
        inletp3: value
      }));
      if (value < currentinputsdata.inletp3.min) {
        setFormData((prev) => ({
          ...prev,
          inletp3: currentinputsdata.inletp3.min
        }));
        toast(`Inlet Position 3 ranges between ${currentinputsdata.inletp3.min} mm to ${currentinputsdata.inletp3.max} mm`);

      }
      if (value > currentinputsdata.inletp3.max) {
        setFormData((prev) => ({
          ...prev,
          inletp3: currentinputsdata.inletp3.max
        }));
        toast(`Inlet Position 3 ranges between ${currentinputsdata.inletp3.min} mm to ${currentinputsdata.inletp3.max} mm`);
      }
    }


  }

  // outlets onChange events 

  const firstOutletHandleChange = (e) => {
    const { value } = e.target
    toast.dismiss()
    setBtnsDisable(false)
    setRes('')
    setOutletFirstValue(value)
    setFormData((prev) => ({
      ...prev,
      outletp1: value
    }));
    if (value < currentinputsdata.outletp1.min) {
      setFormData((prev) => ({
        ...prev,
        outletp1: currentinputsdata.outletp1.min
      }));
      toast(`Outlet Position 1 ranges between ${currentinputsdata.outletp1.min} mm to ${currentinputsdata.outletp1.max} mm`)

    }
    if (value > currentinputsdata.outletp1.max) {
      setFormData((prev) => ({
        ...prev,
        outletp1: currentinputsdata.outletp1.max
      }));
      toast(`Outlet Position 1 ranges between ${currentinputsdata.outletp1.min} mm to ${currentinputsdata.outletp1.max} mm`)
    }

  }

  const secondOutletHandleChange = (e) => {
    const { value } = e.target
    if (formData.outletqty == 2 || formData.outletqty == 3) {
      setBtnsDisable(false)
      setRes('')
      toast.dismiss()
      setOutletSecondValue(value)
      setFormData((prev) => ({
        ...prev,
        outletp2: value
      }));
      if (value < currentinputsdata.outletp2.min) {
        setFormData((prev) => ({
          ...prev,
          outletp2: currentinputsdata.outletp2.min
        }));
        toast(`Outlet Position 2 ranges between ${currentinputsdata.outletp2.min} mm to ${currentinputsdata.outletp2.max} mm`)

      }
      if (value > currentinputsdata.outletp2.max) {
        setFormData((prev) => ({
          ...prev,
          outletp2: currentinputsdata.outletp2.max
        }));
        toast(`Outlet Position 2 ranges between ${currentinputsdata.outletp2.min} mm to ${currentinputsdata.outletp2.max} mm`)
      }
    }
  }

  const thirdOutletHandleChange = (e) => {
    const { value } = e.target
    if (formData.outletqty == 3) {
      setBtnsDisable(false)
      setRes('')
      toast.dismiss()
      setOutletThirdValue(value)
      setFormData((prev) => ({
        ...prev,
        outletp3: value
      }));
      if (value < currentinputsdata.outletp3.min) {
        setFormData((prev) => ({
          ...prev,
          outletp3: currentinputsdata.outletp3.min
        }));
        toast(`Outlet Position 3 ranges between ${currentinputsdata.outletp3.min} mm to ${currentinputsdata.outletp3.max} mm`)

      }
      if (value > currentinputsdata.outletp3.max) {
        setFormData((prev) => ({
          ...prev,
          outletp3: currentinputsdata.outletp3.max
        }));
        toast(`Outlet Position 3 ranges between ${currentinputsdata.outletp3.min} mm to ${currentinputsdata.outletp3.max} mm`)
      }
    }
  }


  const handleMaterialChange = (e) => {
    const selectedMaterial = e.target.value;
    setMaterial(selectedMaterial);
    setBtnsDisable(false)
    setRes('')
    if (partname == "Trough Section 2000 Ø200 Rotor Carbon Steel" || partname == "Trough Section 2000 Ø200 Rotor Stainless Steel" ||
      partname == "Trough Section 2000 Ø300 Rotor Carbon Steel" || partname == "Trough Section 2000 Ø300 Rotor Stainless Steel" ||
      partname == "Trough Section 3000 Ø200 Rotor Carbon Steel" || partname == "Trough Section 3000 Ø200 Rotor Stainless Steel" ||
      partname == "Trough Section 3000 Ø300 Rotor Carbon Steel" || partname == "Trough Section 3000 Ø300 Rotor Stainless Steel") {
      setPartname("")
    }
  };


  return (
    <div className='sidebar panel' style={{ position: "relative" }}>
      <div className="sidebarcontent" style={{ overflow: "auto" }} >
        <div className='sidebarcards' >
          <div className="cards">
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc'>
                <FormLabel style={{ margin: "0", fontSize: '18px', wordSpacing: "1px", fontFamily: "Lato", paddingLeft: "15px", color: "#ffffff", fontWeight: "700" }}>Inputs</FormLabel>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px", backgroundColor: "#ffffff" }}>
                <label htmlFor="" className='form-label' >Rotor Material</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option" name='material' onChange={handleMaterialChange}>
                  <option value="Carbon Steel">Carbon Steel</option>
                  <option value="Stainless Steel">Stainless Steel</option>
                </select>
                <label htmlFor="" className='form-label' >Diameter (mm)</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option"
                  name="diameter"
                  value={formData.diameter}
                  onChange={handleInputChange}
                >
                  <option value={200}>200</option>
                  <option value={300}>300</option>
                </select>

                <label className="form-label" >Length</label>
                <select className="form-select" data-control="select2" data-placeholder="Select an option"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                >
                  <option value={2000}>2000</option>
                  <option value={3000}>3000</option>
                  <option value={4000}>4000</option>
                  <option value={5000}>5000</option>
                  <option value={6000}>6000</option>
                  <option value={7000}>7000</option>
                  <option value={8000}>8000</option>
                  <option value={9000}>9000</option>
                  <option value={10000}>10000</option>
                  <option value={11000}>11000</option>
                  <option value={12000}>12000</option>
                </select>
              </div>
            </Card>
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc' onClick={FirstDropDown}>
                <FormLabel style={{ margin: "0", fontSize: '18px', wordSpacing: "1px", fontFamily: "Lato", paddingLeft: "15px", color: "#ffffff", fontWeight: "700" }}>Inlets</FormLabel>
                <div style={{ paddingRight: "15px" }}>
                  {
                    firstdropdown ? <FaChevronUp /> : <FaChevronDown />
                  }
                </div>
              </div>
              {
                firstdropdown &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                  <label className="form-label" >Number of Inlets</label>
                  <select className="form-select" data-control="select2" data-placeholder="Select an option"
                    name="inletqty"
                    value={formData.inletqty}
                    onChange={handleInputChange}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>

                  </select>
                  <label className="form-label" >Inlet Position1 (mm)</label>
                  <input type="number" className='input' name='inputfirstvalue' value={inputfirstvalue} onChange={firstInlethandleChange} />
                  <label className="form-label"  >Inlet Position2 (mm)</label>
                  <input type="number" className='input' name='inputsecondvalue' value={inputsecondvalue} onChange={secondInlethandleChange} />
                  <label className="form-label" >Inlet Position3 (mm)</label>
                  <input type="number" className='input' name='inputthirdvalue' value={inputthirdvalue} onChange={thirdInlethandleChange} />

                </div>
              }
            </Card>
            <Card style={{ borderRadius: "10px" }}>
              <div className='acc' onClick={SecondDropdown}>
                <FormLabel style={{ margin: "0", color: "#ffffff", fontSize: '18px', wordSpacing: "1px", paddingLeft: "15px", fontWeight: "700" }}>Outlets</FormLabel>
                <div style={{ paddingRight: "15px" }}>
                  {
                    seconddropdown ? <FaChevronUp /> : <FaChevronDown />
                  }
                </div>
              </div>
              {
                seconddropdown &&
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 15px" }}>
                  <label className="form-label" >Number of Outlets</label>
                  <select className="form-select" data-control="select2" data-placeholder="Select an option"
                    name="outletqty"
                    value={formData.outletqty}
                    onChange={handleInputChange}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                  <label className="form-label" >Outlet Position1 (mm)</label>
                  <input type="number" className='input' name="outletp1" value={ouletfirstvalue} onChange={firstOutletHandleChange} />
                  <label className="form-label" >Outlet Position2 (mm)</label>
                  <input type="number" className='input' name="outletp2" value={ouletsecondvalue} onChange={secondOutletHandleChange} />
                  <label className="form-label" >Outlet Position3 (mm)</label>
                  <input type="number" className='input' name="outletp3" value={ouletthirdvalue} onChange={thirdOutletHandleChange} />
                </div>
              }
            </Card>
          </div>
          <TableData />

        </div>
      </div>
    </div>
  )
}

export default Sidepanel