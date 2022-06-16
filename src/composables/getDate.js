import getWeekNumber from "./getWeekNumber";

const getDate = () => {
    const now = new Date();

    const date = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDay(),
        date: now.getDate(),
        week: getWeekNumber(now),
        hour: now.getHours(),
        min: now.getMinutes()
    }

    return date
} 

export default getDate