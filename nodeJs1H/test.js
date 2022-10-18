const nodemailer = require("nodemailer");
const email = {
  host: "",
  port: "",
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email);
};

// my sql db와 연결 코드
var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "example.org",
  user: "bob",
  password: "secret",
  database: "my_db",
});

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!

  // Use the connection
  connection.query("SELECT * from Test", function (error, results, fields) {
    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

app.get("/db", function (req, res) {
  res.render("about.html");
});
