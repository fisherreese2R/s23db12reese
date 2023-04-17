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

// Handle a show one view with id specified by query
exports.house_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await house.findById( req.query.id)
    res.render('costumedetail',
   { title: 'House Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

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
exports.house_detail = async function(req, res) {
    //console.log("detail" + req.params.id)
    try {
    result = await house.findById( req.params.id)

    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Costume create on POST.
//exports.house_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: house create POST');
//};
// Handle Costume delete form on DELETE.
exports.house_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await house.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
//exports.house_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: house update PUT' + req.params.id);
//};
exports.house_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await house.findById( req.params.id)
 // Do updates of properties
 if(req.body.house_bed_bath)
 toUpdate.house_bed_bath = req.body.house_bed_bath;
 if(req.body.house_sqft) toUpdate.house_sqft = req.body.house_sqft;
 if(req.body.house_cost) toUpdate.house_cost = req.body.house_cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};