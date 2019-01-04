/** Core */
const core = [ 
  'color', 
  'space', 
  'width', 
  'fontSize',
]

/** Border */
const border = [
  'borders',
  'borderColor',
  'borderRadius',
]

/** Flexbox */
const flexbox = [
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
]

/** Grid */
const grid = [
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
]

/** Layout */
const layout = [
  'display',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'zIndex',
]

/** Dimension */
const dimension = [
  'space',
  'maxWidth',
  'minWidth',
  'width',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
  'size',
]

/** Background */
const background = [
  'bgColor',
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
]

/** Typography */
const typography = [ 
  'textColor',
  'textAlign',
  'verticalAlign',
  'fontSize', 
  'fontFamily', 
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'lineHeight',
]

const variant = [
  'textStyle',
  'colorStyle',
  'buttonStyle',
]

const all = [
  ...typography,
  ...background,
  ...border,
  ...dimension,
  ...layout,
  ...flexbox,
  ...grid,
  ...variant,
  'ratio',
  'opacity',
  'overflow',
]

export default all;

export {
  core,
  background,
  border,
  dimension,
  flexbox,
  grid,
  layout,
  typography,
  variant,
}
