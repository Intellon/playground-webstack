const { connect, disconnect } = require('../config/db.config');
const { TimeStamp } = require('../model/task.model');
const logger = require('../logger/api.logger');

class TimeStampRepository {

    constructor() {
        connect();
    }

    async getTimeStamps() {
        const timeStamps = await TimeStamp.find({});
        console.log('tasks:::', timeStamps);
        return timeStamps;
    }

    async createTimeStamp(timeStamp) {
        let data = {};
        try {
            data = await TimeStamp.create(timeStamp);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateTimeStamp(timeStamp) {
        let data = {};
        try {
            data = await TimeStamp.updateOne(timeStamp);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTimeStamp(timeStampId) {
        let data = {};
        try {
            data = await TimeStamp.deleteOne({_id : timeStampId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new TimeStampRepository();