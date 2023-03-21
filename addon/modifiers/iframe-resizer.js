import Modifier from "ember-modifier";
import { registerDestructor } from "@ember/destroyable";
import iframeResizer from "iframe-resizer/js/iframeResizer";

export default class IframeResizerModifier extends Modifier {
  element;

  constructor() {
    super(...arguments);

    registerDestructor(this, () =>
      this.element.iFrameResizer.removeListeners()
    );
  }

  iframeResizerOptions(positional, named) {
    const allPositionalArgs = positional.reduce((acc, current) => {
      return {
        ...acc,
        ...current,
      };
    }, {});

    return { ...allPositionalArgs, ...named };
  }

  modify(element, positional, named) {
    this.element = element;

    iframeResizer(this.iframeResizerOptions(positional, named), element);
  }
}
