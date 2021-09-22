const app = require("./index");

const PORT = process.env.PORT || 9090

app.listen(PORT, () => {
    console.log("Express Server started at PORT : " + PORT)
})
