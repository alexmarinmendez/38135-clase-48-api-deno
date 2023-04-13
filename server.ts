import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import apiRoutes from "./routes/index.routes.ts"

const app = new Application()

// app.use(ctx => {
//     ctx.response.type = "text/html"
//     ctx.response.body = "<h1>Hola Mundo en HTML desde Deno!</h1>"
// })

app.use(apiRoutes.routes())

await app.listen({ port: 8080 })
console.log('Server Up')