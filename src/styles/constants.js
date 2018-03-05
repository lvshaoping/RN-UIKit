
/** 像素密度 */
export const density = PixelRatio.get() > 2 ? 2 : PixelRatio.get()

export const fixPx = (_px: number): number => {
  return PixelRatio.roundToNearestPixel(_px / density)
}
/** 屏幕宽度 */
export const width = Dimensions.get('window').width;
/** 屏幕高度 */

export const height = Dimensions.get('window').height;
