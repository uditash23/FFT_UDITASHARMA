// import fs from "fs";
// fs.writeFileSync("sample.txt","Hello Udita!!");
// console.log("File Created")
// const fs = require("fs");
// fs.writeFileSync("sample.txt","Hello Udita!!");
// console.log("File Created");

// const  os = require("os");
// console.log(os.platform());

// import http from "http";
 const http = require("http");
 const server = http.createServer((req,res)=>{
res.end("Hello i'm NODE JS  Server !");
 });

 server.listen(3000);
 console.log("server is running on http://localhost:3000 ");

 const http = require("http");
 const server = http.createServer((req,res))=>{
res.end("hello everyone!");
 });
 server.listen(5000);
  console.log("server is running on http://localhost:5000 ");