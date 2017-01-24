// Seconds
Number.prototype.seconds = function(){
  return this * 1000;
};
Number.prototype.second = Number.prototype.seconds;

// Minutes
Number.prototype.minutes = function(){
  return this * 60000;
};
Number.prototype.minute = Number.prototype.minutes;

// Hour
Number.prototype.hours = function(){
  return this * 3600000;
};
Number.prototype.hour = Number.prototype.hours;

// Day
Number.prototype.days = function(){
  return this * 86400000;
};
Number.prototype.day = Number.prototype.days;

// Week
Number.prototype.weeks = function(){
  return this * 604800000;
};
Number.prototype.week = Number.prototype.weeks;

// In_seconds
Number.prototype.inSeconds = function(){
  return this / 1000;
}

// In_minutes
Number.prototype.inMinutes = function(){
  return this / 60000;
}

// In_hours
Number.prototype.inHours = function(){
  return this / 3600000;
}

// In_days
Number.prototype.inDays = function(){
  return this / 86400000;
}

// At_beginning_of_day
Date.prototype.atBeginningOfDay = function(){
  var offset = -(this.getTimezoneOffset() / 60);
  return new Date(this.setHours(0,0,0,0) + (offset * 3600000));
}
Date.prototype.atEndOfDay = function(){
  var offset = -(this.getTimezoneOffset() / 60);
  return new Date(this.setHours(23,59,59,999) + (offset * 3600000));
}

// At_beginning_of_week
Date.prototype.atBeginningOfWeek = function(){
  diff = this.getDate() - this.getDay() + (this.getDay() == 0 ? -6:1); // adjust when day is sunday
  return (new Date(this.setDate(diff))).atBeginningOfDay();
}
// Date.prototype.atEndOfWeek = function(){
// }

// // // At_beginning_of_year
// Date.prototype.atBeginningOfYear = function(){
//   var offset = -(this.getTimezoneOffset() / 60);
//   return new Date(this.setHours(0,0,0,0) + (offset * 3600000));
// }
// Date.prototype.atEndOfYear = function(){
//   var offset = -(this.getTimezoneOffset() / 60);
//   return new Date(this.setHours(23,59,59,999) + (offset * 3600000));
// }
