const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers);
    res.write(`
        <html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <hread>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">🛒</a></li>
            </ul>
        </nav>
    </hread>
</body>
</html>
    `);   

});

server.listen(3000, () => {
    console.log(`Server running on address http://localhost:3000`);
});