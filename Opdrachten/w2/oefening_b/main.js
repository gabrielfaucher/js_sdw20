// Function declaration for repeated event calling
function setEvent(id, event, styleprop, stylepropval) {
    let el = document.querySelector(`#${id}`);
    el.addEventListener(event, () => {
        el.style[styleprop] = stylepropval;
    });
}

// Execute events
setEvent('onFocus', 'focus', 'background', 'magenta');
setEvent('onChange', 'change', 'color', 'orange');
setEvent('onMouseOver', 'mouseover', 'color', 'yellow');
setEvent('onMouseOut', 'mouseout', 'color', 'purple');
setEvent('onClick', 'click', 'display', 'none');
