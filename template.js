const createProjectTemplate = (projectName, day, month, year, module) => {
    const content = `<article id="${projectName}-article">
        <div id="${projectName}-header"></div><h4></h4><ul id="${projectName}-description"><li><a href="#">HTML,</a><a href="#>CSS</a> and <a href="#">JS</a> project</li><li></li><li>Created ${day} ${month} ${year}; module ${module}/29</li></ul></article>`
}