var Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

// function index(req,res){
//     res.send('blah')
// }

// function show(req,res){

// }
function deleteSkill(req,res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function newSkill(req,res){
    res.render('skills/new');
}

function create(req,res){
    console.log(req.body);
    req.body.learned = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function index(req,res){
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

function show(req,res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        id: req.params.id
    })
}