import React from 'react'
import { createRoot } from 'react-dom/client'
import Intro from '../src/components/Intro.jsx'

describe('Intro component', () => {
  let container, root
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
    root.render(<Intro />)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  it('renders student name and photo', () => {
    expect(container.querySelector('h2').textContent).toContain('Rodrigo Villarroel')
    const img = container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img.getAttribute('alt')).toBe('Foto profesional')
  })
})
