// grab the item model we just created
var Item = require('./models/item');

    module.exports = function(app) {

        // SERVER ROUTES

        // Sample API route
        app.get('/api/items', function(req, res) {
            
            // use mongoose to get all items in the database
            Item.find(function(err, items) {

                if (err)
                    res.send(err);

                res.json(items); 
            });
        });


        // route to handle getting one record
        app.get('/api/items/:item_id', function(req, res) {
            Item.findById(req.params.item_id, function(err, item) {
                if (err)
                    res.send(err);
                res.json(item);
            });
        });


        // Editing
        app.put('/api/items/:item_id', function(req, res) {

            // use our item model to find the item we want
            Item.findById(req.params.item_id, function(err, item) {

                if (err)
                    res.send(err);

                item.name = req.body.name;  // update the items info

                // save the item
                item.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Item updated!' });
                });

            });
        });

        app.delete('/api/items/:item_id', function(req, res) {
            Item.remove({
                _id: req.params.item_id
            }, function(err, item) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/api/items', function(req, res) {

            var item = new Item();      // create a new instance of the Item model

            item.name = req.body.name;  // set the items name (comes from the request)

            // save the item and check for errors
            item.save(function(err) {
                
                if (err)
                    res.send(err);

                res.json({ message: 'Item created!' });
            });
            
        });


        // Frontend Routing
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };