# `system-prop-sets`

Extended sets of props for use with [Styled System].

## Exports

* `system` — everything
* `layout`
* `skin`
* `typography`
* `positioning`
* `grid`
* `flexbox`
* `backgrounds`

## Usage

```js
import { system } from 'system-prop-sets'
import { styled, typography } from '@emotion/styled'

export const Box = styled.div(system)

export const Text = styled.span(typography)
```

## Contributing

Feedback and optimizations welcome.

[Styled System]: https://styled-system.com
