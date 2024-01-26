export function calculateYearsExperience(startDate){
   const currentDate = new Date();
   return Math.floor((currentDate - startDate) / (365.25 * 24 * 60 * 60 * 1000));
}
