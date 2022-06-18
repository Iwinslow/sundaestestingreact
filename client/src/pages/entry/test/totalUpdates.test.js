import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Options from '../Options'

describe("The subtotals at Options components and the Total at OptionsEntry component get updated with user interactions", ()=>{
    test("update scoop subtotal when scoops change", ()=>{
        render(<Options optionType="scoops" />)
        //make sure total stats out with $0.00
        const scoopsSubtotal = screen.getByText('Scoops total: $', {exact:false})
        
        expect(scoopsSubtotal).toHaveTextContent(0.00)
        //update scoops quantity OF Mint chip to 1 and check the subtotal
        const mintChipInput = screen.getByRole('')
        //update Vanilla scoop to 2 and check subtotal

        //decrease the quantity of Mint chip scoop to 0 and check subtotal

        
    })
})