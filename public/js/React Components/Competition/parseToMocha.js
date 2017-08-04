const parseToMocha = (obj, name) => {
  const parsed = `
      const expect = chai.expect;
      mocha.setup('bdd');

      describe('${name}', () => {`;

  return `${Object.entries(obj).reduce((prev, curr) => `${prev}
        it('${curr[0]} to be ${curr[1]}', () => {
          expect(${curr[0]}).to.equal(${curr[1]});
        });`, parsed)}
      });
      mocha.run();
  `;
};

export default parseToMocha;
