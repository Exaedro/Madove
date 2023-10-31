import mongoose from "mongoose";

const connect = () => {
    mongoose.connect("mongodb://mongo:ObR6ElQg16SARuXaeunU@containers-us-west-124.railway.app:6662", {
        useNewUrlParser: true
    })
        .then(db => console.log('Db is connected'))
        .catch(err => console.log(err));
}

export default connect;
