// Code to fire Bookblock
            var Page = (function() {
                
                var config = {
                        $bookBlock : $( '#bb-bookblock' ),
                        $navNext : $( '#bb-nav-next' ),
                        $navPrev : $( '#bb-nav-prev' ),
                        $navFirst : $( '#bb-nav-first' ),
                        $navLast : $( '#bb-nav-last' )
                    },
                    init = function() {
                        config.$bookBlock.bookblock( {
                            speed : 800,
                            shadowSides : 0.8,
                            shadowFlip : 0.7
                        } );
                        initEvents();
                    },



            // Cycle Bookblock pages with change of buttons
            currentPage = 0;
            var portfolioDesc = $('.portfolio-desc article').length;

            function fadez (showSelector) {
                $('.portfolio-desc article').hide();
                $('.portfolio-desc article').eq(showSelector).fadeIn('slow');
            }

                    initEvents = function() {
                        
                        var $slides = config.$bookBlock.children();

                        // add navigation events
                        config.$navNext.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'next' );

                            if (currentPage < portfolioDesc-1) {
                                currentPage++;
                                fadez(currentPage);
                            }

                            return false;
                        } );

                        config.$navPrev.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'prev' );

                            if (currentPage < portfolioDesc-1) {
                                currentPage++;
                                fadez(currentPage);
                            }
                            return false;
                        } );

                        config.$navFirst.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'first' );
                            return false;
                            currentPage=0;
                            fadez(currentPage);   
                        } );

                        config.$navLast.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'last' );
                            return false;
                            currentPage=portfolioDesc-1;
                            fadez(currentPage);
                        } );
                        
                        // add swipe events
                        $slides.on( {
                            'swipeleft' : function( event ) {
                                config.$bookBlock.bookblock( 'next' );
                                return false;
                            },
                            'swiperight' : function( event ) {
                                config.$bookBlock.bookblock( 'prev' );
                                return false;
                            }
                        } );

                        // add keyboard events
                        $( document ).keydown( function(e) {
                            var keyCode = e.keyCode || e.which,
                                arrow = {
                                    left : 37,
                                    up : 38,
                                    right : 39,
                                    down : 40
                                };

                            switch (keyCode) {
                                case arrow.left:
                                    config.$bookBlock.bookblock( 'prev' );
                                    break;
                                case arrow.right:
                                    config.$bookBlock.bookblock( 'next' );
                                    break;
                            }
                        } );
                    };

                    return { init : init };

            })();
                   Page.init();


            // For hover opacity on portfolio desc
                $('#bb-bookblock').hover(
                    function(){
                        var isiPad = navigator.userAgent.match(/iPad/i) != null;
                        if ($('body').width() > 480 && isiPad===false) {
                            $('.portfolio-desc article, .bb-bookblock nav').stop().animate({opacity: 1},1000)
                        }  
                    },
                    function(){
                        var isiPad = navigator.userAgent.match(/iPad/i) != null;
                        if ($('body').width() > 480 && isiPad===false) {
                            $('.portfolio-desc article, .bb-bookblock nav').stop().animate({opacity: 0},1000)
                        }
                    })


            // Function which cycles through each page checking for the nested
            // image height.  After adding it to an array, the function then gets
            // the max value of the array and the sets the book to that height.
            // This function is fired on DOM ready and on window.resize so that
            // the bookblock best displays itself no matter how the user is
            // seeing the function.
            var Bookblockcall = 0;
            function fixBookblockHeight () {
                var bookImgHeight = [];
                var bookPages = $('.bb-item').length - 1;
                for (var i = 0; i < bookPages; i++) {
                    var pageImgHeight = $('.bb-item img').eq(i).height();
                    bookImgHeight.push(pageImgHeight);
                };
                var biggestImg = Math.max.apply(Math,bookImgHeight);
                $('.bb-custom-wrapper .bb-bookblock').css('height',biggestImg);
            }

            fixBookblockHeight();
            $(window).resize(function() {
               fixBookblockHeight(); 
            });

            ///Check after 1.5 second if everything is right 
            setTimeout(function(){
                var BookblockHeight = $('.bb-custom-wrapper .bb-bookblock').height();
                console.log('Bookblock height is '+BookblockHeight+"px and this is call "+Bookblockcall+" of the fixBookblockHeight function");
                Bookblockcall++
                // Fix if images haven't loaded quickly enough
                if (BookblockHeight===0) {
                    fixBookblockHeight();
                }
            },1500)


