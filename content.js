'use strict';

module.exports = ('content', [])
.controller('GuestController', function(){
  this.guests= [
    {
      name: 'Glen',
      foodPref: 'seafood',
      rsvp: 'true'


    },
    {
      name: 'Dale',
      foodPref: 'pasta',
      rsvp: 'true'


    }

]
});
