/**
 * Created by chy on 2015/10/12.
 */
$(document).ready(function () {
    if ($.cookie("rmbUser") == "true") {
        $("#ck_rmbUser").attr("checked", true);
        $("#txt_username").val($.cookie("username"));
        $("#pwd").val($.cookie("password"));
    }
});

//记住用户名密码
function Save() {
    if ($("#ck_rmbUser").attr("checked")) {
        var str_username = $("#txt_username").val();
        var str_password = $("#pwd").val();
        $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
        $.cookie("username", str_username, { expires: 7 });
        $.cookie("password", str_password, { expires: 7 });
    }
    else {
        $.cookie("rmbUser", "false", { expire: -1 });
        $.cookie("username", "", { expires: -1 });
        $.cookie("password", "", { expires: -1 });
    }
};
