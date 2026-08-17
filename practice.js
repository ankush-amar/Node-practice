const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers);

    if(req.url === '/home'){
        res.write('<h1>Welcome Home</h1>');
        return res.end();
    }else if(req.url === '/men'){
        res.write('<h1>Welcome to Mens page</h1>');
        return res.end();
    }else if(req.url === '/women'){
        res.write('<h1>Welcome to womens page</h1>');
        return res.end();    
    }else if(req.url === '/kids'){
        res.write('<h1>Welcome to Kids section</h1>');
        return res.end();
    }else if(req.url === '/cart'){
        res.write('<h1>Go to cart</h1>');
        return res.end();
    }else if(req.url === '/sales'){
        res.write('<h1>Sale is Live!');
        return res.end();
    }else if(req.url === '/special'){
        res.write('<h1>Some special offer for you');
        return res.end();
    }

    res.write(`
        <html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/sales">Sale</a></li>
                <li><a href="/special">Special</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
    `);
    res.end();   

});

server.listen(3000, () => {
    console.log(`Server running on address http://localhost:3000`);
});