const {Router} = require('express');
const router = new Router();

router.post('/test', (req,res) => {
    /**
     * Return a JSON object with the key “return_string” and a string containing every third letter from the original string.
     * If request body doesn't contain {"string_to_cut": String}, will respond with 400
     * expects JSON object {"string_to_cut": String}
     * returns JSON object {"return_string": String}
     * 
     */
    try {
        let cutPhrase ='';
        let phrase = req.body.string_to_cut;
        //TODO: check edge case if phrase.length is less less than 2
        if(phrase === undefined) {
            throw new Error("'string_to_cut' is undefined")
        }        
        for (let i = 2; i < phrase.length; i+=3) {
            cutPhrase += phrase[i]; 
        }

        res.send({
            return_string: cutPhrase
        })
    } catch(exception) {
        res.status(400).send(exception.message);
    }
})

module.exports = router;