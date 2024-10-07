import React from 'react'
import { useGlobalcontext } from '../context'
import Scene from './Scene'


const Length3000 = () => {
    const {formData,partname}=useGlobalcontext()
  return (

        <>

          {
            formData.diameter == 200 ? <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={(partname == "Trough Section 3000 Ø200 Rotor Carbon Steel")||(partname == "Trough Section 3000 Ø200 Rotor Stainless Steel") ? "#08F3E7" : "#838486"} /> : 
            <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180 / 180, Math.PI*180/180, 0]} position={[0, 100, 2600]}  hexcolor={(partname == "Trough Section 3000 Ø300 Rotor Carbon Steel")||(partname == "Trough Section 3000 Ø300 Rotor Stainless Steel") ? "#08F3E7" : "#838486"} />
          }
          {
            formData.diameter == 200 ? <Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -445]} hexcolor={partname == "Vagen R Drive Station Ø200 2.2kW" ? "#08F3E7" : "#4e96ae"} /> : <Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[Math.PI * 180 / 180, 0, 0]} position={[15, 127, -611.5]} hexcolor={partname == "Vagen R Drive Station Ø300 3kW" ? "#08F3E7" : "#4e96ae"} />
          }
          {
            formData.diameter == 200 ?
              <>
                
                   <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1 - 250]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} />
                
                {
                  formData.inletqty == 2 &&
                  <>
                    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp2 - 250]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} name="inletqty"/>
                  </>
                }
                {
                  formData.inletqty == 3 &&
                  <>
                    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp2 - 250]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} name="inletqty"/>
                    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp3 - 250]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} name="inletqty"/>
                  </>
                }
              </>
              :
              <>
                
                   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,296, formData.inletp1 - 200]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} />
                
                {
                  formData.inletqty == 2 &&
                  <>
                    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,296, formData.inletp2 - 200]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"}  name="inletqty"/>
                  </>
                }
                {
                  formData.inletqty == 3 &&
                  <>
                    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,296, formData.inletp2 - 200]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"}  name="inletqty"/>
                    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,296, formData.inletp3 - 200]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"}  name="inletqty"/>
                  </>
                }
              </>
          }

          {
            formData.diameter == 200 ?
              <>
                
                  <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, -formData.outletp1 +2477]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} />
                
                {
                  formData.outletqty == 2 &&
                  <>
                    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, -formData.outletp2+2477]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} name="outletqty"/>
                  </>
                }
                {
                  formData.outletqty == 3 &&
                  <>
                    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, -formData.outletp2+ 2477]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} name="outletqty" />
                    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, -formData.outletp3+2477]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} name="outletqty" />
                  </>
                }
              </>
              :
              <>
                
                   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, -formData.outletp1+2427]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} />
                
                {
                  formData.outletqty == 2 &&
                  <>
                    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, -formData.outletp2+2427]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} name="outletqty"/>
                  </>
                }
                {
                  formData.outletqty == 3 &&
                  <>
                    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, -formData.outletp2+2427]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"}  name="outletqty"/>
                    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, -formData.outletp3+2427]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"}  name="outletqty"/>
                  </>
                }
              </>
          }
          {
            formData.diameter == 200 ? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 110, 2577]} hexcolor={partname == "Vagen R End station Ø200" ? "#08F3E7" : "#C0C0C0"} /> : <Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105, 2580]} hexcolor={partname == "Vagen R End station Ø300" ? "#08F3E7" : "#C0C0C0"} />
          }
        </>
      
  )
}

export default Length3000