// some basic tests
describe("xpath", function() {

  it("should return /html/body/h2[1]", function() {
  	var element = $('html body h2.chapter').first()[0] ;
	var expected = '/html/body/h2[1]' ;
	var actual = xpath( element ) ;
  	expect( actual ).toEqual( expected ) ;
  }) ;

  it("should return /html/body/div[1]/p/span", function() {
  	var element = $('html body div.introduction p span').first()[0] ;
	var expected = '/html/body/div[1]/p/span' ;
	var actual = xpath( element ) ;
  	expect( actual ).toEqual( expected ) ;
  }) ;

});
