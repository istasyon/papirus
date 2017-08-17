const User = require('../models/user');

module.exports = (
  criteria,
  sortProperty = 'rating',
  offset = 0,
  limit = 20
) => {
  const query = User.find(buildQuery(criteria))
    .sort({ [sortProperty]: -1 })
    .skip(+offset)
    .limit(limit);

  return Promise.all([
    query,
    User.find(buildQuery(criteria)).count()
  ]).then(results => {
    return {
      tutors: results[0],
      count: results[1]
    };
  });
};

const buildQuery = criteria => {
  const query = { isTutor: true };

  if (criteria.platform) {
    query.platform = criteria.platform;
  }

  if (criteria.hourlyRateMin && criteria.hourlyRateMax) {
    query.hourlyRate = {
      $gte: criteria.hourlyRateMin,
      $lte: criteria.hourlyRateMax
    };
  }

  return query;
};
