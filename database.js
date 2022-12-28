const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'ssp-ca3',
    user : 'root',
    password : 'root'
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected');
    }
});
module.exports = connection;