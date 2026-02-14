

// Scrolls to the first element with the specified classname
function smoothScrollToElement(className)
{
    element = document.getElementsByClassName(className)[0];

    if ((element instanceof Element) == false)
    {
        console.log("No element found to scroll to");
        return;
    }

    element.scrollIntoView(
    {
        behavior: 'smooth',
        block: 'start'
    });

    console.log("Scrolled to " + "'" + className + "'");
}