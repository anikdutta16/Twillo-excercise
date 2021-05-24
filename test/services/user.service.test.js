const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const userService = require('../../src/services/user.service');

const { expect } = chai;

chai.use(chaiAsPromised);
const sandbox = sinon.createSandbox();
const mockedData = {
  "username": "joe_example",
  "plays": 178,
  "friends": 7,
  "tracks": [
  "E75C38C1-E2BB-BAF6-620B-9255D035B693",
  "68B4D809-4B4F-F735-EB92-E5B17C99220B"
  ],
  "uri": "/users/joe_example"
}

describe('User Service Test', async () => {
  beforeEach(async () => {
    sandbox.stub(userService, 'getUserById').returns(Promise.resolve(mockedData));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('should correctly return the user information', async () => {
    expect(userService.getUserById('joe_example')).to.be.fulfilled;
  });

  it('Calls userService.getUserById with passed arg', async () => {
    const result = await userService.getUserById('joe_example');
    expect(result).to.deep.equal(mockedData);
  });
});