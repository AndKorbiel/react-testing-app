import React from 'react';
import Cart from "../components/Cart";
import {render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer'

it('renders empty by default', ()=> {
    render(<Cart list={[]}/>)
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
})

it('shows products on list with props', ()=> {
    render(<Cart list={[{name: 'Test service A'}, {name: 'Test product B'}]} />)
    expect(screen.queryByText(/Test service A/i)).toBeInTheDocument()
})

// snapshot tests
it('matches snapshot without props', ()=> {
    const tree = renderer
        .create(<Cart list={[]} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('matches snapshot with props', ()=> {
    const tree = renderer
        .create(<Cart list={[{name: 'Test service A'}, {name: 'Test product B'}]} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})