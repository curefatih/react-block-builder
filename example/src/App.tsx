import React from 'react'

import { BlockWrapper, Block } from 'block-builder'
import 'block-builder/dist/index.css'

const App = () => {
  return (
    <div className="" style={{ margin: "0 auto", height: "500px", width: "500px" }}>
      <BlockWrapper
        blockStyle={{
          height: "100px"
        }}
      >
        {(value: DOMRect) =>
          <>
            Your components
            <Block head="Heading" allowInner parentPos={value} style={{ width: 300 }}>
              Also your components
            </Block>
          </>
        }
      </BlockWrapper>
    </div>
  )
}

export default App
