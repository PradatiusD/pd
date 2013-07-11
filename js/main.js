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

                    initEvents = function() {
                        
                        var $slides = config.$bookBlock.children();

                        // add navigation events
                        config.$navNext.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'next' );
                            return false;
                        } );

                        config.$navPrev.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'prev' );
                            return false;
                        } );

                        config.$navFirst.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'first' );
                            return false;
                        } );

                        config.$navLast.on( 'click touchstart', function() {
                            config.$bookBlock.bookblock( 'last' );
                            return false;
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

// Cycle information with change of buttons
jQuery(document).ready(function($){
    currentPage = 0;
    var portfolioDesc = $('.portfolio-desc article').length;
    function fadez (showSelector) {
        $('.portfolio-desc article').hide();
        $('.portfolio-desc article').eq(showSelector).fadeIn('slow');
    }

    $('#bb-nav-next').click(function(){
        if (currentPage < portfolioDesc-1) {
            currentPage++;
            fadez(currentPage);
            //  console.log('Current page is '+currentPage)
        }
    })

    $('#bb-nav-prev').click(function(){
        if (currentPage > 0) {
            currentPage--;
            fadez(currentPage);
        }
    })

    $('#bb-nav-first').click(function(){
            currentPage=0;
            fadez(currentPage);            
    })

    $('#bb-nav-last').click(function(){
        currentPage=portfolioDesc-1;
        fadez(currentPage);
    })

})

jQuery(document).ready(function($){
    // Function which cycles through each page checking for the nested
    // image height.  After adding it to an array, the function then gets
    // the max value of the array and the sets the book to that height.
    // This function is fired on DOM ready and on window.resize so that
    // the bookblock best displays itself no matter how the user is
    // seeing the function.

    function fixBookblockHeight () {
        $('.bb-custom-wrapper .bb-bookblock').height()
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
})