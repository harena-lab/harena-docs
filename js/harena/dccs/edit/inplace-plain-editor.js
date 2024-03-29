/* Editor for DCC Plain Texts
  ***************************/

class EditDCCPlain {
  constructor (obj, dcc, htmlProp, field, properties) {
    if (field != null) {
      this._objProperties = obj
      this._editElement = dcc.currentPresentation()
      this._objField = field
      this._properties = properties
      this._originalEdit = this._editElement.innerHTML
      this._editElement.contentEditable = true
      this._editElement.focus()
    }
  }

  async handleConfirm () {
    this._editElement.contentEditable = false
    // <TODO> this will becone an action
    this._objProperties[this._objField] =
           this._editElement.innerHTML.trim()
             .replace(/\u200B/gm, '') // removing non printable special characters
             .replace(/(?:<br>)+$/i, '')

    await this._properties.applyProperties(false)
  }

  // <FUTURE>?
  /*
  handleCancel () {
    this._editElement.contentEditable = false
    this._editElement.innerHTML = this._originalEdit
    MessageBus.i.request('properties/cancel/short', null, null, true)
  }
  */

  /*
  async _componentEditor (htmlProp) {
    if (this._objField != null) {
      this._originalEdit = this._editElement.innerHTML
      this._editElement.contentEditable = true
    }
    if (this._objField != null) {
      this._editElement.contentEditable = false
      if (ep.clicked == 'confirm') {
        this._objProperties[this._objField] =
               this._editElement.innerHTML.trim().replace(/<br>$/i, '')
      } else { this._editElement.innerHTML = this._originalEdit }
    }
    this._handleEditorAction(ep.clicked)
  }
  */
}
