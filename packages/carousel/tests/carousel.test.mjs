import assert from "node:assert/strict";
import { test } from "node:test";

import {
  clampIndex,
  getSlideWidth,
  getSnapOffsets,
  indexFromOffset,
} from "../src/utils/carousel.utils.ts";

test("indices remain bounded with empty, shrinking, and invalid data", () => {
  assert.equal(clampIndex(4, 0), 0);
  assert.equal(clampIndex(4, 3), 2);
  assert.equal(clampIndex(-2, 5), 0);
  assert.equal(clampIndex(1.9, 5), 1);
  for (const value of [NaN, Infinity, -Infinity])
    assert.equal(clampIndex(value, 5), 0);
});

test("native offsets settle at the nearest slide and respect boundaries", () => {
  assert.equal(indexFromOffset(149, 300, 5), 0);
  assert.equal(indexFromOffset(151, 300, 5), 1);
  assert.equal(indexFromOffset(-40, 300, 5), 0);
  assert.equal(indexFromOffset(9999, 300, 5), 4);
  assert.equal(indexFromOffset(300, 0, 5), 0);
  assert.equal(indexFromOffset(300, 300, 0), 0);
});

test("peek geometry leaves the final slide at a reachable snap offset after resize", () => {
  for (const viewport of [96, 240, 320, 768]) {
    for (const peek of [0, 32, 900]) {
      const gap = 12;
      const slide = getSlideWidth(viewport, peek, gap);
      const stride = slide + gap;
      assert.ok(slide >= 1 && slide <= viewport);
      for (const count of [1, 2, 5, 12]) {
        const endInset = viewport - slide;
        const offsets = getSnapOffsets(count, stride, endInset);
        const content = count * slide + (count - 1) * gap;
        assert.equal(offsets.at(-1), Math.max(0, content - viewport));
        for (let index = 0; index < count; index++) {
          assert.equal(
            indexFromOffset(offsets[index], stride, count, endInset),
            index,
          );
          if (index > 0) assert.ok(offsets[index] > offsets[index - 1]);
        }
      }
    }
  }
});

test("the last slide leaves a left peek and changes index at the final snap midpoint", () => {
  const viewport = 320;
  const peek = 32;
  const gap = 12;
  const slide = getSlideWidth(viewport, peek, gap);
  const stride = slide + gap;
  const endInset = viewport - slide;
  const offsets = getSnapOffsets(3, stride, endInset);
  const finalOffset = offsets[2];
  assert.equal(2 * stride - finalOffset, peek + gap);
  assert.equal(stride + slide - finalOffset, peek);
  assert.equal(2 * stride + slide - finalOffset, viewport);
  const midpoint = (offsets[1] + finalOffset) / 2;
  assert.equal(indexFromOffset(midpoint - 1, stride, 3, endInset), 1);
  assert.equal(indexFromOffset(midpoint, stride, 3, endInset), 2);
  assert.equal(indexFromOffset(midpoint + 1, stride, 3, endInset), 2);
});

test("invalid preview values use full width", () => {
  for (const peek of [NaN, Infinity, -20])
    assert.equal(getSlideWidth(320, peek, 12), 320);
});

test("middle slides snap to the viewport center and update at each midpoint", () => {
  for (const viewport of [96, 320, 768]) {
    const slide = getSlideWidth(viewport, 32, 12);
    const stride = slide + 12;
    const endInset = viewport - slide;
    const count = 5;
    const offsets = getSnapOffsets(count, stride, endInset);
    assert.equal(offsets[0], 0);
    for (let index = 1; index < count - 1; index++) {
      const left = index * stride - offsets[index];
      const right = viewport - left - slide;
      assert.equal(left, right);
    }
    for (let index = 0; index < count - 1; index++) {
      const midpoint = (offsets[index] + offsets[index + 1]) / 2;
      assert.equal(
        indexFromOffset(midpoint - 0.1, stride, count, endInset),
        index,
      );
      assert.equal(
        indexFromOffset(midpoint, stride, count, endInset),
        index + 1,
      );
    }
  }
});
