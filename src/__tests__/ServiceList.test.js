import React from 'react';
import {render, screen } from '@testing-library/react';
import ServiceList from "../components/ServiceList";

it('renders list passed as props props', ()=>{
    render(
        <ServiceList servicesList={
        [{name: 'Test service a'}, {name: 'Test service b'}]
        }
        />)
    expect(screen.getByText('Test service a')).toBeInTheDocument()
})