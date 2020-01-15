const moveLeft = document.querySelector('.moveLeft');
const moveRight = document.querySelector('.moveRight');
const moveUp = document.querySelector('.moveUp');
const moveDown = document.querySelector('.moveDown');
const moveForward = document.querySelector('.moveForward');
const moveBackward = document.querySelector('.moveBackward');

moveLeft.addEventListener('click', function(e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', { detail:{
        x: -0.1,
        y: 0,
        z: 0
    }});
    el.dispatchEvent(event);
}); 

moveRight.addEventListener('click', function (e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', {
        detail: {
            x: 0.1,
            y: 0,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveUp.addEventListener('click', function (e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 0.1,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveDown.addEventListener('click', function (e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: -0.1,
            z: 0
        }
    });
    el.dispatchEvent(event);
});

moveForward.addEventListener('click', function (e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 0,
            z: -0.1
        }
    });
    el.dispatchEvent(event);
});

moveBackward.addEventListener('click', function (e) {
    const el = document.querySelector('.box-component');
    const event = new CustomEvent('move', {
        detail: {
            x: 0,
            y: 0,
            z: 0.1
        }
    });
    el.dispatchEvent(event);
});