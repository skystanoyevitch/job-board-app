import React from 'react'
import JobList from './JobList'

describe('<JobList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<JobList />)
  })
})