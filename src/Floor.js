
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, Html } from '@react-three/drei'
import { useGlobalcontext } from './context'
import Length2000 from './Models/Length2000'
import Length3000 from './Models/Length3000'
import Length4000 from './Models/Length4000'
import Length5000 from './Models/Length5000'
import Length6000 from './Models/Length6000'
import Length7000 from './Models/Length7000'
import Length8000 from './Models/Length8000'
import Length9000 from './Models/Length9000'
import Length10000 from './Models/Length10000'
import Length11000 from './Models/Length11000'
import Length12000 from './Models/Length12000'
import { Menu, Separator, useContextMenu } from 'react-contexify';
import PropagateLoader from "react-spinners/PropagateLoader";
import 'react-contexify/ReactContexify.css';
const CANVAS_ID = "canvas-context-menu";

const LoadingIndicator = () => {
  return (
    <Html center>
      <PropagateLoader
        color={"#FFFFFF"}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Html>
  );
};

const Model = () => {
    const {objdata,setObjdata,setShowall,showall,setPartname,setShadowVisible}=useGlobalcontext()
    const { show, hideAll } = useContextMenu({
        id: CANVAS_ID,
      });
  return (
    <>
     <Canvas style={{ position: "relative" }} camera={[500,40,0]} onContextMenu={(event) => {
        console.log("hello");
        
    show({
      event,
      props: {
        key: 'value'
      }
    })
  }}>
        {/* <directionalLight
          position={[300, 160, -10]}
          intensity={0.1}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-300, 100, -50]}
          intensity={0.1}
          shadow-mapSize={1024}
        /> */}
        
        <directionalLight
          position={[-50, -50, 100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[50, -50, 100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[-50, -50, -100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        <directionalLight
          position={[50, -50, -100]}
          intensity={0.6}
          shadow-mapSize={1024}
        />
        {/* F4F1F1 */}
        {/* D3D3D3 */}
        {/* e6f2ff */}
        {/* E9EEFC */}
        {/* EFE8FC */}
        {/* EEEDF8 */}
        {/* F5F0F1 */}
        
        <color attach="background" args={['#EEEDF8']} />
        <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault minDistance={10} maxDistance={200} />
        <Model3d />
        {/* <axesHelper args={[2000]}/> */}

      </Canvas>
    <Menu id={CANVAS_ID} animation={false} theme='light' style={{ minWidth: "130px", padding: "5px" }}>
              {
                objdata.length > 0 && <>
                  <p className='item remove-hover' onClick={() => {
                    objdata.map((item) => {
                      item.visible = false
                    })
                    setObjdata([])
                    setShadowVisible(false)
                  }}>Hide</p>
                  <Separator />
                </>
              }
              <p className='item remove-hover' onClick={() => {
                setShowall(!showall)
                setObjdata([])
                setPartname('')
                setShadowVisible(true)
              }}>Show all</p>
              {
                objdata.length > 0 && <>
                  <Separator />
                  <p className='item remove-hover' onClick={() => {
                    objdata.map((item) => {
                      item.traverse((node) => {
                        if (node.isMesh) {
                          const material = new THREE.MeshStandardMaterial({
                            roughness: 0.3,
                            metalness: 0.4,
                            transparent: true,
                            opacity: 0.4,
                            depthWrite: false,
                          });
                          node.material = material;
                        }
                      });
                    })
                    setObjdata([])
                    setShadowVisible(false)
                  }}>Transparent</p>
                </>
              }
            </Menu>
    </>
   
  )
}

export default Model



const Model3d = () => {
    const { formData, showall,shadowvisible } = useGlobalcontext()
    // var scale;
    // const scaleMap = {
    //   2000: 5000,
    //   3000: 7000,
    //   4000: 9000,
    //   5000: 11000,
    //   6000: 13000,
    //   7000: 15000,
    //   8000: 17000,
    //   9000: 19000,
    //   10000: 21000,
    //   11000: 23000,
    //   12000: 25000,
    // };
    
    // scale = scaleMap[formData.length] || 5000;
    var scale;
    var opacity;
    switch(formData.length){
      case 2000:
        opacity=1
        scale=5000
        break
        case 3000:
        opacity=1.14
        scale=7000
        break
        case 4000:
        opacity=1.25
        scale=9000
        break
        case 5000:
        opacity=1.38
        scale=11000
        break
        case 6000:
        opacity=1.5
        scale=13000
        break
        case 7000:
        opacity=1.62
        scale=15000
        break
        case 8000:
        opacity=1.75
        scale=17000
        break
        case 9000:
        opacity=1.82
        scale=19000
        break
        case 10000:
        opacity=2.1
        scale=21000
        break
        case 11000:
        opacity=2.3
        scale=23000
        break
        case 12000:
        opacity=2.4
        scale=24000
        break

    }
    
    return (
      <Suspense key={showall} fallback={<LoadingIndicator />}>
        <Stage   shadows={{type:"contact", opacity: shadowvisible ? 2.4 : 0, scale: 24000 }}

        >
          <>
          <mesh rotation={[0, -Math.PI / 2, 0]}>
            {/* Screw Length-2000 */}
           
            {
              formData.length === 2000 && <Length2000 />
            }
  
            {/* Screw Length-3000 */}
            
            {
              formData.length === 3000 && <Length3000 />
            }
  
            {/* Screw Length-4000 */}

            
            {
              formData.length === 4000 && <Length4000 />
            }
  
            {/* Screw Length-5000 */}
            {
              formData.length === 5000 && <Length5000 />
            }
  
            {/* Screw Length-6000 */}

            {
              formData.length === 6000 && <Length6000 />
            }
  
            {/* Screw Length-7000 */}

            {
              formData.length === 7000 && <Length7000 />
            }
  
  
            {/* Screw Length-8000 */}


            
            {
              formData.length === 8000 && <Length8000 />
            }
  
            {/* Screw Length-9000 */}

            {
              formData.length === 9000 && <Length9000 />
            }
  
            {/* Screw Length-10000 */}

            {
              formData.length === 10000 && <Length10000 />
            }
  
            {/* Screw Length-11000 */}

            {
              formData.length === 11000 && <Length11000 />
            }
  
            {/* Screw Length-12000 */}
            
            {
              formData.length === 12000 && <Length12000 />
            }
          </mesh>
  
            
          </>
          {/* </Selection> */}
  
        </Stage>
  
      </Suspense>
  
  
    )
  
  
  }