
const home = document.querySelector(".navbar li:first-child")
const info = document.querySelector(".navbar li:nth-child(2)")
const project = document.querySelector(".navbar li:nth-child(3)")
const more = document.querySelector(".navbar li:nth-child(4)")

home.onmouseover = function() {
    home.style.cursor = 'pointer';
    home.style.color = 'lightblue'
}
home.onmouseout = function() {
    home.style.color = 'bisque'
}
info.onmouseover = function() {
    info.style.cursor = 'pointer';
    info.style.color = 'lightblue'

}
info.onmouseout = function() {
    info.style.color = 'bisque'
}
project.onmouseover = function() {
    project.style.cursor = 'pointer'
    project.style.color = 'lightblue'
}
project.onmouseout = function() {
    project.style.color = 'bisque'
}
more.onmouseover = function() {
    more.style.cursor = 'pointer'
    more.style.color = 'lightblue'
}
more.onmouseout = function() {
    more.style.color = 'bisque'
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

//navbar//
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var navbarItems = document.querySelectorAll('.navbar li:not(.ph)');

    toggleButton.addEventListener('click', function () {
        navbarItems.forEach(function (item) {
            item.classList.toggle('active');
        });
    });
});
//navbar//
//mesos//
var buttonKen = document.getElementById("buttonKen");
var medsosKen = document.querySelector(".medsos-ken");

buttonKen.onclick = function () {
    
    var isMedsosVisible = getComputedStyle(medsosKen).display === 'block';

    medsosKen.style.display = isMedsosVisible ? 'none' : 'block';
};
var buttonLivia = document.getElementById('buttonLivia');
var medsosVia = document.querySelector('.medsos-via');

buttonLivia.onclick = function () {
    
    var isMedsosViaVisible = getComputedStyle(medsosVia).display === 'block';

    medsosVia.style.display = isMedsosViaVisible ? 'none' : 'block';
    
};
var buttonSha = document.getElementById('buttonSha')
var medsosSha = document.querySelector('.medsos-keisha')

buttonSha.onclick = function () {
    
    var isMedsosShaVisible = getComputedStyle(medsosSha).display === 'block';

    medsosSha.style.display = isMedsosShaVisible ? 'none' : 'block';
    
};
var buttonCia = document.getElementById('buttonCia')
var medsosCia = document.querySelector('.medsos-cia')

buttonCia.onclick = function () {

    var isMedsosCiaVisible = getComputedStyle(medsosCia).display === 'block';

    medsosCia.style.display = isMedsosCiaVisible ? 'none' : 'block';
    medsosCia.style.marginTop = '2px'
    medsosCia.style.transition = 'ease-in-out'
};
var buttonChrist = document.getElementById('buttonChrist')
var medsosChrist = document.querySelector('.medsos-christ')

buttonChrist.onclick = function () {
    var isMedsosChristVisible = getComputedStyle(medsosChrist).display === 'block';

    medsosChrist.style.display = isMedsosChristVisible ? 'none' : 'block';

};

//logic medsos//
var igKen = document.getElementById('igKen')
igKen.onclick = function() {
    window.location.href = 'https://www.instagram.com/kenzz_zk?igshid=OGQ5ZDc2ODk2ZA=='

}
igKen.onmouseover = function() {
    igKen.style.scale = '1.2'
    igKen.style.transition = '500ms ease-in-out'
    igKen.style.rotate = '19deg'
}
igKen.onmouseout = function() {
    igKen.style.scale = ''
    igKen.style.transition = '290ms ease-in-out'
    igKen.style.rotate = ''
}
var igVia = document.getElementById('igVia')
igVia.onclick = function() {
    window.location.href = 'https://www.instagram.com/vialivia._?igsh=OGQ5ZDc2ODk2ZA'

}
igVia.onmouseover = function() {
    igVia.style.scale = '1.2'
    igVia.style.transition = '500ms ease-in-out'
    igVia.style.rotate = '19deg'
}
igVia.onmouseout = function() {
    igVia.style.scale = ''
    igVia.style.transition = '290ms ease-in-out'
    igVia.style.rotate = ''
}
var igSha = document.getElementById('igSha')
igSha.onclick = function() {
    window.location.href = 'https://www.instagram.com/ke1o0_?igsh=OGQ5ZDc2ODk2ZA=='

}
igSha.onmouseover = function() {
    igSha.style.scale = '1.2'
    igSha.style.transition = '500ms ease-in-out'
    igSha.style.rotate = '19deg'
}
igSha.onmouseout = function() {
    igSha.style.scale = ''
    igSha.style.transition = '290ms ease-in-out'
    igSha.style.rotate = ''
}
var igCia = document.getElementById('igCia')
igCia.onclick = function() {
    window.location.href = 'https://www.instagram.com/indrishii_?igsh=OGQ5ZDc2ODk2ZA'

}
igCia.onmouseover = function() {
    igCia.style.scale = '1.2'
    igCia.style.transition = '500ms ease-in-out'
    igCia.style.rotate = '19deg'
}
igCia.onmouseout = function() {
    igCia.style.scale = ''
    igCia.style.transition = '290ms ease-in-out'
    igCia.style.rotate = ''
}
var igChrist = document.getElementById('igChrist')
igChrist.onclick = function() {
    window.location.href = 'https://www.instagram.com/dukun.jawa?igsh=OGQ5ZDc2ODk2ZA=='

}
igChrist.onmouseover = function() {
    igChrist.style.scale = '1.2'
    igChrist.style.transition = '500ms ease-in-out'
    igChrist.style.rotate = '19deg'
}
igChrist.onmouseout = function() {
    igChrist.style.scale = ''
    igChrist.style.transition = '290ms ease-in-out'
    igChrist.style.rotate = ''
}



var  canva1 = document.getElementById('canva1')
canva1.onclick = function () {
    window.location.href = 'https://www.canva.com/design/DAFzAelmiog/KLFR1gz9YpoeYFGaY7ogeA/edit?utm_content=DAFzAelmiog&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
}


