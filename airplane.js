
export let availableAirplanes = [
  {name: 'AeroJet', fuelCapacity: 800, availableStaff: ['pilots','flightAttendants', 'enineers', 'medicalAssistance', 'sensorOperators'], maxSpeed: 1200, minSpeed: 300 },
   {name: 'SkyJet', fuelCapacity: 500, availableStaff: ['pilots', 'flightAttendants'], maxSpeed: 800, minSpeed: 200},
   ];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range>flightRequirements.requiredSpeedRange){
    return true;
  }else{
    return false;
  }
};

let meetsStaffRequirements = (availableStaff, requiredStaff) => {
  if(availableStaff.length>=requiredStaff){
    return true;
  }else{
    return false;
  }
}

export default meetsSpeedRangeRequirements;









