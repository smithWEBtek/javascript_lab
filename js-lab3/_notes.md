
Various files for zipcodes, states and distances from Bedford, NH, Boston, MA and Worcester, MA

////////////////////////////////////////////////////////////////////////////
bost30
    all zipcodes 30 miles from Boston 02115
  Example: 
    returns {zip_code: "01748", distance: 49.156, city: "Hopkinton", state: "MA"}
                     (distance from '02115') 
////////////////////////////////////////////////////////////////////////////
worc30
    all zipcodes 30 miles from 021
  Example: 
    returns {zip_code: "01748", distance: 49.156, city: "Hopkinton", state: "MA"}
                     (distance from '02???')
////////////////////////////////////////////////////////////////////////////
bedf50:                 (from 03110)

  Example: 
    bedf50[0]
    returns {zip_code: "01748", distance: 49.156, city: "Hopkinton", state: "MA"}
                               (distance from '03110')
////////////////////////////////////////////////////////////////////////////
states

  const states = {
  "ALABAMA": "AL",
  "ALASKA": "AK",
  "ARIZONA": "AZ",
  "ARKANSAS": "AR",
  "CALIFORNIA": "CA",.......}

returns the 2 letter abbreviation
key is the state name in upper case

  Example 
    states.ALASKA
    returns: "AK"

////////////////////////////////////////////////////////////////////////////
zipcodes

  key is zipcode as string
  returns city, state, timezoneId

  Example: 
    zipcodes["03110"]
    {zip: "03110", city: "Bedford", state: "NH", timeZoneId: "America/New_York"}

////////////////////////////////////////////////////////////////////////////
 

 user enters zipcode

 let dist = function()