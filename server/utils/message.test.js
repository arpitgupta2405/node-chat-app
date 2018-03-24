var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should return the message object', () => {
    var res = generateMessage('Arpit','Heyy there!!');
    expect(res.from).toBe('Arpit');
    expect(res.text).toBe('Heyy there!!');
    expect(res.createdAt).toBeGreaterThan(0);
  });
});

describe('generateLocationMessage', () => {
  it('should return the current location object', () => {
    var from = 'Arpit';
    var latitude = 15;
    var longitude = 20;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var res = generateLocationMessage('Arpit',latitude,longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe(url);
    expect(res.createdAt).toBeGreaterThan(0);
  });
});
