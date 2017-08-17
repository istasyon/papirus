const searchTutors = require('../database/queries/SearchTutors');

exports.tutors = async (req, res) => {
  const tutorLength = req.query.length || 0;
  const tutors = await searchTutors(tutorLength);
  res.json({ tutors });
};
