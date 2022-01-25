import React from 'react';
import Cart from "../components/Cart";
import {render, screen} from "@testing-library/react";

it('renders empty by default', ()=> {
    render(<Cart list={[]}/>)
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
})

it('shows products on list with props', ()=> {
    render(<Cart list={[{name: 'Test service A'}, {name: 'Test product B'}]} />)
    expect(screen.queryByText(/Test service A/i)).toBeInTheDocument()
})