import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Modifier | iframe-resizer", function (hooks) {
  setupRenderingTest(hooks);

  test("it attaches the resizer to an `iframe`", async function (assert) {
    await render(hbs`
      <iframe src="/iframe.html" {{iframe-resizer}}></iframe>
    `);

    await assert.waitFor(() => {
      assert
        .dom("iframe")
        .hasStyle({ height: "100px" }, "`iframe` has height from contents");
    });
  });
});
