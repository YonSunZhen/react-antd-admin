const ENV = process.env.REACT_APP_ENV;

export let HOST_URL = 'http://localhost:8092';

if (ENV === 'dev') {
  HOST_URL = 'http://localhost:8081';
} else if(ENV === 'prod') {
  HOST_URL = 'http://localhost:8094';
}
