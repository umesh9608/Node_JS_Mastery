// console.log("routing in node js")
import http from 'http';
import { url } from 'inspector';

const server = http.createServer((req, res) => {
    // console.log(req.url); //it neeeds to refresh the browser
    // res.end(`<h1>Your request is accepted</h1>`); // Sending a response

    if (req.url === '/wdm'){
        res.end("Welcome to the web dev mastery page")
    } else if (req.url === '/srk') {
        res.end("Welcome to the Srk's page")
    } else {
        res.end("404 page not  found / Invalid URL")
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Corrected console.log
});
