describe('About Functions', () => {
  it('should declare function: add', () => {
    function add(a,b){
      return a+b;
    }
    expect(add(1, 2)).toEqual(3);
  });

  it('should know internal variables override outer variables', () => {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      message = 'Inner';
      return message;
    }

    expect(getMessage()).toEqual('Outer');
    expect(overrideMessage()).toEqual('Inner');
    expect(message).toEqual('Inner');
  });

  it('should have lexical scoping', () => {
    let variable = 'top-level';
    function parentfunction() {
      let variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toEqual('local');
  });

  it('should use lexical scoping to synthesise functions', () => {
    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toEqual(23);
  });

  it('should allow extra function arguments', () => {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg('first', 'second', 'third')).toEqual('first');

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg('arguments')).toEqual(undefined);

    // TODO: Fix the function to return all arguments. Hint: slice
    function returnAllArgs() {
      return Array.from(arguments);
      //return Array.prototype.slice.call(arguments);
      //return [].slice.call(arguments); 
      //return [...arguments];
    }

    expect(returnAllArgs('first', 'second', 'third')).toEqual(["first", "second", "third"]);
  });
});
