( function( $ ) {
	wp.customize( 'url_field_id', function( value ) {
	value.bind( function( newval ) {
		//Do stuff (newval variable contains your "new" setting data)
		$( "#cover_title1" ).html( newval );
	} );
} );
} )( jQuery );