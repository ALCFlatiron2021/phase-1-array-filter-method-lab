function findMatching(drivers,string) {
    let answer = drivers.filter(el => el.toLowerCase() === string.toLowerCase())
    return answer
}
   
function fuzzyMatch(drivers, string) {
    return drivers
      .filter((driverName) => driverName.substring(0, string.length)  === string);
  }

  