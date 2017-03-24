/**
 * 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
 */
function count(str) {    
	var obj = {};    
	str.replace(/\S/g, function(s) {        
		!obj[s]?obj[s]=1:obj[s]++;    
		});    
	return obj;
}
