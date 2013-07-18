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



jQuery(document).ready(function($){

    var arcCanvasSize = 345;
    $('#canvas').css({
        'width':arcCanvasSize,
        'height':arcCanvasSize
    })
    var archtype = Raphael("canvas", arcCanvasSize, arcCanvasSize);
    archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        if (total == value) {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
            ];
        } else {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        return {
            path: path
        };
    };

    //make an centered arc with a radius of arcCanvasSize * 0.45 (because we have to account for the
    //size of the circle stroke) that grows from 0 to 99.99% for 2000 seconds.

    var my_arc = archtype.path().attr({
        "stroke": "#ee8411",
            "stroke-width": 4,
        arc: [arcCanvasSize/2, arcCanvasSize/2, 0, 100, arcCanvasSize*0.45]
    });

    my_arc.animate({
        arc: [arcCanvasSize/2, arcCanvasSize/2, 99.99, 100, arcCanvasSize*0.45]
    }, 3000, function(){ 
            $('#canvas').animate({'opacity': 0},1000);
            $('#postRaphaelmessage').animate({'opacity': 1},1000, function(){
                $('#postRaphaelmessage').animate({'opacity': 0},3000)
            });
        }); 

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

    // Cycle Bookblock pages with change of buttons
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