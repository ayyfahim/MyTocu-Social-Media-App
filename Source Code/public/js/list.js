$(function () {

    var commentId = 0;

    // Like/Dislike
    $(".list-like").on("click", function (event) {
        var element = this;
        event.preventDefault();
        listId = event.target.parentNode.parentNode.parentNode.parentNode.dataset["list"];
        var like_amount =
            event.target.parentNode.childNodes[5];
        var isLike = (event.target = 1);
        $.ajax({
            method: "POST",
            url: urlLike,
            dataType: "json",
            data: {
                isLike: isLike,
                listId: listId,
                _token: token
            },
            success: function (data) {
                var amount = JSON.stringify(data.count);
                var likes = " Likes";
                var res = amount + likes;
                $(like_amount).text(res);
            }
        }).done(function () {
            $(element).toggleClass("is-active");
        });
    });


    $(".cu_like").on("click", function (event) {
        var element = this;
        event.preventDefault();
        postId = event.target.parentNode.parentNode.dataset["post"];
        var like_amount =
            event.target.parentNode.childNodes[5];
        var isLike = (event.target = 1);
        $.ajax({
            method: "POST",
            url: urlLike,
            dataType: "json",
            data: {
                isLike: isLike,
                postId: postId,
                _token: token
            },
            success: function (data) {
                var amount = JSON.stringify(data.count);
                var likes = " Likes";
                var res = amount + likes;
                $(like_amount).text(res);
            }
        }).done(function () {
            $(element).toggleClass("is-active");
        });
    });

    $(".ru_like").on("click", function (event) {
        var element = this;
        event.preventDefault();
        postId = event.target.parentNode.parentNode.dataset["post"];
        var like_amount =
            event.target.parentNode.childNodes[5];
        var isLike = (event.target = 1);
        $.ajax({
            method: "POST",
            url: urlLike,
            dataType: "json",
            data: {
                isLike: isLike,
                postId: postId,
                _token: token
            },
            success: function (data) {
                var amount = JSON.stringify(data.count);
                var likes = " Likes";
                var res = amount + likes;
                $(like_amount).text(res);
            }
        }).done(function () {
            $(element).toggleClass("is-active");
        });
    });

    $(".edit-comment").on("click", function () {
        event.preventDefault();
        commentBodyElement = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1]
        commentId = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset["comment"]
        var commentBody = commentBodyElement.textContent;
        $('.comment-modal').modal();
        $('#comment-body').val(commentBody);
    });

    $("#comment-save").on("click", function () {
        $.ajax({
            method: "PUT",
            url: urlComment + '/' + commentId,
            dataType: "json",
            data: {
                body: $('#comment-body').val(),
                _token: token
            }
        }).done(function (msg) {
            $('.comment-modal').modal('hide');
            $(commentBodyElement).text(msg['msg']);
        });
    });

    $(".comment-icn i").on("click", function () {
        $(".comment-area").focus();
    });

    $(".comment-like-btn").on("click", function (event) {
        var element = this;
        // event.preventDefault();
        commentId = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset["comment"];
        // var like_amount =
        //     event.target.parentNode.parentNode.childNodes[2].childNodes[4];
        var isLike = (event.target = 1);
        $.ajax({
            method: "POST",
            url: urlLike,
            dataType: "json",
            data: {
                isLike: isLike,
                commentId: commentId,
                _token: token
            },
            success: function () {
                $(element).toggleClass("is-active");
            }
        }).done(function (data) {
            var amount = JSON.stringify(data.count);
            var likes = " Likes";
            var res = amount + likes;
            element.parentNode.setAttribute("data-original-title", res)
        });
    });

});
