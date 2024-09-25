// Model for the Roles Collection

// Import dependencies
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

// Database name
const rolesDB = mongoose.connection;

// Database connection message to print to console:
rolesDB.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'The connection to the MongoDB database could not be established. Please verify connection string and Port are correct.' });
    } else  {
        console.log('The connection to the online MongoDB database has successfully been established.');
    }
});

// Collection's schema:
const roleSchema = mongoose.Schema({
	title:          { type: String, required: true },
	awardsEarned:   { type: Number, 
                      required: true, 
                      default: 0,
                      min: [0, 'Empty value is not permitted'] },
	startDate:      { type: Date, 
                      required: true,
                      min: '2012-06-25',
                      default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "roles".
const roles = mongoose.model('roles', roleSchema);


// CREATE role using asynchronous function. Return Promise object (role).
const createRole = async (title, awardsEarned, startDate) => {
    const role = new roles({ 
        title: title, 
        awardsEarned: awardsEarned, 
        startDate: startDate 
    });
    return role.save();
}

// Async function for testing if all roles are up to date:
const retrieveRoles = async () => {
    const query = roles.find().sort({date:-1});
    return query.exec();
}

// RETRIEVE role by ID
const retrieveRoleByID = async (_id) => {
    const query = roles.findById({_id: _id});
    return query.exec();
}

// DELETE role based on ID
const deleteRoleById = async (_id) => {
    const result = await roles.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE role async function. ID is constant.
const updateRole = async (_id, title, awardsEarned, startDate) => {
    const result = await roles.replaceOne({_id: _id }, {
        title: title,
        awardsEarned: awardsEarned,
        startDate: startDate
    });
    return { 
        _id: _id, 
        title: title,
        awardsEarned: awardsEarned,
        startDate: startDate 
    }
}

// EXPORT the variables for use in the Controller file.
export { createRole, retrieveRoles, retrieveRoleByID, updateRole, deleteRoleById }