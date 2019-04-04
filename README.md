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
import styled from '@emotion/styled'
import { system, typography } from 'system-prop-sets'

export const Box = styled.div(system)

export const Text = styled.span(typography)
```

## Contributing

Feedback and optimizations welcome.

[Styled System]: https://styled-system.com
