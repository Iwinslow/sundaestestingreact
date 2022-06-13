// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers =[
    //handlerType.method('routeURL', (req, res,ctx)=>{})
    rest.get("http://localhost:3030/scoops", (req, res, ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {
                "name": "Mint chip",
                "imagePath": "/images/mint-chip.png" 
                },
                {
                "name": "Vanilla",
                "imagePath": "/images/vanilla.png" 
                },
            ])
        )
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "name": "M&Ms",
                    "imagePath": "/images/m-and-ms.png"
                  },
                  {
                    "name": "Hot fudge",
                    "imagePath": "/images/hot-fudge.png"
                  },
                  {
                    "name": "Peanut butter cups",
                    "imagePath": "/images/peanut-butter-cups.png"
                  },
            ])
        )
    })
]