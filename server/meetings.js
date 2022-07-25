const { getAllFromDatabase, createMeeting, addToDatabase, deleteAllFromDatabase } = require("./db")

const getMeetings = (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    res.send(allMeetings);
}

const newMeeting = (req, res, next) => {
    const meeting = req.params.body;
    const meetingToAdd = createMeeting(meeting);
    addToDatabase('meetings', meetingToAdd);
    res.status(201).send();
    next();
} 

const deleteMeetings = (req, res, next ) => {
    const meetings = getAllFromDatabase('meetings');
    if (meetings.length === 0) {
        res.status(204).send();
        next();
    } else {
        res.status(200).send(deleteAllFromDatabase('meetings'));
        next();
    }
}

module.exports =  {getMeetings, newMeeting, deleteMeetings};