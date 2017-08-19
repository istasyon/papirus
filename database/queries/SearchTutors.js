const User = require('../models/user');

module.exports = (
  criteria,
  sortProperty = 'rating desc',
  offset = 0,
  limit = 20
) => {
  let sortType;
  switch (sortProperty) {
    case 'rating desc':
      sortType = { rating: -1 };
      break;
    case 'rating asc':
      sortType = { rating: 1 };
      break;
    case 'hourly desc':
      sortType = { hourlyRate: -1 };
      break;
    case 'hourly asc':
      sortType = { hourlyRate: 1 };
      break;
    default:
      sortType = { rating: -1 };
  }
  const query = User.find(buildQuery(criteria))
    .sort(sortType)
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
