import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("index.html exists and includes the game title", () => {
  const html = readFileSync("index.html", "utf8");
  assert.match(html, /MockPets Battle Arena/);
});

test("CNAME is present for GitHub Pages", () => {
  const cname = readFileSync("CNAME", "utf8").trim();
  assert.ok(cname.length > 0);
});
