// Controller for the Roles Collection

import 'dotenv/config';
import express from 'express';
import * as roles from './roles-model.mjs';

// Route code
const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller with confirmation statements:
app.post ('/roles', (req,res) => { 
    roles.createRole(
        req.body.title, 
        req.body.awardsEarned, 
        req.body.startDate
        )
        // Then method awaits promise to be fulfilled.
        .then(role => {
            console.log(`"${role.title}" was added to the collection.`);
            res.status(201).json(role);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The server failed to process the request. The suspected cause is a parameter is missing from the requesting client.' });
        });
});


// RETRIEVE controller:
app.get('/roles', (req, res) => {
    roles.retrieveRoles()
        .then(roles => { 
            if (roles !== null) {
                console.log(`All roles were retrieved from the collection.`);
                res.json(roles);
            } else {
                res.status(404).json({ Error: 'The requested role could not be found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The server failed to process the request. The suspected cause is a parameter is missing from the requesting client.' });
        });
});


// RETRIEVE by ID controller:
app.get('/roles/:_id', (req, res) => {
    roles.retrieveRoleByID(req.params._id)
    .then(role => { 
        if (roles !== null) {
            console.log(`"${role.title}" was retrieved, based on its ID.`);
            res.json(role);
        } else {
            res.status(404).json({ Error: 'The requested role could not be found in the collection.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server failed to process the request. The suspected cause is a parameter is missing from the requesting client.' });
    });

});


// UPDATE controller:
app.put('/roles/:_id', (req, res) => {
    roles.updateRole(
        req.params._id, 
        req.body.title, 
        req.body.awardsEarned, 
        req.body.startDate
    )
    .then(role => {
        console.log(`The role "${role.title}" was updated.`);
        res.json(role);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server failed to process the request. The suspected cause is a parameter is missing from the requesting client.' });
    });
});


// DELETE Controller:
app.delete('/roles/:_id', (req, res) => {
    roles.deleteRoleById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} role was deleted.`);
                res.status(200).send({ Success: 'The role was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'The requested role could not be found in the collection and therefore was not deleted.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'The server failed to process the request. The suspected cause is a parameter is missing from the requesting client.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});