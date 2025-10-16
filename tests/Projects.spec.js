import React from 'react'
import { createRoot } from 'react-dom/client'
import Projects from '../src/components/Projects.jsx'

describe('Projects component', () => {
  let container, root
  beforeEach(() => {
    // create a fake fetch that returns sample projects
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      json: () => Promise.resolve([
        { id: 'p1', image:'/assets/project1.jpg', title:'P1', description:'D1', tech:['R'], link:'#' }
      ])
    }))

    container = document.createElement('div')
    document.body.appendChild(container)
    root = createRoot(container)
  })

  afterEach(()=> {
    document.body.removeChild(container)
  })

  it('loads and shows project cards', (done) => {
    root.render(<Projects />)
    setTimeout(() => {
      const title = container.querySelector('.card-title')
      expect(title.textContent).toBe('P1')
      done()
    }, 50)
  })
})
