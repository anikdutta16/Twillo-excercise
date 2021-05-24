const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');
const userPlaysDetail = require('../../src/facades/userplay.facade');

const { expect } = chai;

chai.use(chaiAsPromised);
const sandbox = sinon.createSandbox();
const mockedData = {
    "plays": [
        "E75C38C1-E2BB-BAF6-620B-9255D035B693",
        "E75C38C1-E2BB-BAF6-620B-9255D035B693",
        "68B4D809-4B4F-F735-EB92-E5B17C99220B"
    ],
    "uri": "/plays/ray_benigno"
}

describe('User Plays Detail Facade Test', async () => {
  beforeEach(async () => {
    sandbox.stub(userPlaysDetail, 'getUserPlaysDetail').returns(Promise.resolve(mockedData));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('should correctly return the users play list', async () => {
    expect(userPlaysDetail.getUserPlaysDetail('joe_example')).to.be.fulfilled;
  });

  it('Calls userPlaysDetail.getUserPlaysDetail with passed arg', async () => {
    const result = await userPlaysDetail.getUserPlaysDetail('joe_example');
    expect(result).to.deep.equal(mockedData);
  });
});
