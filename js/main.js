/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function ($) {
	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	  ------------------------------------------------------ */
	$(window).load(function () {
		// will first fade out the loading animation
		$("#loader").fadeOut("slow", function () {
			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");
		});
	});

	/*---------------------------------------------------- */
	/* FitText Settings
		  ------------------------------------------------------ */
	setTimeout(function () {
		$("#intro h1").fitText(1, { minFontSize: "42px", maxFontSize: "84px" });
	}, 100);

	/*---------------------------------------------------- */
	/* FitVids
	  ------------------------------------------------------ */
	$(".fluid-video-wrapper").fitVids();

	/*---------------------------------------------------- */
	/* Owl Carousel
	  ------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		loop: true,
		itemsCustom: [
			[0, 1],
			[960, 2],
			// [960, 3],
		],
		navigationText: false,
	});

	/*----------------------------------------------------- */
	/* Alert Boxes
		  ------------------------------------------------------- */
	$(".alert-box").on("click", ".close", function () {
		$(this).parent().fadeOut(500);
	});

	/*----------------------------------------------------- */
	/* Stat Counter
		  ------------------------------------------------------- */
	var statSection = $("#stats"),
		stats = $(".stat-count");

	statSection.waypoint({
		handler: function (direction) {
			if (direction === "down") {
				stats.each(function () {
					var $this = $(this);

					$({ Counter: 0 }).animate(
						{ Counter: $this.text() },
						{
							duration: 4000,
							easing: "swing",
							step: function (curValue) {
								$this.text(Math.ceil(curValue));
							},
						}
					);
				});
			}

			// trigger once only
			this.destroy();
		},

		offset: "90%",
	});

	/*---------------------------------------------------- */
	/*	Masonry
	  ------------------------------------------------------ */
	var containerProjects = $("#folio-wrapper");

	containerProjects.imagesLoaded(function () {
		containerProjects.masonry({
			itemSelector: ".folio-item",
			resize: true,
		});
	});

	/*----------------------------------------------------*/
	/*	Modal Popup
	  ------------------------------------------------------*/
	$(".item-wrap a").magnificPopup({
		type: "inline",
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: "mfp-fade",
	});

	$(document).on("click", ".popup-modal-dismiss", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/*-----------------------------------------------------*/
	/* Navigation Menu
	 ------------------------------------------------------ */
	var toggleButton = $(".menu-toggle"),
		nav = $(".main-navigation");

	// toggle button
	toggleButton.on("click", function (e) {
		e.preventDefault();
		toggleButton.toggleClass("is-clicked");
		nav.slideToggle();
	});

	// nav items
	nav.find("li a").on("click", function () {
		// update the toggle button
		toggleButton.toggleClass("is-clicked");
		// fadeout the navigation panel
		nav.fadeOut();
	});

	/*---------------------------------------------------- */
	/* Highlight the current section in the navigation bar
		  ------------------------------------------------------ */
	var sections = $("section"),
		navigation_links = $("#main-nav-wrap li a");

	sections.waypoint({
		handler: function (direction) {
			var active_section;

			active_section = $("section#" + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $(
				'#main-nav-wrap a[href="#' + active_section.attr("id") + '"]'
			);

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},

		offset: "25%",
	});

	/*---------------------------------------------------- */
	/* Smooth Scrolling
		  ------------------------------------------------------ */
	$(".smoothscroll").on("click", function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top,
				},
				800,
				"swing",
				function () {
					window.location.hash = target;
				}
			);
	});

	/*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	  ------------------------------------------------------ */
	$("input, textarea, select").placeholder();

	/*---------------------------------------------------- */
	/*	contact form
	  ------------------------------------------------------ */

	/* local validation */
	$("#contactForm").validate({
		/* submit via ajax */
		submitHandler: function (form) {
			var sLoader = $("#submit-loader");

			$.ajax({
				type: "POST",
				url: "inc/sendEmail.php",
				data: $(form).serialize(),
				beforeSend: function () {
					sLoader.fadeIn();
				},
				success: function (msg) {
					// Message was sent
					if (msg == "OK") {
						sLoader.fadeOut();
						$("#message-warning").hide();
						$("#contactForm").fadeOut();
						$("#message-success").fadeIn();
					}
					// There was an error
					else {
						sLoader.fadeOut();
						$("#message-warning").html(msg);
						$("#message-warning").fadeIn();
					}
				},
				error: function () {
					sLoader.fadeOut();
					$("#message-warning").html("Something went wrong. Please try again.");
					$("#message-warning").fadeIn();
				},
			});
		},
	});

	/*----------------------------------------------------- */
	/* Back to top
	 ------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	jQuery(window).scroll(function () {
		if (!$("#header-search").hasClass("is-visible")) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}
	});

	/*---------------------------------------------------- */
	/*	Expand news
	  ------------------------------------------------------*/
	$('.news-box-content').on('click', function () {
		// toggle the class
		$(this).toggleClass('news-box-content-expand');

		// change the text of .news-toggle, a button as the child of .news-box-content
		$(this).children('.news-toggle').text(function (i, text) {
			return text === "Read More..." ? "Read Less..." : "Read More...";
		});
	});

	var originalTexts = {
		introParagraph1: $('#intro-paragraph1').html(),
		introParagraph2: $('#intro-paragraph2').html(),
		introParagraph3: $('#intro-paragraph3').html(),
		// Add more original texts for other paragraphs if needed
	};
	$('.bibtex-link').on('click', function (event) {
		event.preventDefault();
		var bibtexId = $(this).data('bibtex-id');
		var introParagraph = $('#intro-paragraph' + bibtexId.slice(-1));

		var bibtexEntries = {
			bibtex1: `@inproceedings{10.1145/3672539.3686324,
title={Code Shaping: Iterative Code Editing with Free-form Sketching},
author={Yen, Ryan and Zhao, Jian and Vogel, Daniel},
booktitle={Proceedings of the Conference on Human Factors in Computing Systems},
year={2024},
publisher={Association for Computing Machinery},
isbn={9790400707186},
address={New York, NY, USA},
url={https://doi.org/10.1145/3672539.3686324},
doi={10.1145/3672539.3686324},
series={UIST Adjunct '24}
}`,
			bibtex2: `@inproceedings{10.1145/3654777.3676357,
author = {Yen, Ryan and Zhu, Jiawen and Suh, Sangho and Xia, Haijun and Zhao, Jian},
title = {CoLadder: Manipulating Code Generation via Multi-Level Blocks},
year = {2024},
isbn = {9798400706288},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3654777.3676357},
doi = {10.1145/3654777.3676357},
booktitle = {Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology},
keywords = {hierarchical code generation, multi-level abstraction, programming support},
location = {Pittsburgh, PA, USA},
series = {UIST '24}
}`,
			bibtex3: `@inproceedings{10.1145/3654777.3676388,
author = {Yen, Ryan and Zhao, Jian},
title = {Memolet: Reifying the Reuse of User-AI Conversational Memories},
year = {2024},
isbn = {9798400706288},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3654777.3676388},
doi = {10.1145/3654777.3676388},
booktitle = {Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology},
articleno = {1},
numpages = {12},
keywords = {memory management, knowledge reuse, conversational agent, human-AI system},
location = {Pittsburgh, PA, USA},
series = {UIST '24}
}`,
			// Add more BibTeX entries here for other publications
		};

		var bibtexEntry = bibtexEntries[bibtexId];

		// Toggle between original text and BibTeX entry
		if (introParagraph.html().includes('@inproceedings')) {
			introParagraph.html(originalTexts['introParagraph' + bibtexId.slice(-1)]);
		} else {
			introParagraph.html('<pre>' + bibtexEntry + '</pre>');

			// Copy to clipboard
			var tempTextarea = $('<textarea>');
			tempTextarea.val(bibtexEntry).appendTo('body').select();
			document.execCommand('copy');
			tempTextarea.remove();
		}
	});

})(jQuery);
