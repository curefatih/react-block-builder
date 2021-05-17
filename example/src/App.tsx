import React from 'react'

import { Block, BlockWrapper, DragableBlock } from 'block-builder'
import 'block-builder/dist/index.css'

const App = () => {
  return (
    <div style={{ margin: "0 auto", height: "500px", width: "500px" }}>
      <BlockWrapper
        blockStyle={{
          height: "100px",
          border: "1px solid #333"
        }}
      >
        {(value: DOMRect) =>
          <>
            Your components
            <DragableBlock head="Heading" allowInner parentPos={value} style={{ width: 300 }}>
              inner components
              <Block head="Allowing content" allowInner style={{ width: "100%" }}>components</Block>
              <Block head="I am not allowing content" style={{ width: "100%" }}>components</Block>
            </DragableBlock>
            <DragableBlock head="Heading" allowInner parentPos={value} style={{ width: 300 }}>
              components
            </DragableBlock>
          </>
        }
      </BlockWrapper>
    </div>
  )
}

export default App
