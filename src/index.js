const SCRIPT_URL = 'https://unpkg.com/abc-select-component'

const loadScript = () => new Promise(resolve => {
  const script = document.createElement('script')
  script.src = SCRIPT_URL
  script.onload = resolve
  document.body.appendChild(script)
})

const registerComponent = () => window.customElements.define(
  'abc-select',
  window.abcselect.default
)

const initComponent = () => {
  const abcSelect = document.createElement('abc-select')
  document.body.appendChild(abcSelect)
  abcSelect.toggle()
}

const abcSelect = document.querySelector('abc-select')

if (abcSelect) {
  abcSelect.toggle()
} else {
  window.customElements.whenDefined('abc-select').then(initComponent)

  if (!window.customElements.get('abc-select')) {
    loadScript().then(registerComponent)
  }
}
