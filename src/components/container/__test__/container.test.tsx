import { render } from '@testing-library/react';
import Container from '../index';


test('renders content',()=>{
    const container = {
        display:"flex",
        justify:"center",
        align:"center",
        gap:"1",
        mt:"12",
        mb:"14",
    }

    const component = render(<Container {...container}/>)
    
})