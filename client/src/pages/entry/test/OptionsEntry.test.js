import { render, screen} from '@testing-library/react'
import OrderEntry from '../OrderEntry'
import { rest } from 'msw'
import { server } from '../../../mocks/server'

describe("OptionsEntry container funtionality", ()=>{
    test("handles error for scoops and topping routes", async ()=>{
        //reset server handlers to set errors responses
        server.resetHandlers(
            rest.get('http://localhost:3030/scoops', (req, res, ctx)=>res(ctx.status(500))),

            rest.get('http://localhost:3030/toppings', (req, res, ctx)=>res(ctx.status(500)))
        )
        render(<OrderEntry />)
        const errorAlert = await screen.findAllByRole("alert")
        expect(errorAlert).toHaveLength(2)
    })
})