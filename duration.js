/**
 * 
 * @param {Number} seconds 
 * @returns seconds turned into a date format
 */
const Duration= (seconds)=> {
    //here we are defining the breakpoint we are going to use and return
    let time2 = []
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 }
    
    //if seconds equals 0 then we return "now"
    if (seconds === 0){
        return "now"
    }


    //now we iterate the values in time
    for (let i in time) {
        /*if the parameter is greater than or equal any value in time
        we declare "value" for us to use math.floor method into parameter/all values
        in time
        then we push a new value in time2 by using th ternary operator
        if value+=vale is greater than 1 we push "' ' + i + 's' " otherwise " ' ' + i "  */
      if (seconds >= time[i]) {
        let value = Math.floor(seconds/time[i])
        time2.push(value += value > 1 ? ' ' + i + 's' : ' ' + i)
        seconds = seconds % time[i]
      }
    }
    //finally we check if time2.lenght is grather than 1, if it's the case we join it with a comma
    //then we replace any symbol with   ' and'+'$1' otherwise wqe return the first value of time2
   
    return time2.length > 1 ? time2.join(', ').replace(/,([^,]*)$/,' and'+'$1') : time2[0]
  }

console.log(  Duration(12334))