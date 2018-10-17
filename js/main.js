// bg particles

// Typewriter effect

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop : true
});

typewriter.typeString(`Hello I'm ROHIT`)
    .pauseFor(1200)
    .deleteAll()
    .typeString('A Frontend Web Designer')
    .pauseFor(1200)
    .deleteChars(21)
    .typeString('Graphic Desginer')
    .pauseFor(1100)
    .start();


// hide collapse
$('.nav-links li').click(function(){
    $('.collapse').collapse('hide');
});
