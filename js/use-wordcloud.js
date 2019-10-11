
function ajax(){
   

var xhr = new XMLHttpRequest();
xhr.open("GET","http://39.108.208.114/lihkg/keyword?single=true",true);
xhr.send();    

xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
    
   
    var text =xhr.responseText;
   
var arr = text
//console.log(arr);

for (var i = 0, len = arr.length, newArr = []; i < len; i++) {
var isPush = true;
for (var j = 0, l = newArr.length; j < l; j++) {
if (arr[i] === newArr[j].name) {
    isPush = false;
    newArr[j].value++;
}
}
if (isPush) {
newArr.push({name: arr[i], value: 1});
} else {
isPush = true;
}
}
//console.log(newArr);//输出各个元素次数


var chart = echarts.init(document.getElementById('main'));
var option = {
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [16, 70],
        rotationRange: [-90, 90],
        shape: 'circular',
        width: 1000,
        height: 1000,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
                name: 'Sam S Club',
                value: 10000,
               
            }
            
            
        ]
    } ]
};
 option.series[0].data = newArr;

chart.setOption(option);

window.onresize = chart.resize;




   
}
}
}
// ajax();
// var oP = document.getElementsByClassName('box');

// function checkKeyword(text_keyword){
    
// for(var j = 0; j< 3;j++){
//     var id = text_keyword.message[j].id
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET","http://39.108.208.114/lihkg/article?id="+id,false);
//         xhr.send();    
//         console.log(id);
//         xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
            
//             //var jsonData = JSON.stringify(xhr.responseText);
//             var jsonData = xhr.responseText;
//            var text_article = JSON.parse(jsonData);
           
//            console.log(text_article.article);
//            var text_article_article = text_article.article;
//            //console.log(text_article_article);
//         //     var text_keyword =xhr.responseText;
//         //     var jsonData = $.getJSON();
//         //   var data = $.parseJSON(jsonData);
        
        
//         var reg = /[a-zA-Z]+/g;
//         var text_article_article=text_article_article.replace(reg,'')
           
           
//         oP[j].innerHTML= text_article_article;
// 		for(var i =0;i<text_keyword.message[j].keyword.length; i++){
		
// 		var inp=text_keyword.message[j].keyword[i];
// 		console.log(inp);
        

//         function check(){
//             var str = inp;
//             if (!str)return; //若内容不存在即返回
//             oP[j].innerHTML=oP[j].innerHTML.split(str).join('<span>'+str+'</span>')
// 		}
// 		check();

// 	}
        
        
       
//                }
//                else{console.log(11);}              




// 	}
	 
	
	
// 	}};
// function ajax_keyword(){
   
   

//         var xhr = new XMLHttpRequest();
//         xhr.open("GET","http://39.108.208.114/lihkg/keyword",true);
//         //xhr.open("GET","http://39.108.208.114/lihkg/article?id=0",true);
//         xhr.send();    
        
//         xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
            
//             //var jsonData = JSON.stringify(xhr.responseText);
//             var jsondata = xhr.responseText;
//            var text_keyword = JSON.parse(jsondata);
//            console.log(text_keyword);
//         //     var text_keyword =xhr.responseText;
//         //     var jsonData = $.getJSON();
//         //   var data = $.parseJSON(jsonData);
//         checkKeyword(text_keyword);
           
           
           
        
        
        
       
//                }       }       
// }
ajax();
// ajax_keyword();




