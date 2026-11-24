import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";

const NEW_ID = "G-SWDQLSGE4Y";

for (const file of ["index.html", "docs/index.html"]) {
  test(`${file} carries exactly one gtag snippet with the VaultKeeper measurement ID`, () => {
    const text = fs.readFileSync(file, "utf8");
    assert.equal((text.match(new RegExp(`gtag/js\\?id=${NEW_ID}`)) || []).length, 1);
    assert.equal((text.match(new RegExp(NEW_ID, "g")) || []).length, 2);
  });
  test(`${file} wires the site_click tracker`, () => {
    const text = fs.readFileSync(file, "utf8");
    assert.match(text, /function trackClick\(/);
    assert.match(text, /gtag\('event', 'site_click'/);
    assert.match(text, new RegExp(`gtag\\('config', '${NEW_ID}'`));
  });
}

test("README names the VaultKeeper measurement ID exactly once", () => {
  const text = fs.readFileSync("README.md", "utf8");
  assert.equal((text.match(new RegExp(NEW_ID, "g")) || []).length, 1);
});
