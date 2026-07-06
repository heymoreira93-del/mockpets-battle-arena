import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const cname = readFileSync("CNAME", "utf8").trim();

assert.match(html, /^<!DOCTYPE html>/i, "index.html must start with a doctype");
assert.match(html, /<title>MockPets Battle Arena/i, "index.html must include the game title");
assert.match(html, /<\/html>\s*$/i, "index.html must be a complete document");
assert.match(html, /id="screen-title"/, "index.html must include the title screen");
assert.match(html, /id="screen-arena"/, "index.html must include the arena screen");
assert.ok(cname.length > 0, "CNAME must not be empty");

console.log("Site structure check passed");
