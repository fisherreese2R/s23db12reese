var house = require('../models/house');

// List of all Costumes
exports.house_list = async function(req, res) 
{
    try
    {
        theHouses = await house.find();
        res.send(theHouses);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) 
{
    try
    {
        theHouses = await house.find();
        res.render('Houses', { title: 'Houses Search Results', results: theHouses });
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}
// Handle Costume create on POST.
exports.house_create_post = async function(req, res) 
{
    console.log(req.body)
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.house_bed_bath = req.body.house_bed_bath;
    document.house_sqft = req.body.house_sqft;
    document.house_cost = req.body.house_cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Costume.
exports.house_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: house detail: ' + req.params.id);
};
// Handle Costume create on POST.
//exports.house_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: house create POST');
//};
// Handle Costume delete form on DELETE.
exports.house_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.house_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: house update PUT' + req.params.id);
};