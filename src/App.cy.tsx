import App from './App'

describe('App.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<App />)
    .get('a').contains('Learn React')
  })
})