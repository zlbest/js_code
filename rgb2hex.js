/**
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 */
function rgb2hex(sRGB) {    
	var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;    
	var ret=sRGB.match(regexp);    
	if(!ret){        
		return sRGB;    
	}else{        
		var str='#';        
		for(var i=1;i<=3;i++){            
			var m=parseInt(ret[i]);            
			if(m<=255&&m>=0){                
				str+=(m<16?'0'+m.toString(16):m.toString(16));            
			}else{                
				return sRGB;            
			}        
		}        
	return str;    
	}
}