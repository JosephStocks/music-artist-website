$("#forum-form").submit((e) => {
    e.preventDefault();

    $.post(
        "/api",
        {
            name: $("#name").val(),
            time: new Date(Date.now()).toLocaleTimeString(),
            comment: $("#comment").val(),
        },
        updateForum
    );
});

const updateForum = (data) => {
    console.log(data);
    let output = "";
    //[{}, {}, {}]

    //loop
    //concatenate output
    data.forEach((item, key) => {
        output += `          <div class="commentGroup">`;
        output += `            <div class="name-and-time flex justify-between">`;
        output += `              <div class="name font-bold">${item.name}</div>`;
        output += `              <div class="time">${item.time}</div>`;
        output += `            </div>`;
        output += `            <div class="comment">${item.comment}</div>`;
        output += `          </div>`;
    });

    $("#comments").html(output);
};

$.getJSON("/api", updateForum); //$.getJSON(1, funct)
