/**
 * 根据包名，在指定空间中创建对象
 */
function namespace(oNamespace, sPackage) {    
	var arr = sPackage.split('.');    
	var res = oNamespace;       
	for(var i = 0; i < arr.length; i++) {        
		if(arr[i] in oNamespace) {                               
			if(typeof oNamespace[arr[i]] !== "object") {    
				oNamespace[arr[i]] = {};                           
			}
		}else {
			oNamespace[arr[i]] = {};                     			
			}
		oNamespace = oNamespace[arr[i]]; 
	}
	return res;
}        
