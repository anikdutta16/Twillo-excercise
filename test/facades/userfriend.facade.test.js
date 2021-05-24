const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const userFriendDetail = require('../../src/facades/userfriend.facade');

const { expect } = chai;

chai.use(chaiAsPromised);
const sandbox = sinon.createSandbox();
const mockedData = {
    friends: [
        "maranda_kjos",
        "jacquetta_hoelscher",
        "garth_coto",
        "leonor_mattis"
    ],
    uri: "/friend-detail?username=ray_benigno"
}

describe('User Friend Detail Facade Test', async () => {
  beforeEach(async () => {
    sandbox.stub(userFriendDetail, 'getUserFriendDetail').returns(Promise.resolve(mockedData));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('should correctly return the users friend list', async () => {
    expect(userFriendDetail.getUserFriendDetail('joe_example')).to.be.fulfilled;
  });

  it('Calls userFriendDetail.getUserFriendDetail with passed arg', async () => {
    const result = await userFriendDetail.getUserFriendDetail('joe_example');
    expect(result).to.deep.equal(mockedData);
  });
});