export function generateWidth (originalWidth, originalHeight, newHeight) {
  return (originalWidth * (newHeight / originalHeight))
}

export function generateHeight (originalHeight, originalWidth, newWidth) {
  return (originalHeight * (newWidth / originalWidth))
}