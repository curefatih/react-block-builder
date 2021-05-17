# react-block-builder

> react block builder

[![NPM](https://img.shields.io/npm/v/react-block-builder.svg)](https://www.npmjs.com/package/react-block-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

``` bash
npm install --save block-builder
```

## Usage

### `<BlockWrapper />`
> TODO
### `<DragableBlock />`
> TODO

### `<Block />`
> TODO


``` jsx
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
```

[show output](https://www.fatihcure.com/react-block-builder/)

## TODO

* [ ] Draggable/Droppable blocks
* [ ] Inner block > initiated
* [ ] Support for initial properties
* [ ] Enable custom styling
* [ ] [suggest a todo/improvement](https://github.com/curefatih/react-block-builder/issues/new)

## License

MIT © [curefatih](https://github.com/curefatih)
