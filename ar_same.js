/**
 * 找出两个数组中相同的项
 */
function ar_same(arr1,arr2){
	var result = arr1.filter(function(v){
		return (arr2.indexOf(v) !== -1);
	});
	return result;
}

var out = ar_same([1,2,3,4,2],[2,3,2,5,1]).sort();
console.log(out);