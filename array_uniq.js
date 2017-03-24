/**
 * Array 对象添加一个去除重复项的方法 
 */
Array.prototype.uniq = function () {   
	var resArr = [];   
	var flag = true;        
	for(var i=0;i<this.length;i++){       
		if(resArr.indexOf(this[i]) == -1){           
			if(this[i] != this[i]){   //排除 NaN              
				if(flag){                   
					resArr.push(this[i]);                   
					flag = false;              
				}           
			}else{               
				resArr.push(this[i]);           
			}       
		}   
	}    
	return resArr;
}
		