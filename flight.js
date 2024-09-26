// To Do

class FlightError extends Error {
  constructor(message) {
      super(message);
      this.name = 'FlightError';
  }
}

class EngineError extends Error {
  constructor(message) {
      super(message);
      this.name = 'EngineError';
  }
}

function flight(latitude) {
  if (Math.random() > 0.75) {
      throw new EngineError('Engine is not working');
  }
  // 3000 < latitude < 10000
  if (latitude > 12000 || latitude < 3000) {
      console.log('Plane is flying at latitude: ', latitude);
      throw new FlightError('Sorry, cannot fly at this latitude');
  }
  console.log('Flying at latitude: ', latitude);
}