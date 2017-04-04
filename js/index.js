(function(){
	
	var rainBow = $('.rainbow'),
			body = $('body'),
			r11 = $('.r11-wrapper');
	cheet('r a i n b o w', function () {
		rainBow.show();
		setTimeout(function(){
			rainBow.hide();
		}, 5000);
		console.log('You found an Easter egg! Вы нашли Пасхальное яйцо, Поздравляю!');
	});

	cheet('t u r n o v e r', function(){
		body.toggleClass('turnover');
		console.log('You found an Easter egg! Вы нашли Пасхальное яйцо, Поздравляю!');
	});




	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		$('.tab-list').slideToggle();
	});

	function fill(){
		$('.resume-content-lang-skills li')
		.find('.skill-bar')
		.each(function(i) {
			$(this).find('.bar').delay(i * 150).animate({
					width: $(this).parents().attr('data-percent') + '%'
			},1000, 'linear', function() {
				return $(this).css({
					'transition-duration': '.5s'
				});
			});
		});
	}

	if ( window.innerWidth <= 770 ){
		$('.tab-item').not(':first-child').hide();
		$('#resume').hide();
		
		$('.tab-list li').on('click', function(){

			$('.tab-list li').removeClass('active');
			$('#resume').show();
			$(this).addClass('active');

			$('.tab-item').hide();
			$('.tab-list').slideUp();
			$(".hamburger").removeClass('is-active');

			var activeTab = $(this).find('a').attr('href');
			$(activeTab).fadeIn();
			return false;
		});

		$('.portfolio-card-poster, .very-high').on('click', function(){
			$(this).toggleClass('active-deploy');
		});

		$('a[href="#resume"]').on('click', fill);

		$('.header-title').on('click', function(){
			r11.show()
			setTimeout(function(){
				r11.hide()
			}, 3000);
			console.log('You found an Easter egg! Вы нашли Пасхальное яйцо, Поздравляю!');
		});
	}
	if ( window.innerWidth > 770 ){
	
		var intense = document.querySelectorAll( ['img', 'div'] );
		Intense(intense);
		$(window).load(function() {
			$(".wrapper").removeClass("nopre");
		});

		$('#container > div').click(function(){
			if ($('#container').attr('class') == $(this).attr('id')) {
				$('#container').removeClass();
			} else {
				$('#container').removeClass().addClass($(this).attr('id'));
			}
		});

		$('#container > div > ul, img, form, .btn, .portfolio-card').click(function(e){
			e.stopPropagation();
		});

		$(".tab-item:first-child").show();
		$(".tab-item-right:first-child").show();

		$("#right .tab").click(function() {

			$("#right .tab").removeClass("active")
			.eq(
				$(this).index()
			)
			.addClass("active");
			$(".tab-item").hide()
			.eq(
				$(this).index()
			)
			.fadeIn()
		})
		.eq(0)
		.addClass("active");

		$("#left .tab").click(function() {

			$("#left .tab").removeClass("active")
			.eq(
				$(this).index()
			)
			.addClass("active");

			$(".tab-item-right").hide()
			.eq(
				$(this).index()
			)
			.fadeIn()

		})
		.eq(0)
		.addClass("active");
		
		$('#left .first, #right').on('click', fill);

		cheet('r 1 1', function(){
			r11.show()
			setTimeout(function(){
				r11.hide()
			}, 3000);
			console.log('You found an Easter egg! Вы нашли Пасхальное яйцо, Поздравляю!');
		});
	}

}());