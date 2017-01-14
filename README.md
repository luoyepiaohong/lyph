# lyph
it is a project 
#零基础学习Javascript各练习小代码

<script type="text/javascript" >

/*function displayDate(){
document.getElementById("demo").innerHTML = Date();
}*/


/*function power(base, exponent){
	var result = 1;
	if(exponent === undefined){
		exponent = 2;
	}
	for(var count = 0; count < exponent; count++){
		result += base;
	}
	return result;
}

document.write(power("R", 4));*/


/*var number = 1;
if (number < 10) {
	document.write("0", number);
}
else {
	document.write(number);
}
*/

//下面是zeroPad 函数

/*function zeroPad(number, width) {
	var string = String(Math.round(number));
	while(string.length < width){
		string = "0" + string;
	}
	if(string.length > width){
		string = "出错误了";
	}
	return string;
}

document.write(zeroPad(5,4) + "<br>");
document.write(zeroPad(5,3) + "<br>");
document.write(zeroPad(10,3) + "<br>");
document.write(zeroPad(1000,3) + "<br>");*/

//递归  函数调用自身

/*function power(base, exponent) {
	if(exponent == 0) {
		return 1;
	}
	else
		return base * power(base, exponent-1);
}
document.write(power(3, 5));*/

/*var text = "purple haze";
text["length"];
text.length;

document.write(text.length);
document.write("<br>");
document.write(text["length"]);
*/

/*function Person(name,age) {
	this.name =name;
	this.age = age;
	this.m = function(){
		return "姓名：" + this.name + " ，年龄：" + this.age;
	}
}
Person.prototype.nianling = function() {
	return "姓名：" + this.name + " ，年龄：" + this.age;
}

document.write(new Person("李四",20).m());
document.write("<br>");
document.write(new Person("张三",40).nianling());
*/

//对象的使用方法。

/*var cat = {color: "gray", name: "Spot", size: 46}; 
cat.size = 47;
cat.size;
document.write(cat.size); //47
document.write("<br>");
delete cat.size;
document.write(cat.size); //undefined*/

//对象的属性 以及调用测试 感觉和关联数组差不多 难道有什么相通点?
/*var thing = {"gabba gabba": "hey", 5: 10};
document.write(thing["5"]); //10
document.write("<br>");
document.write(thing[2 + 3]); //10
document.write("<br>");
document.write(thing["gabba gabba"]); //hey
document.write("<br>");
delete thing["gabba gabba"];
document.write(thing["gabba gabba"]);  //undefined*/

/*var propertyName = "length";
var text = "coco";
document.write(text[propertyName]); //4
document.write("<br>");
document.write(text.length); //4
*/

/*var chineseBox = {};
chineseBox.content = chineseBox;
document.write("content" in chineseBox); //ture
document.write("<br>");
document.write("content" in chineseBox.content); //ture*/


/*var set = {"Sport": true};
set["white fang"] = true;
delete set["Sport"];
document.write("Asoka" in set); //false
document.write("<br>");
document.write("Sport" in set); //false
document.write("<br>");
document.write("white fang" in set); //true
*/

/*var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

document.write(object1["value"]); //10
document.write("<br>");
document.write(object2["value"]); // 10
document.write("<br>");
document.write(object1 == object2); // true
document.write("<br>");
document.write(object1 == object3); // false
object1.value = 15;
document.write("<br>");
document.write(object2["value"]); // 15
document.write("<br>");
object2.value = 30;
document.write(object1["value"]); // 30*/

/*var mailArchive = ["mail one", "mail two", "mail three"];
for(var current = 0; current < mailArchive.length; current++){
	document.write(mailArchive[current] + "<br>");
}*/


/*function shout(){
var beatles = Array("Jhon", "Paul", "George", "Ringo");
for(var count = 0; count < beatles.length; count++){
	document.write(beatles[count] + "<br>");
}
}
shout();


var beatles = Array("Jhon", "Paul", "George", "Ringo");
for(var count = 0; count < beatles.length; count++){
	document.write(beatles[count] + "<br>");
}
*/

//数组 range = [0, 2, 3, 4]
/*function range(upto){
	var result = [];
	for(var i = 0; i <= upto; i++){
		result[i] = i;
		document.write(result[i] + "<br>");
	}
	return result;
}
range(4); //数组 range = [0, 2, 3, 4]
*/

/*var doh = "Doh";
document.write(typeof doh.toUpperCase); // function 
document.write("<br>");
document.write(doh.toUpperCase()); // DOH*/

var paragraph = "born 15 11 2003 (mother Sport) : white Fang";
document.write(paragraph.charAt(0) == "b" && paragraph.charAt(1) == "o" && paragraph.charAt(2) == "r" && paragraph.charAt(3) == "n" );
document.write("<br>" + paragraph.charAt(6));
document.write("<br>" + paragraph.slice(6,17));
document.write("<br>" + (paragraph.slice(0, 4) == "born")); //判断相等操作应定要外加括号

document.write("<br>");
function startsWith(string, pattern){ //如果第一个参数以第二个参数字符串开头就返回true，否则返回false
	return string.slice(0, pattern.length) == pattern;
}
document.write(startsWith("rotation", "rot"));
document.write("<br>");
document.write("werwerwer".charAt(4)); //返回字符串第5个字符 e
document.write("<br>");


</script>
