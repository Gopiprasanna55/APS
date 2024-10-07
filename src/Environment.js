import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei'
export const Environment = memo(({ direction = [5, 5, 5] }) => (
  <>
  
    <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0} scale={2500} position={[0, -150, 0]} color="red">
      <RandomizedLight  amount={10}  position={direction}  />
    </AccumulativeShadows>
    <EnvironmentImpl preset="sunset" />
  </>
))