// module.exports = (req, res) => {
//   res.end(`Hi!`)
// }

const express = require('express')
const app = express()

app.use(express.static('./build'));

app.listen(process.env.PORT function () {
});
