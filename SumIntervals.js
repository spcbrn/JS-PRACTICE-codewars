
//URL: https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
//kyu: 4


function sumIntervals(intervals){
  let sum = 0;
  intervals.sort((a, b) => {return a[0] > b[0]})
  console.log(intervals)    
    for (i = 0; i < intervals.length; i++) {
      if (intervals[i][1] > (intervals[i+1] ? intervals[i+1][0] : Infinity)) {
        intervals[i][1] = intervals[i+1][1]
        intervals.splice(i+1, 1)
      }
      sum += intervals[i][1] - intervals[i][0]
    }
    console.log(intervals)
    return sum;
}



  var test1 = [[1,5]];
  var test2 = [[1,5],[6,10]];
  console.log(sumIntervals(test1), 4);
  console.log(sumIntervals(test2), 8);

  var test3 = [[1,5],[1,5]];
  var test4 = [[1,4],[7, 10],[3, 5]];
  console.log(sumIntervals(test3), 4);
  console.log(sumIntervals(test4), 7);

  var test5 = [ [ 1, 20 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]
  console.log(sumIntervals(test5), 19);