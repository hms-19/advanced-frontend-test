
import FabricDetail from '@/components/Fabric/FabricDetail'
import React from 'react'

const page = ({ params }: { params: { fabricId: string } }) => {
  const { fabricId } = params;
  
  return (
    <>
      <FabricDetail fabricId={fabricId} />
    </>
  )
}

export default page