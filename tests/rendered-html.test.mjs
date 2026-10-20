import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/en") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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

test("server-renders the English anatomy explorer", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Anatomy Lessons/);
  assert.match(html, /Anatomy Lessons/);
  assert.match(html, /Heart/);
  assert.match(html, /Organ library/);
  assert.match(html, /Heart interactive viewer/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("renders another supported locale", async () => {
  const response = await render("/es");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<html lang="es"/);
  assert.match(html, /anatomía/i);
});

test("renders Igbo as a fully localized route", async () => {
  const response = await render("/ig");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<html lang="ig"/);
  assert.match(html, /Mụta gbasara ahụ mmadụ/);
  assert.match(html, /Ọba akụkụ ahụ/);
  assert.match(html, /Obi/);
});
