$(document).ready(function(){
	setTimeout(function(){
		$('.cs-wrapper').fadeOut();
	}, 3500);
    
	var styles = [
		'background: red',
		'background: orange',
		'background: gold',
		'background: yellowgreen',
		'background: skyblue',
		'background: steelblue',
		'background: darkviolet'
	];
	console.log ( '%c b %c y %c S %c A %c M ',
		styles[0], styles[1], styles[2], styles[3],
		styles[4] );
	
	$('.toggle-menu').click(function(){
    	$(this).toggleClass('active');
		$('.wrapper').toggleClass('show-sidebar');
	});
});	