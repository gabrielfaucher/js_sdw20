function event(id, event, styleprop, stylepropval) {
    let el = document.querySelector(`#${id}`)
    el.addEventListener(event, () => {
        el.style[styleprop] = stylepropval
    })
}

event('onFocus', 'focus', 'background', 'magenta')
event('onChange', 'change', 'color', 'orange' )
event('onMouseOver', 'mouseover', 'color', 'yellow')
event('onMouseOut', 'mouseout', 'color', 'purple')
event('onClick', 'click', 'display', 'none')
