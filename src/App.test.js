import { render, screen } from '@testing-library/react';
import Contact from './components/Contact';

it('should render the component', () => {
    const { getByText } = render(<Contact />)

    const button = getByText('Enviar')

    expect(button).toBeInTheDocument
})