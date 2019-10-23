describe.skip('Basics JavaScript concepts', () => {
  describe('About Equality', () => {
    it('numeric equality', () => {
      expect(3 == 4).toEqual(false);
    });

    it('string equality', () => {
      expect('3' == '7').toEqual(false);
    });

    it('equality without type coercion', () => {
      expect(3 == '3').toEqual(true);
    });

    it('equality with type coercion', () => {
      expect(3 == '3').toEqual(true);
      expect(3 === '3').toEqual(false);
    });

    it('equality with object', () => {
      const vic = { name: 'Vic' };
      const milen = vic;
      expect(vic === milen).toEqual(true);
      expect(vic === { name: 'Vic' }).toEqual(false);
    });

    it('Are 2 strings equal?', () => {
      const apple = 'apple';
      expect('apple' === apple).toEqual(true);
    });

    it('How about NaN', () => {
      expect(NaN === NaN).toEqual(false);
    });
  });

  describe('About Truthyness', () => {
    it('truthyness of positive numbers', () => {
      const oneIsTruthy = 1 ? true : false;
      expect(oneIsTruthy).toEqual(true);
    });

    it('truthyness of negative numbers', () => {
      const negativeOneIsTruthy = -1 ? true : false;
      expect(negativeOneIsTruthy).toEqual(true);
    });

    it('truthyness of zero', () => {
      const zeroIsTruthy = 0 ? true : false;
      expect(zeroIsTruthy).toEqual(false);
    });

    it('truthyness of null', () => {
      const nullIsTruthy = null ? true : false;
      expect(nullIsTruthy).toEqual(false);
    });

    it('null coalescing', () => {
      const result = null || 'a value';
      expect(result).toEqual('a value');
    });
  });
});
