import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const page = fs.readFileSync(path.join(root, "app/page.tsx"), "utf8");
const layout = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8");
const allSource = `${page}\n${layout}`;

const requiredSnippets = [
  "PHAM QUOC THANH",
  "FinTech Engineer",
  "Rust/Systems Developer",
  "Data Engineering",
  "MVP Architect",
  "W9 Labs Network",
  "Crypto Herding Analysis",
  "Real Estate Scraper",
  "E-Commerce Intelligence",
  "Vocai",
  "Datathon 2026",
  "650k+ orders",
  "5x speedup",
  "4+ microservices",
  "Top 10 GPA",
  "No phone numbers on public contact",
];

for (const snippet of requiredSnippets) {
  assert(
    allSource.includes(snippet),
    `Expected portfolio source to include "${snippet}"`,
  );
}

assert.equal(
  /\+84|0889917555|889917555/.test(allSource),
  false,
  "Portfolio source must not expose the private phone number",
);

console.log("Portfolio CV content checks passed.");
