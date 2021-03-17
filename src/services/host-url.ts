const ENV = process.env.REACT_APP_ENV;

export let HOST_URL = 'http://localhost:8092';

if (ENV === 'dev') {
  console.log('debug2');
  HOST_URL = 'http://localhost:8093';
} else if(ENV === 'prod') {
  HOST_URL = 'http://localhost:8094';
}
