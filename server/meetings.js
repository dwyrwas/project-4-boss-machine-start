const { getAllFromDatabase, createMeeting, addToDatabase, deleteAllFromDatabase } = require("./db")

const getMeetings = (req, res, next) => {
    const allMeetings = getAllFromDatabase('meetings');
    req.JSON(allMeetings);
    next();
}

const newMeeting = (req, res, next) => {
    const meeting = req.params;
    const meetingToAdd = createMeeting(meeting);
    addToDatabase('meetings', meetingToAdd);
    res.status(200);
    next();
} 

const deleteMeetings = (req, res, next ) => {
    const meetingToDelete = req.params;
    deleteAllFromDatabase('meetings', meetingToDelete);
    res.status(200);
    next();
}

export default {getMeetings, newMeeting, deleteMeetings};