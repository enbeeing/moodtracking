const getWeekNumber = (date) => {
   return Math.ceil((Math.floor(date - (new Date(date.getFullYear(),0,1))) / (24 * 60 * 60 * 1000)) / 7)
} 

export default getWeekNumber