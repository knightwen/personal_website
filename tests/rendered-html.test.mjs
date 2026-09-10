import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the personal portfolio with navigation and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Wen Zhou/);
  assert.match(html, /Computational Civil Engineer/);
  assert.match(html, /我用计算、仿真与软件/);
  for (const section of ["home", "work", "about", "resume", "contact"]) {
    assert.ok(html.includes(`id="${section}"`), `Missing ${section} section`);
  }
  assert.match(html, /Language switcher/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/favicon.svg", import.meta.url));
});
