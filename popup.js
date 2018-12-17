function find(){
    var product = document.getElementById("product").value;
    var res = encodeURI(product);
    product = res.replace(/%20/gi, "+");
    var newURL = "https://www.smallwoodhome.com/search?q=" + product;
    chrome.storage.sync.set({'query': true});
    chrome.tabs.create({ url: newURL });
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click', find);
});