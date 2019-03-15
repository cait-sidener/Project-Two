const signature = require('zoom-meeting-signature');

const API_KEY = '8Vyk5SnKSbyTbM5kN6BSDg';
const API_SECRET 'RZlM4nNX8RmC1aVuY0wfEfr2ZFNd89QN';

let sig = signature.generate(MEETING_ID, API_KEY, API_SECRET, signature.roles.PARTICIPANT)