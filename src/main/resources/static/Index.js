WWF.ns("WWF.app.commonIdentity.login");
WWF.CONFIG.autoCorrectDomain = false;
(function (a) {
    WWF.app.commonIdentity.login = {
        args: {message: null, _athena_context_path: null, action: "login"},
        userEmail: null,
        _from: "",
        _service: "",
        init: function (c) {
            var d = a("#loginFormBox");
            this._from = d.attr("from");
            this._service = d.attr("service");
            var b = a("#username").inputbox();
            b.inputbox("focus");
            a("#login-btn-next").click(function () {
                WWF.app.commonIdentity.login.userEmail = a.trim(a("#username").val().toLowerCase());
                if (WWF.app.commonIdentity.login.validateEmail(WWF.app.commonIdentity.login.userEmail)) {
                    WWF.app.commonIdentity.login.nextOperation();
                }
            });
            a("#username").bind("keyup", "return", function (e) {
                var f = e || window.event;
                if (f.keyCode == 13) {
                    a("#login-btn-next").click();
                }
            });
            this.setSignUpLink();
            a.cookie("directlanding", null, {path: "/", domain: "webex.com", secure: true});
        },
        validateEmail: function (b) {
            if (b === "") {
                var c = '请输入 WebEx 帐户的电子邮件地址。';
                WWF.app.commonIdentity.login.showErrorMessage(c);
                a("#username").focus();
                return false;
            }
            if (!WWF.verify.isEmail(b)) {
                var c = '请输入有效的电子邮件地址。例如：name@email.com';
                WWF.app.commonIdentity.login.showErrorMessage(c);
                a("#username").focus();
                return false;
            }
            return true;
        },
        showErrorMessage: function (b) {
            a("#errorMessage").text(b);
            a("#loginNotice").removeClass("wwf-hide");
            a("#username").inputbox("setStatus", "error");
        },
        hideErrorMessage: function () {
            a("#loginNotice").addClass("wwf-hide");
            a("#username").inputbox("setStatus", "normal");
        },
        nextOperation: function () {
            var b = window.location.href;
            if (b.indexOf("backurl") == -1) {
                var c = a.cookie("collabsbackurl");
                if (c && c !== "") {
                    if (b.indexOf("?") == -1) {
                        b = b + "?backurl=" + encodeURIComponent(c);
                    } else {
                        b = b + "&backurl=" + encodeURIComponent(c);
                    }
                }
            }
            WWF.request.setService("identity", {
                getAuthOneInfo: {
                    service: "identity.getAuthOneInfo",
                    params: {
                        userName: a.trim(a("#username").val().toLowerCase()),
                        backUrl: b,
                        service: WWF.app.commonIdentity.login._service,
                        from: WWF.app.commonIdentity.login._from
                    }
                }
            });
            WWF.request.call("identity.getAuthOneInfo", {}, function (g) {
                if (g && g.status === WWF.request.SUCCESS) {
                    var e = g.result.ssoParameters;
                    if (g.result.orgType === "NormalSSO") {
                        a.cookie("collabsbackurl", null, {path: "/", secure: true});
                        WWF.app.commonIdentity.login.showSSODialog(WWF.app.commonIdentity.login.userEmail);
                        var m = encodeURIComponent(e.clientid);
                        var j = encodeURIComponent(e.target);
                        var n = encodeURIComponent(e.org);
                        window.top.location.href = g.result.ssoEndPoint + "?clientid=" + m + "&target=" + j + "&org=" + n;
                    } else {
                        if (g.result.orgType === "TrainCI") {
                            WWF.app.commonIdentity.login.showSSODialog(WWF.app.commonIdentity.login.userEmail);
                            WWF.utils.generateAndSubmitForm(g.result.ssoEndPoint, "commonGet2PostForm");
                        } else {
                            if (g.result.orgType === "TrainSSO") {
                                WWF.app.commonIdentity.login.showSSODialog(WWF.app.commonIdentity.login.userEmail);
                                window.top.location.href = g.result.ssoEndPoint;
                            } else {
                                if (g.result.orgType === "HT") {
                                    var k = encodeURIComponent(g.result.encryptLoginName);
                                    var h = a("#loginFormBox").attr("backurl");
                                    var i = g.result.service;
                                    var l = g.result.from;
                                    var d = document.location.host + WWF.CONFIG.contextPath + "/auth2?email=" + k;
                                    if (i && "" != i) {
                                        d += "&service=" + i;
                                    }
                                    if (l && "" != l) {
                                        d += "&from=" + l;
                                    }
                                    if (h && "" != h) {
                                        d += "&backurl=" + encodeURIComponent(h);
                                    }
                                    if (WWF.CONFIG.enforcePOST) {
                                        WWF.utils.generateAndSubmitForm(window.location.protocol + "//" + d, "commonGet2PostForm");
                                    } else {
                                        window.location.href = window.location.protocol + "//" + d;
                                    }
                                } else {
                                    if (g.result.orgType === "Unaffiliated") {
                                        var f = "en_US";
                                        if ("" != a("#i18n").attr("lang")) {
                                            f = a("#i18n").attr("lang");
                                        }
                                        a("#locale").attr("value", f);
                                        a("#clientid").attr("value", e.clientid);
                                        a("#target").attr("value", e.target);
                                        a("#loginid").attr("value", e.loginid);
                                        a("#org").attr("value", e.org);
                                        a("#glaEndpoint").attr("value", e.glaEndpoint);
                                        a("#cisKeepMeSignedInOption").attr("value", e.keepMeSigninOption);
                                        a("#backurl").attr("value", b);
                                        a("#ssoForm").append("<input type=hidden name=signupurl value=" + e.signupurl + ">");
                                        a("#ssoForm").attr("action", g.result.ssoEndPoint);
                                        a("#ssoForm").submit();
                                    } else {
                                        if (g.result.orgType === "NOTSUPPORT") {
                                            var i = g.result.service;
                                            var l = g.result.from;
                                            var d = document.location.host + WWF.CONFIG.contextPath + "/auth/assistant?service=" + i + "&from=" + l + "&action=wapix";
                                            window.location.href = window.location.protocol + "//" + d;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, function () {
            });
        },
        setSignUpLink: function () {
            if (!a("#gotosignup")[0]) {
                return;
            }
            var b = a("#gotosignup").attr("sitetype");
            if (b === "LT") {
                a("#gotosignup").attr("href", "#").click(function () {
                    WBX.component.marketing.go("login", false, true);
                });
                WBX.component.marketing.trackRender("login", false, true);
            } else {
                a("#gotosignup").attr("href", WWF.CONFIG.contextPath + "/account/signup");
            }
        },
        showSSODialog: function (d) {
            var b = '<div class="login-dialog-text">' + WWF.utils.format('您将被重定向至公司登录页，因为 <b>{0}</b> 是带有单点登录验证的公司电子邮件地址。', d) + '</div><div class="login-dialog-text login-dialog-img login-con-img"><a class="wwf-ic16 wwf-ic-loading" style="margin-right:12px;"></a><span style="font-size:13px;">' + '正在重定向...' + "</span></div>";
            var c = a.wwf.dialog.create({open: true, title: '正在重定向...', closable: false, width: 420, content: b});
            setTimeout(function () {
                c.dialog("close");
            }, 5000);
        }
    };
})(jQuery);
$(function () {
    WWF.app.commonIdentity.login.init();
});