import {speechSynth} from './speechSynth.js';

window.addEventListener('load', () => new main());

export class main extends EventTarget {
  constructor() {
    super();
    this.synth = null;
    
    this._init();
  }

  
  /**
   * Initializes the module.
   * @private
   * @memberOf module:@fizz/silverbullet
   */
  _init() {
    this.synth = new speechSynth();

    this.iconTargets = document.getElementById('icon-targets');
    this.iconTargets.addEventListener('mouseover', (event) => {
      const target = event.target;
      const label = target.getAttribute('aria-label');
      if (label) {
        this.synth.setUtterance(label);
        this.synth.speak();
      }
    });
  }
}
