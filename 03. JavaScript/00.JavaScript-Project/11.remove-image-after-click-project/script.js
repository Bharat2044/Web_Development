document.querySelector('#images').addEventListener('click', function(e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.tagName);

    // let removeIt = e.target.parentNode;
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt);

    if(e.target.tagName === 'IMG') {
        // console.log(e.target.tagName);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
}, false);
