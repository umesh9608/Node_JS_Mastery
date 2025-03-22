. node.js is a runtime environment that allows javaScript ti run outside the browser, built on crome's v8 engine
. it use event-driven, non-blocking i/o model, making it effecient for scalable application'
. ideal for building server-side application like APIs , reat-time appps, and microservices
. runs on multiple platforms and uses nmp for naaging pakages


**************
if we not want to run again again node index.js run the we install npm i -g nodemon  and check version by  nodemon --version  and now ve use nodemon index.js

//now i want to install node.js use npm init  (now install package.json file)
(Use npm init if you want to customize the package.json file.
Use npm init -y if you want to quickly generate a package.json file with default values.)

. for dawnload express press npm i express







mongoose.connect(
    "mongodb+srv://umeshkumarhzb145:jeQdpI02MXu6pdiD@cluster0.uci4l.mongodb.net/",
    {
        dbName: "Nodejs_Course",
    }
).then(() => console.log("MonogDB connected"))
.catch((err) => console.log(err));