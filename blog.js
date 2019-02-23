database.ref("Posts").once('value').then(data => {
    let savedPosts = data.val();
    console.log(savedPosts);
    Object.values(savedPosts).forEach(data => {
        $(".old_posts").append(`<br>${data.postTitle} - ${data.postContent}`);
    });
});

$("button").on('click', (event) => {
    let title = $("input").val();
    let content = $("textarea").val();
    console.log(title)
    console.log(content)
    if (title != "" && content != "") {
        $(".old_posts").append(`<br>${title} - ${content}`)
        let dataToSave = { postTitle: title, postContent: content };
        console.log(dataToSave);
        database.ref("Posts").push(dataToSave);
    }
    else {
        window.alert("Please add title and content too!")
    };
}); 