const awesomeFunction = (req, res, next)=>{
    res.json('Abigail Swanson!');
  };

  const anotherPerson = (req, res, next)=>{
    res.json('Abigail Swanson!')
  }

  module.exports = {awesomeFunction, anotherPerson};