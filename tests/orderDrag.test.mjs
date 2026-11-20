import test from "node:test";
import assert from "node:assert/strict";
import { canBeginOrderDrag, closestOrderIndex } from "../src/orderDrag.js";

test("laptop mouse dragging starts from the row but never from arrow controls", () => {
  assert.equal(canBeginOrderDrag({ completed: false, pointerType: "mouse", button: 0, fromHandle: false, fromControls: false }), true);
  assert.equal(canBeginOrderDrag({ completed: false, pointerType: "mouse", button: 0, fromHandle: false, fromControls: true }), false);
  assert.equal(canBeginOrderDrag({ completed: false, pointerType: "mouse", button: 2, fromHandle: false, fromControls: false }), false);
});

test("touch dragging stays handle-only and completed rows stay locked", () => {
  assert.equal(canBeginOrderDrag({ completed: false, pointerType: "touch", button: 0, fromHandle: false, fromControls: false }), false);
  assert.equal(canBeginOrderDrag({ completed: false, pointerType: "touch", button: 0, fromHandle: true, fromControls: false }), true);
  assert.equal(canBeginOrderDrag({ completed: true, pointerType: "mouse", button: 0, fromHandle: true, fromControls: false }), false);
});

test("dragging selects the nearest visual row", () => {
  assert.equal(closestOrderIndex(84, [20, 80, 140, 200]), 1);
  assert.equal(closestOrderIndex(181, [20, 80, 140, 200]), 3);
  assert.equal(closestOrderIndex(Number.NaN, [20, 80]), -1);
});
