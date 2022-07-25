const { getAllFromDatabase } = require("./db")

const getMeetings = (req, res, next) => {
    getAllFromDatabase('meeting');
}

const newMeeting = (req, res, next) => {

} 

const deleteMeetings = (req, res, next ) => {

}
