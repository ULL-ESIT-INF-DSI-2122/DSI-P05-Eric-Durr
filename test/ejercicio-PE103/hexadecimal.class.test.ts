import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Hexadecimal } from '../../src/ejercicio-PE103/hexadecimal.class'; // eslint-disable-line
describe('Hexadecimal tests', () => {
  describe('Hexadecimal basic class is created', () => {
    it('Hexadecimal class should implement ToNatural interface', () => {
      expect('valueOf' in Hexadecimal).to.be.true;
    });
    it('Hexadecimal class should implement ToStringValue interface', () => {
      expect('toString' in Hexadecimal).to.be.true;
    });
  });

  describe('Creating objects from Hexadecimal class', () => {
    const objA: Hexadecimal = new Hexadecimal(38);
    const objB: Hexadecimal = new Hexadecimal(23);
    const objC: Hexadecimal = new Hexadecimal(15);

    it('Hexadecimal object can be outputed as string', () => {
      expect(objA.toString()).to.eq('0x26');
    });
    it('Hexadecimal object number value can be extracted', () => {
      expect(objA.valueOf()).to.eq(38);
    });
    it('Two hexadecimal objects can be added returning an Hexadecimal', () => {
      expect(objB.add(objC).valueOf()).to.eq(38);
      expect(objB.add(objC).toString()).to.eq('0x26');
    });

    it('Any hexadecimal string can be turned into a number through Hexadecimal class', () => {
      expect(objA.parse('0x26')).to.eq(38);
    });
  });
});
