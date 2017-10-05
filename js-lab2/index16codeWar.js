let bf1 = { sourceIP: '87.98.231.40', successful: false };
let bf2 = { sourceIP: '87.98.231.42', successful: true };
let bf3 = { sourceIP: '87.98.231.42', successful: true };

const attempts = {}

function bfd(loginRequest){
  let sourceIP = loginRequest.sourceIP
  let success = loginRequest.successful

  if (attempts[sourceIP] && attempts[sourceIP] < 3){
    attempts[sourceIP] += 1
    return false
  } else {
    if (!attempts[sourceIP]){
      attempts[sourceIP] = 1
      return false
  } else {
    if (attempts[sourceIP] === 3)
    return true;
    }
  }
}