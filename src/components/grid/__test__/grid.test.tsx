import { render } from '@testing-library/react';
import Grid from '../index';


test('renders content',()=>{
    const grid = {
        columns: 2,
        gap:2,
    }

    const component = render(<Grid {...grid}/>)
    
})