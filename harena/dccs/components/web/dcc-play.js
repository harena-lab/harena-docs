/* Mini Environment to Play
  *************************/

class DCCPlay extends DCCVisual {
  constructor() {
    super()
    this._computeRender = this._computeRender.bind(this)
  }

  connectedCallback () {
    this._script = this.innerHTML.replace('=""', '')
    const template = document.createElement('template')
    template.innerHTML =
    '<div id="presentation-dcc"><textarea style="width:85%" id="script-dcc">' +
    this._script +
    '</textarea><button id="button-render" style="width:auto">Render</button>' +
    '<div id="render-dcc"><slot></slot></div></div>'
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: 'open' })
      shadow.appendChild(template.content.cloneNode(true))
      this._setPresentation(shadow.querySelector('#presentation-dcc'))
      this._presentationIsReady()
      shadow.querySelector('#button-render')
            .addEventListener('click', this._computeRender)
      this._scriptPanel = shadow.querySelector('#script-dcc')
      this._renderPanel = shadow.querySelector('#render-dcc')
    }
    super.connectedCallback()
  }

  _computeRender() {
    console.log('=== script panel')
    console.log(this._scriptPanel)
    if (this._scriptPanel != null)
      this._renderPanel.innerHTML = this._scriptPanel.value
  }
}

(function () {
  DCC.webComponent('dcc-play', DCCPlay)
})()
