import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "fs";

const NEW_ID = "G-SWDQLSGE4Y";

for (const file of ["index.html", "docs/index.html", "README.md"]) {
  test(`${file} carries exactly the VaultKeeper measurement ID`, () => {
    const text = fs.readFileSync(file, "utf8");
    const ids = [...new Set(text.match(/G-[A-Z0-9]+/g) || [])];
    assert.deepEqual(ids, [NEW_ID]);
  });
}
