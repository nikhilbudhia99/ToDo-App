var express = require("express");
var bodyParser = require("body-parser"); //takes json and convert to object
var { ObjectId } = require("mongodb");
var cors = require("cors");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");
var multer = require("multer");

var app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile("parctice/public/index.html");
// });

app.post("/todo/add", (req, res) => {
  //console.log(req.body)

  var todo = new Todo({
    text: req.body.text,
    createdAt: Date.now()
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/show", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todo/id", (req, res) => {
  if (!ObjectId.isValid(req.body._id)) {
    // or catch part
    return res.status(400).send("invalid id");
  }

  Todo.findById(req.body._id).then(
    todo => {
      if (!todo) {
        return res.send("id not found");
      }
      res.send(todo);
    },
    e => {
      res.send(e);
    }
  );
  //.catch((e)=>{   //or before searching findById we can check for ObjectId.isValid
  //     res.send(e)
  // })
});

app.delete("/todo/delete/id", (req, res) => {
  if (!ObjectId.isValid(req.body._id))
    return res.status(400).send("invalid id");

  Todo.findByIdAndDelete(req.body._id)
    .then(todo => {
      if (!todo) return res.send("no match of id");
      res.send(todo);
    })
    .catch(e => {
      res.status(404).send(e);
    });
});

app.patch("/todo/update/id", (req, res) => {
  if (!ObjectId.isValid(req.body._id))
    return res.status(400).send("invalid id");

  Todo.findByIdAndUpdate(
    req.body._id,
    {
      $set: {
        completed: req.body.completed
      }
    },
    {
      new: true
    }
  )
    .then(todo => {
      if (!todo) return res.send("no match of id");
      res.send(todo);
    })
    .catch(e => {
      res.status(404).send(e);
    });
  // Todo.findOneAndUpdate({
  //     _id: new ObjectId(req.body._id)
  // },{
  //     $set:{
  //         completed:req.body.completed
  //     }
  // },{
  //     new : true
  // }).then((todo)=>{
  //     if(!todo)
  //         return res.send('no match of id');
  //     res.send(todo);
  // }).catch((e)=>{
  //     res.status(404).send(e);
  // })
});

const path = require("path");
const publicOptions = {
  origin: function(origin, callback) {
    callback(null, true);
  },
  methods: "GET"
};
app.use("/public", cors(publicOptions));
app.use(express.static(path.join(__dirname, "..", "public")));

// const upload = multer({ dest: "uploads/" });
// app.post("/", upload.single("productImage"), (req, res) => {
//   console.log(req.file);
// });

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});

//9811050427
