import { render } from '@testing-library/react';
import {CustomButton} from '../index';


test('renders content',()=>{
    const button = {
        background:"white",
    }

    const component = render(<CustomButton {...button}/>)
    console.log(component)
})