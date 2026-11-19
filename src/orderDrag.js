export function canBeginOrderDrag({ completed, pointerType, button, fromHandle, fromControls }) {
  if (completed || fromControls) return false;
  if (pointerType === "mouse") return button === 0;
  return fromHandle;
}

export function closestOrderIndex(pointerY, rowCenters) {
  if (!Number.isFinite(pointerY) || !rowCenters.length) return -1;
  return rowCenters.reduce((best, center, index) => {
    const distance = Math.abs(pointerY - center);
    return distance < best.distance ? { index, distance } : best;
  }, { index: -1, distance: Number.POSITIVE_INFINITY }).index;
}
