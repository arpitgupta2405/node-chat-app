var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should return the message object', () => {
    var res = generateMessage('Arpit','Heyy there!!');
    expect(res.from).toBe('Arpit')
    expect(res.text).toBe('Heyy there!!')
    expect(res.createdAt).toBeGreaterThan(0)
  });
});
