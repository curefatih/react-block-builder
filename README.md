# react-block-builder

> react block builder

[![NPM](https://img.shields.io/npm/v/react-block-builder.svg)](https://www.npmjs.com/package/react-block-builder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save block-builder
```

## Usage

```jsx
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
```
output will be

![image](https://user-images.githubusercontent.com/41006925/118379960-366b3300-b5e7-11eb-8c37-8ce1926826d3.png)

## TODO

- [ ] Draggable/Droppable blocks
- [ ] Inner block

## License

MIT © [curefatih](https://github.com/curefatih)
