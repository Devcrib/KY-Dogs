var input1 = document.querySelector("#search input");

var main = () =>{
	var awesomplete = new Awesomplete(input1, {
		minChars: 1,
		//maxItems:
		autoFirst: true

	});
	awesomplete.list = ["affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","chihuahua","chow","clumber","collie","coonhound","corgi","dachshund","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","weimaraner","whippet","wolfhound"];

};
main();


//$("#dogs").on("keyup", function(){
//  $.ajax({
//    url: 'https://dog.ceo/api/breeds/list' + this.value,
//    type: 'GET',
//    dataType: 'json'
//  })
//  .success(function(data) {
//    var list = [];
//    $.each(data, function(key, value) {
//      list.push(value.name);
//    });
//    awesomplete.list = list;
//  });
//});
