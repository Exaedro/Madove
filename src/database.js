import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true
    })
        .then(db => console.log('Db is connected'))
        .catch(err => console.log(err));
}

export default connect;
