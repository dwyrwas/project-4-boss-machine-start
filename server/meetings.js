const { getAllFromDatabase, createMeeting, addToDatabase, deleteAllFromDatabase } = require("./db")

const getMeetings = (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    res.send(allMeetings);
}

const newMeeting = (req, res, next) => {
    const meetingToAdd = createMeeting();
    addToDatabase('meetings', meetingToAdd);
    res.status(201).send(meetingToAdd);
} 

const deleteMeetings = (req, res, next ) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
}

module.exports =  {getMeetings, newMeeting, deleteMeetings};