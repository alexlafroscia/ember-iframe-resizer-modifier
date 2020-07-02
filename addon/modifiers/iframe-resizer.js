import Modifier from "ember-modifier";
import iframeResizer from "iframe-resizer/js/iframeResizer";

export default class IframeResizerModifier extends Modifier {
  get iframeResizerOptions() {
    const allPositionalArgs = this.args.positional.reduce((acc, current) => {
      return {
        ...acc,
        ...current,
      };
    }, {});

    return { ...allPositionalArgs, ...this.args.named };
  }

  didReceiveArguments() {
    iframeResizer(this.iframeResizerOptions, this.element);
  }

  willRemove() {
    this.element.iFrameResizer.removeListeners();
  }
}
