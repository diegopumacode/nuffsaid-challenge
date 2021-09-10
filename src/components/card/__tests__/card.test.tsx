import { render } from '@testing-library/react';
import Card from '../index';


test('renders content',()=>{
    const card = {
        background:"white",
        color:'black'
    }

    const component = render(<Card {...card}/>)
    console.log(component)
})