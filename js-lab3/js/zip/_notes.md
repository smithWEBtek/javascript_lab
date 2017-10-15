////////////////////////////////////
  google api_key    AIzaSyDizM9ghVNRrNkFDLYjIMmWADjYVCJX1ZA

Various files for zipcodes, states and 100 miles distance from Bedford, NH
////////////////////////////////////
bedf100 

  Example: 
    bedf50[0]
    returns {zip_code: "01748", distance: 49.156, city: "Hopkinton", state: "MA"}
                               (distance from '03110')
////////////////////////////////////
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

////////////////////////////////////
zipcodes

  key is zipcode as string
  returns city, state, timezoneId

  Example: 
    zipcodes["03110"]
    {zip: "03110", city: "Bedford", state: "NH", timeZoneId: "America/New_York"}

////////////////////////////////////
 

 user enters zipcode

 let dist = function()