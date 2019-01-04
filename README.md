# prop sets for [`@rebass/components`]

Sets of props for use with [`@rebass/components`] (and [`styled-system`]).

## Usage

```js
import system from '@rebass/components'
import all from 'system-prop-sets'

// creates a Box component with all props
const Box = system({ is: 'div'}, ...all)

// creates a Button with select props
const Button = system({ 
    is: 'button',
    color: 'orange',
  },
  ...background,
  ...typography,
  ...border,
)
```

## Available sets

* **`all`** – default export
* **`core`** – `color`, `space`, `width`, `fontSize`
* **`typography`** – `textColor`, `textAlign`, `verticalAlign`, `fontSize`, `fontFamily`, `fontWeight`, `fontStyle`, `letterSpacing`, `lineHeight`
* **`background`** – `bgColor`, `background`, `backgroundImage`, `backgroundPosition`, `backgroundRepeat`, `backgroundSize`
* **`border`** – `borders`, `borderColor`, `borderRadius`
* **`dimension`** – `space`, `maxWidth`, `minWidth`, `width`, `height`, `maxHeight`, `minHeight`, `sizeWidth`, `sizeHeight`, `size`
* **`layout`** – `display`, `position`, `top`, `right`, `bottom`, `left`, `zIndex`
* **`flexbox`** – `alignItems`, `alignContent`, `justifyContent`, `flexWrap`, `flexDirection`, `flex`, `flexBasis`, `justifySelf`, `alignSelf`, `order`
* **`grid`** – `gridGap`, `gridColumnGap`, `gridRowGap`, `gridColumn`, `gridRow`, `gridAutoFlow`, `gridAutoColumns`, `gridAutoRows`, `gridTemplateColumns`, `gridTemplateRows`, `gridTemplateAreas`, `gridArea`
* **`variant`** –

## Inspiration

All of the work [Brent Jackson](https://github.com/jxnblk) and [Adam Morse](https://github.com/mrmrs) have done over the years, as well as [Varun Vachhar](https://github.com/winkerVSbecks)’s wonderful article ["Component Based Design System With Styled-System"](https://varun.ca/styled-system/) which introduced me to `styled-system-components` (now [`@rebass/components`])

[`@rebass/components`]: https://github.com/rebassjs/components
[`styled-system`]: https://github.com/jxnblk/styled-system

## Contributing

Feedback and optimizations welcome.
