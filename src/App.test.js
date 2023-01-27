import { render, screen } from '@testing-library/react';
import App from './App';
import Projects from './components/Projects';

it('should render the component', () => {
    const { getByAltText } = render(<Projects />)

    const title = getByAltText('easybank landing page project')

    expect(title).toBeInTheDocument
})