const createUser = require('../database/queries/CreateUser');
const editUser = require('../database/queries/EditUser');
const { APPLIED } = require('../config/constants');

exports.users = (req, res) => {
  res.json({ message: 'USERS' });
};

exports.getUser = (req, res) => {
  res.json({ id: req.params.id });
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, birthday, email } = req.body;
  try {
    const response = await createUser({ firstName, lastName, birthday, email });
    res.send(response);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.editUser = async (req, res) => {
  const { firstName, lastName, birthday, email } = req.body;
  try {
    const response = await editUser(req.params.id, {
      firstName,
      lastName,
      birthday,
      email
    });
    res.send(response);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.applyTutor = async (req, res) => {
  const {
    platform,
    teachingSubjects,
    videoUrl,
    description,
    experience,
    education
  } = req.body;
  try {
    const response = await editUser(req.params.id, {
      platform,
      teachingSubjects,
      videoUrl,
      description,
      experience,
      education,
      applicationDate: Date.now(),
      applicationStatus: APPLIED
    });
    res.send(response);
  } catch (err) {
    res.status(401).send(err);
  }
};
