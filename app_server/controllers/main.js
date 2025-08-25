/*Get HomePage*/
const index = (req,res) => {
    res.render('index',{title : 'Smart Convenient Store'})
};
module.exports = {
    index
}