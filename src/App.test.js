import { render, screen } from '@testing-library/react';
import App from './App';

 it.skip('should render the title', () => {
    const { getByText } = render(<App />)

    const title = getByText('Titulo')

    expect(title).toBeInTheDocument
}) 