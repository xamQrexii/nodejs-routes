const express = require('express');

const app = express();

// Init middleware
app.use(express.json({ extended: false }));

// create route
app.get('/', (req, res) => {
    // res.send('It works!!')
    res.json({
        success: true,
        msg: "It works GET Route"
    });
});

app.post('/', (req, res) => {
    // res.send('It works, POST Route')
    console.log(req.body);
    res.json({
        success: true,
        msg: "It works POST Route"
    })
})

app.put('/', (req, res) => {
    
    const { username, password } = req.body;

    if (!username) {
        return res.status(400).json({
            success: false,
            msg: "Please provide username"
        })
    }

    if (username === "rashidbhai" && password === "909090") {
        return res.json({
            success: true,
            msg: "Record updated successfully!"
        })
    }

    return res.status(400).json({
        success: false,
        msg: "Invalid credentials"
    })

})

app.delete('/:id', (req, res) => {

    // if (!req.params.id) {
    //     return res.status(400).json({
    //         success: false,
    //         msg: "Please provide ID"
    //     })
    // }

    if (req.params.id === "1234") {
        return res.json({
            success: true,
            msg: "Record deleted successfully"
        })
    } 

    return res.status(400).json({
        success: false,
        msg: "ID is not valid"
    })

})

// define port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
