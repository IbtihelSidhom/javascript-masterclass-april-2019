describe.skip('Strings and Arrays', () => {
  describe('Strings', () => {
    it('concatenation', () => {
      const fruit = 'apple';
      const dish = 'pie';
      expect(fruit + ' ' + dish).toEqual('apple pie');
    });

    it('character Type', () => {
      const characterType = typeof 'Amory'.charAt(1);
      expect(characterType).toEqual('string');
    });

    it('escape character', () => {
      const stringWithAnEscapedCharacter = '\u0041pple';
      expect(stringWithAnEscapedCharacter).toEqual('Apple');
    });

    describe('String as Array', () => {
      it('string.length', () => {
        const fruit = 'apple';
        expect(fruit.length).toEqual(5);
      });

      it('slice', () => {
        const fruit = 'apple pie';
        expect(fruit.slice(0, 5)).toEqual('apple');
      });
    });
  });

  describe('About Arrays', () => {
    //We shall contemplate truth by testing reality, via spec expectations.
    it('should create arrays', () => {
      const emptyArray = [];
      expect(typeof emptyArray).toEqual('object');
      expect(emptyArray.length).toEqual(0);

      const multiTypeArray = [
        0,
        1,
        'two',
        () => {
          return 3;
        },
        { value1: 4, value2: 5 },
        [6, 7],
      ];
      expect(multiTypeArray[0]).toEqual(0);
      expect(multiTypeArray[2]).toEqual('two');
      expect(multiTypeArray[3]()).toEqual(3);
      expect(multiTypeArray[4].value1).toEqual(4);
      expect(multiTypeArray[4]['value2']).toEqual(5);
      expect(multiTypeArray[5][0]).toEqual(6);
    });

    it('should understand array literals', () => {
      const array = [];

      // Oops
      expect(array).not.toEqual(false);

      expect(array).toEqual([]);

      array[0] = 1;
      expect(array).toEqual([1]);

      array[1] = 2;
      expect(array).toEqual([1, 2]);

      array.push(3);
      expect(array).toEqual([1, 2, 3]);
    });

    it('should understand array length', () => {
      let array = [1, 2, 3, 4];

      expect(array.length).toEqual(4);
      array.push(5, 6);
      expect(array.length).toEqual(6);

      array = new Array(10);
      expect(array.length).toEqual(10);

      array.length = 5;
      expect(array.length).toEqual(5);
    });

    it('should slice arrays', () => {
      const array = ['peanut', 'butter', 'and', 'jelly'];

      expect(array.slice(0, 1)).toEqual(['peanut']);
      expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
      expect(array.slice(2, 2)).toEqual([]);
      expect(array.slice(2, 20)).toEqual(['and', 'jelly']);
      expect(array.slice(3, 0)).toEqual([]);
      expect(array.slice(5, 1)).toEqual([]);
      expect(array.slice(1)).toEqual(['butter', 'and', 'jelly']);
      expect(array.slice(0, -1)).toEqual(['peanut', 'butter', 'and']);
      expect(array.slice(0, -3)).toEqual(['peanut']);
    });

    it('should know array references', () => {
      const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

      function passedByReference(refArray) {
        refArray[1] = 'changed in function';
      }

      passedByReference(array);
      expect(array[1]).toEqual('changed in function');

      const assignedArray = array;
      assignedArray[5] = 'changed in assignedArray';
      expect(array[5]).toEqual('changed in assignedArray');

      const copyOfArray = array.slice();
      copyOfArray[3] = 'changed in copyOfArray';
      expect(array[3]).toEqual('three');
    });

    it('should push and pop', () => {
      const array = [1, 2];
      array.push(3);
      expect(array).toEqual([1, 2, 3]);

      const poppedValue = array.pop();
      expect(poppedValue).toEqual(3);
      expect(array).toEqual([1,2]);
    });
  });
});
