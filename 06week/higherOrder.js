'use strict';
const assert = require('assert');

// was absent for this class so this might not be right but
// commented to best ability! 



const forEach=(arr, callback)=> {
// a for loop to through all the items in the array
  for (let x=0; x<arr.length; x++) {
    // if callback parameter is provided call the callback function with the current array item as paramater.
    if (callback) {
      callback(arr[i]);
    }
  }
}
//  creates a new array with the results of calling a provided function on every element in the calling array.
const map=(arr, callback)=> {
  let returnArr = [];
  // loop over every item in array
  for (let x=0; x<arr.length; x++) {
    // if callback parameter is provided
    if (callback) {
 // push newly created value to array
      returnArr.push(callback(arr[i]));
    }
  }
  return returnArr;
}
// creates a new array with all elements that pass the test implemented by the provided function.
const filter=(arr, callback)=> {
  let returnArr = [];
  // loop over every item in array
  for (let x=0; x<arr.length; x++) {
    if (callback) {
      // checks if the current array item returned from callback === current array item
      const callbackReturn = callback(arr[i]);
      // if callbackReturn = true, then push current item to returnArr
      if ( callbackReturn ) {
        returnArr.push(arr[i]);
      }
    }
  }
  // return new array
  return returnArr;
}


// const some = (arr, callback) => {
//   return arr.some((num)=>{
//     return callback(num)
//   })
// }

// const every = (arr, callback) => {
//   return arr.every((num)=>{
//     return callback(num)
//   })
// }

if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}
