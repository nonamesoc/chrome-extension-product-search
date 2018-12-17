chrome.storage.sync.get(['query'], function(result) {
	
    var query = result.query;

	if (query == true){

        var value = document.querySelector('#shopify-section-search-template li');
        value = value.innerHTML;
        value = value.replace(/ /gi, "");
        value = value.replace(/\n/gi, "");

        if(value != "1result"){

        	var btn = document.createElement("BUTTON");
            var t = document.createTextNode("CLICK ME");
            btn.appendChild(t);
            document.body.appendChild(btn);
            var style = document.createElement("style");
            style.innerHTML = ".overla {background: #000;position: fixed;left: 0;right: 0;top: 0;bottom: 0;z-index: 1000;opacity: .5;}";
            style.innerHTML += ".visibl {opacity: 1;background: #fff;position: fixed;left: 50%;top: 50%;margin-top: -200px;overflow: hidden;z-index: 2000;width: 500px;padding: 0px;margin-left: -250px;border: 1px solid black;}";
            style.innerHTML += "#win{background: white}";
            style.innerHTML += "#win button {float: right;line-height: 20px;margin: 1.2em;border: none;background: transparent;color: blue;}";
            style.innerHTML += '#win button[type="button"]:hover {cursor: pointer;color: navy;text-decoration: underline;}';
            document.head.appendChild(style);
            var div = document.createElement("div");
            div.id = "win";
            var overla = document.createElement("div");
            overla.className = "overla";
            div.appendChild(overla);
            var visibl = document.createElement("div");
            visibl.className = "visibl";
            div.appendChild(visibl);
            var label = document.createElement("h2");
            label.innerHTML = "Найдено товаров больше чем один<br/>Выберите интересующий вас товар самостоятельно";
            visibl.appendChild(label);
            var mybtn = document.createElement("button");
            mybtn.setAttribute("type", "button");
            mybtn.setAttribute("onClick", "getElementById('win').style.display='none';");
            mybtn.innerHTML = "закрыть";
            visibl.appendChild(mybtn);
            document.body.appendChild(div);
        }

        else {
        	var a = document.querySelector('#shopify-section-search-template .alpha a');
        	a = a.getAttribute('href');
        	window.location = a;
        }
        
    	chrome.storage.sync.set({'query': false});
    }
});

