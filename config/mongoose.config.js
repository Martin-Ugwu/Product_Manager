const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlparser:true,
    useUnifiedTopology:true
})
.then(() => console.log('Established a aconnection to the database'))
.catch((err) => console.log('something went wrong when connecting to the database',
err));