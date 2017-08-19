const searchTutors = require('../database/queries/SearchTutors');

exports.tutors = async (req, res) => {
  const {
    platform,
    hourlyRateMin,
    hourlyRateMax,
    sortProperty,
    offset,
    limit,
    category
  } = req.query;
  const tutors = await searchTutors(
    { platform, hourlyRateMin, hourlyRateMax, teachingSubjects: category },
    sortProperty,
    offset,
    limit
  );
  res.json(tutors);
};
