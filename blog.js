database.ref("Posts").once('value').then(data => {
    let savedPosts = data.val();
    console.log(savedPosts);
    Object.values(savedPosts).forEach(data => {
    $(".old_posts").append(`<b>${data.postTitle}</b><br>${data.postContent}<br><br>`);
    });
});

$("button").on('click', (event) => {
    let title = $("input").val();
    let content = $("textarea").val();
    console.log(title)
    console.log(content)
    if (title != "" && content != "") {
        $(".old_posts").append(`<b>${title}</b><br>${content}<br><br>`)
        let dataToSave = { postTitle: title, postContent: content };
        console.log(dataToSave);
        database.ref("Posts").push(dataToSave);
        $("input").val(null);
        $("textarea").val(null);
    }
    else {
        window.alert("Please add title and content too!")
    };
}); 