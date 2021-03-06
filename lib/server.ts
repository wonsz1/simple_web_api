import app from "./app";
import * as https from'https';
import * as fs from 'fs';
const PORT = 3000;

const httpsOptions = {
    key: fs.readFileSync('./config/server.key'),
    cert: fs.readFileSync('./config/server.crt')
}

https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Secure server runing');
})

// app.listen(PORT, () => {
//     console.log('server running on port ' + PORT);
// });