import {
  compose,
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  top,
  verticalAlign,
  width,
  zIndex,
} from 'styled-system'

export const typography = compose(
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
)

export const backgrounds = compose(
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
)

export const positioning = compose(
  bottom,
  left,
  position,
  right,
  top,
  zIndex,
)

export const flexbox = compose(
  alignContent,
  alignItems,
  alignSelf,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
  order,
)

export const grid = compose(
  display,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
)

export const skin = compose(
  backgrounds,
  borders,
  boxShadow,
  opacity,
  typography,
)

export const layout = compose(
  display,
  flexbox,
  grid,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  positioning,
  size,
  space,
  verticalAlign,
  width,
)

export const system = compose(skin, layout)
