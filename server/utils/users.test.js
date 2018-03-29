var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Arpit',
      room: 'Room 1'
    },{
      id: '2',
      name: 'Yash',
      room: 'Room 2'
    },{
      id: '3',
      name: 'Abi',
      room: 'Room 1'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '465465wdsda',
      name: 'Arpit',
      room: 'Room1'
    };
    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return the names of users in Room 1', () => {
    var userList = users.getUserList('Room 1');
    expect(userList).toEqual(['Arpit', 'Abi']);
  });

  it('should return the names of users in Room 2', () => {
    var userList = users.getUserList('Room 2');
    expect(userList).toEqual(['Yash']);
  });

  it('should remove user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1'
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99'
    var user = users.getUser(userId);
    expect(user).toBeFalsy();
  });
});
