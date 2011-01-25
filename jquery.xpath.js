(function($){
		function xpath(elt) {
			var path = "" ,
				getElementIdx = function(elt) {
					var before = 1 ,
						after = 0 ;
					for (var sib = elt.previousSibling; sib ; sib = sib.previousSibling) {
						if(sib.nodeType == 1 && sib.tagName == elt.tagName)	before++
					}
					for (var sib = elt.nextSibling; sib ; sib = sib.nextSibling) {
						if(sib.nodeType == 1 && sib.tagName == elt.tagName)	after++
					}
					if( before == 1 && after == 0 )
						return 0 ;
					else
						return before ;
				} ;
				
			for (; elt && elt.nodeType == 1; elt = elt.parentNode) {
				idx = getElementIdx(elt);
				xname = elt.tagName;
				if (idx > 0) xname += "[" + idx + "]";
				path = "/" + xname + path;
			}

			return path.toLowerCase() ;	
		}

    $.fn.xpath = function() {
        return this.map(function( idx, domElement ){
			return xpath( domElement ) ;
        });
    };
}(jQuery));
