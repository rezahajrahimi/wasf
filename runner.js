# Cargo Overwriten
  
  <details>
    <summary>What does this do?</summary>
    
  </details>

* Drag and drop this into your bookmarks bar
  
```js
javascript:
	document.observe("dom:loaded", function() {
		pohod.setNoblesPresent();
		pohod.setSiegePresent(0);
		
		pohod.showMotivation();

		Event.observe('defenderX','keyup', function(){
			pohod.getMarchInfo();
		});

		Event.observe('defenderY','keyup', function(){
			pohod.getMarchInfo();
		});

		Event.observe('pohodSpeed','change', function(){
			pohod.getMarchInfo();
		});

		Event.observe('motiv_speed', 'change', function(){
			pohod.getMarchInfo();
		});

		Event.observe(window, 'load', showMotivation);

		
	});
            
        
            function doSend(){
                var button = document.getElementById('pohSendBtn');
                button.disabled = true;
                pohod.sendMarches();
                setTimeout(function(){
                    button.disabled = false;
                }, 10);
            };
        

```  
  <br>
