/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2005 Sun Microsystems Inc. All Rights Reserved
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * https://opensso.dev.java.net/public/CDDLv1.0.html or
 * opensso/legal/CDDLv1.0.txt
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * When distributing Covered Code, include this CDDL
 * Header Notice in each file and include the License file
 * at opensso/legal/CDDLv1.0.txt.
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 * "Portions Copyrighted [year] [name of copyright owner]"
 *
 * $Id: auth.js,v 1.6 2008/06/25 05:44:32 qcheng Exp $
 *
 */
var idbPageVersion = 'v0';

/** makes current page occupies entire browser window */
function occupyFullBrowser() {
    if (top.location != window.location) {
        top.location = window.location;
    }
}

/** places cursor on the first form element */
function placeCursorOnFirstElm() {
    var frms = document.forms;
    var frmCount = frms.length;

    for (var i = 0; i < frmCount; i++) {
        var frm = frms[i];
        var sz = frm.elements.length;

        for (var j = 0; j < sz; j++) {
            var elm = frm.elements[j];

            if ((elm.type != "hidden") && (elm.type != "button") && (elm.tagName != "OBJECT") && (elm.value.length == 0)){
                elm.focus();
                if((elm.type == "text") || (elm.type == "email") || (elm.type == "password")) {
                    var elmId = elm.id;
	            	var divId = 'DivToken' + elmId.replace('IDToken', '');
		            highlightFocusedInputTextbox(divId);
		        }
                return;
            }
        }
    }
}

/**
 * marks button
 *
 * @param label of button
 * @param href of button
 */
function markupButton(index, label, href) {
    label = "&nbsp;" + strTrim(label) + "&nbsp;";
    document.write("<button name=\"Login.Submit\" type=\"button\"");
    document.write(" id=\"Button");
    document.write(index);
    document.write("\"");
    if(index == "0") {	
 	    document.write(" class=\"cui-button\"");
    } else { 
 	    document.write(" class=\"cui-button cui-button--blue\"");
    }
    document.write(" onclick=\"");
    document.write(href);
    document.write("\" >");
    document.write(label);
    document.write("</button>");
}

function markupButton2(label, href) {
    label = "&nbsp;" + strTrim(label) + "&nbsp;";
    document.write("<input name=\"Login.Submit\" type=\"button\"");
    document.write(" class=\"cta\" value=\"");
    document.write(label);
    document.write("\" onclick=\"");
    document.write(href);
    document.write("\" />");
}

/**
 * aggregrates all the form elements in different forms into
 * a hidden form
 */
function aggSubmit(buttonIndex, _passwordPolicy) {
    var frms = document.forms['LoginForm'];    
    var hiddenFrm = document.forms['Login'];
    var passwordFieldCount = 0;
    var newPasswordId = '';
    var confirmPasswordId = '';

    if (hiddenFrm != null) {
        for (var i = 0; i < elmCount; i++) {
            var frm = $(frms).find("div[id=frm" + i + "]");

            if (frm != null) {
                var elm = $(frm).find('input')[0];

                if (elm != null) {
                    if (elm.type == 'radio') {
                        hiddenFrm.elements[i].value =
                            getSelectedRadioValue(frm);
                    } else if (elm.type == 'checkbox') {
                        hiddenFrm.elements[i].value = 
                            getSelectedCheckBoxValues(frm);
                    } else {
                    	if(elm.type == 'password') {
                    		passwordFieldCount++;
                    	}
                    	if(passwordFieldCount == 2) {
                			newPasswordId = elm.id;
                		}
                    	if(passwordFieldCount == 3) {
                			confirmPasswordId = elm.id;
                		}
                	
                    	if(elm.value.length > 0) {
                    		hiddenFrm.elements[i].value = elm.value;
                    	} else {
                    		if(buttonIndex == '1') {
                    			if(elm.type == 'password') {
                    				if(passwordFieldCount == 1) {
                    					var currentId = elm.id;
                    					var divId = 'DivToken' + currentId.replace('IDToken', '');
                    					highlightErrorInputTextbox(divId);
                    					return false;
                    				}
                    			} else {
                    				var currentId = elm.id;
                    				var divId = 'DivToken' + currentId.replace('IDToken', '');
                    				highlightErrorInputTextbox(divId);
                    				return false;
                    			}
                    		}
                    	}
                    }
                }
            }
        }
        for (var i = 0; i < loginOptionElmCount; i++) {
            var frm = $(frms).find("div[id=frmLoginOption" + i + "]");

            if (frm != null) {
                var elm = $(frm).find('input')[0];

                if (elm != null) {
                    if (elm.type == 'checkbox') {
                    	if(elm.checked) {
                    		elm.style.visibility = "hidden";
                    		hiddenFrm.appendChild(elm);
                    	}
                    } 
                }
            }
        }
        if((passwordFieldCount == 3) && (buttonIndex == '1')) {
        	var newPassword = document.getElementById(newPasswordId).value;
        	var confirmPassword = document.getElementById(confirmPasswordId).value;
        	var newPasswordDivId = 'DivToken' + newPasswordId.replace('IDToken', '');
        	if (newPassword.length <= 0 || 
        			!checkPasswordPoicy(newPassword, _passwordPolicy)) { 
        		var divErrorId = '#DivErrorToken' + newPasswordDivId.replace('DivToken', '');
        		$(divErrorId).children(".contextual-error-message").text($("#passwordpolicyerror").text());
        		highlightErrorInputTextbox(newPasswordDivId);
        		$('#passwordPolicy2').show();
        		return false;
        	} else if (newPassword != confirmPassword) {
        		highlightErrorWithoutShowErrorMsg(newPasswordDivId);
        		var confirmPasswordDivId = 'DivToken' + confirmPasswordId.replace('IDToken', '');
        		highlightErrorInputTextbox(confirmPasswordDivId);
        		return false;
        	}
        }
    }
    return true;
}

/**
 * gets selected radio value
 *
 * @param frmObj - form object
 */
function getSelectedRadioValue(frmObj) {
    for (var i = 0; i < frmObj.elements.length; i++) {
        var elm = frmObj.elements[i];

        if (elm.checked) {
            return elm.value;
        }
    }
    return "";
}

/**
 * gets selected check box values separated by "|"
 *
 * @param frmObj - form object
 */
function getSelectedCheckBoxValues(frmObj) {
    var checked = "";
    for (var i = 0; i < frmObj.elements.length; i++) {
        var elm = frmObj.elements[i];

        if ((elm.checked) && (elm.type == 'checkbox')) {
            checked = checked + elm.value + "|";
        }
    }
    return checked;
}

/**
 * trims leading and trailing spaces of a string
 *
 * @param str - string to trim
 * @return trimmed string
 */
function strTrim(str){
    return str.replace(/^\s+/,'').replace(/\s+$/,'')
}

/**
 * clears all form elements
 *
 * @param frm - form obj
 */
function clearFormElms(frm) {
    if (frm != null) {
        var elms = frm.elements;

        if ((elms != null) && (elms.length > 0)) {
            for (var i = 0; i < elms.length; i++) {
                var elm = elms[i];
                elm.value = "";
            }
        }
    }
}

function writePasswordPolicy(passwordPolicy) {
	if (isPasswordResetPage()) {
		var passwordPolicyLines = passwordPolicy.split(";;");		
        document.write("<div class=\"passwordPolicyContainer\" >");
        document.write("<div id=\"policyTitle\">");
        document.write(passwordPolicyLines[0]);
        document.write("</div>");
        document.write("<div id=\"policyDetail\">");
	    document.write(passwordPolicyLines[1]);
        document.write("</div>");
        document.write("<div id=\"policyDetail\">");
	    document.write(passwordPolicyLines[2]);
        document.write("</div>");
        document.write("<div id=\"policyDetail\">");
	    document.write(passwordPolicyLines[3]);
        document.write("</div></div>");
    }
}

/**
 * Display the label based on label ID
 */
function showLabel(labelToken) {
    $(labelToken).css("left", "0px");
}

/**
 * Hides the label based on label ID
 */
function hideLabel(labelID) {
    $(labelID).css("left", "-2000px");
}

/**
 * Enables the button based on button ID
 */
function enableButton(buttonID) {
	$(buttonID).removeClass('disabled');
	$(buttonID).removeAttr("disabled");
}

/**
 * Disables the button based on button ID
 */
function disableButton(buttonID) {
	$(buttonID).addClass("disabled");
	$(buttonID).attr("disabled", "disabled");
}

/** 
 * Validates the form
 */
function validateForm(){
	var isFilled = true;
	$('input[id^="IDToken"]').each(function(index) {
	    var currentId = $(this).attr('id');
		var labelId = '#Label' + currentId.replace('IDToken', '');
		if($(this).val().length == 0) {
		    showLabel(labelId);
			isFilled = false;
		} else {
			hideLabel(labelId);
		}	
	});
	if(isFilled.valueOf()) {
		$('input[type="button"]').each(function(index) {
			var buttonVal = $(this).attr('id');
			if(buttonVal == 'Button1') {
				enableButton("#" + buttonVal);
			}	 
		});
	} else {
		$('input[type="button"]').each(function(index) {
			var buttonVal = $(this).attr('id');
			if(buttonVal == 'Button1') {
				disableButton("#" + buttonVal);
			}	 
		});
	}
	
    return true;
}

/**
 * Initializes the form
 */
function initializeForm() {
	// Selects all the input fields whose ID starts to IDToken
	$('input[id^="IDToken"]').click(function() {
		if($(this).attr('readonly') != 'readonly') {
			var currentId = $(this).attr('id');
			var labelId = '#Label' + currentId.replace('IDToken', '');
			var divId = 'DivToken' + currentId.replace('IDToken', '');
			hideLabel(labelId);
			removeHighlightErrorInputTextbox()
			highlightFocusedInputTextbox(divId);
			$(this).focus();
		}
	});
	$('input[id^="IDToken"]').focus(function() {
		if($(this).attr('readonly') != 'readonly') {
			var currentId = $(this).attr('id');
			var labelId = '#Label' + currentId.replace('IDToken', '');
			var divId = 'DivToken' + currentId.replace('IDToken', '');
			hideLabel(labelId);
			removeHighlightErrorInputTextbox()
			highlightFocusedInputTextbox(divId);
		}
	});
	$('input[id^="IDToken"]').blur(function() {
		if(this.value.length == 0) {
			var currentId = $(this).attr('id');
			var labelId = '#Label' + currentId.replace('IDToken', '');
			showLabel(labelId);
		} else {
			validateForm();
		}
	});
	$('input[id^="IDToken"]').keyup(function() {
		validateForm();
	});
	$('input[id^="IDToken"]').keypress(function() {
		removeHighlightErrorInputTextbox();
	});

	// Selects all the div elements whose ID starts with Label	
	$('div[id^="Label"]').click(function() {
		var currentId = $(this).attr('id');
		var inputId = '#IDToken' + currentId.replace('Label', '');
		var divId = 'DivToken' + currentId.replace('Label', '');
		if($(inputId).attr('readonly') != 'readonly') {
			hideLabel(currentId);
			$(inputId).focus();
			removeHighlightErrorInputTextbox()
			highlightFocusedInputTextbox(divId);
		}
	});

	// Selects all the input fields of type button
	$('input[type="button"]').click(function(){
        if($(this).hasClass("disabled")){
            return false;
        }
        return true;
    });
    
    $('input[type="checkbox"]').focus(function(){
    	$(this).parent().find('.input-checkbox-img').focus();
    });
    
    $('#close_crossplatform_message').click(function(){
    	$('#globalInfo').css('display','none');
    });
	
	$('div[id^="LoginOptionDiv"]').change(function(evt) {    	
		var checkbox = $(this).find('input[id^=LoginOption]');
		if(checkbox.attr('name') == 'keepMeSignedIn'){
			if(checkbox.attr('checked')=="checked"){
				selectRememberEmailCheckbox();
			}else{
				enableRememberEmailCheckbox();
			}
		}
	});    
	
	$('#languageSelector').click(function(evt) {
		evt.stopPropagation();
	});
	
	$('div[id^="CheckboxHelp"]').click(function(evt) {
		evt.stopPropagation();
	});

	if($("#CheckboxLabel1").attr("aria-checked")==="true"){
	$("#CheckboxLabel0").attr('aria-disabled',"true");
	$("#CheckboxLabel0").css('display','inline-block');
	}	
	
	function enableRememberEmailCheckbox() {
		$('input[id^="LoginOption"]').each(function(evt) {
			if($(this).attr('name') == 'rememberEmail') {
				var currentId = parseInt($(this).attr("id").substring($(this).attr("id").indexOf("LoginOption")+11));
				$(this).attr("disabled", false);
			}
		});
	}
	
	function selectRememberEmailCheckbox() {
		$('input[id^="LoginOption"]').each(function(evt) {
			if($(this).attr('name') == 'rememberEmail') {
				var currentId = parseInt($(this).attr("id").substring($(this).attr("id").indexOf("LoginOption")+11));
				$(this).attr("checked", true);
				$(this).attr("disabled", true);			
			}
		});
	}
}

/**
 * Returns true if Password reset page is displayed.
 */
function isPasswordResetPage() {
    var isPasswordResetPage = true;
    $('input[id^="IDToken"]').each(function(index) {
        if($(this).prop("type") != "password") {
            isPasswordResetPage = false;
        }
    });
    return isPasswordResetPage;
}


/**
 * Marks Input field readonly if value is already set.
 */
function makeReadonly() {
	$('input[id^="IDToken"]').each(function(index) {
		if($(this).val().length > 0) {
			var currentId = $(this).attr('id');
			var divId = '#DivToken' + currentId.replace('IDToken', '');
			$(this).attr("readonly", "readonly");			
		} 	
	});
}

/**
 * Changes the Button Style Class
 */
function adjustButtons() {
    var buttonCount = 0;
    $('button[id^="Button"]').each(function(index) {
        buttonCount++;
    });
    if(buttonCount == 2) {
        $("#Button0").removeClass("btn--expand");
        $("#Button1").removeClass("btn--expand");
        $("#Button0").addClass("btn--semiexpand");
        $("#Button1").addClass("btn--semiexpand");
        $("#Button1").addClass("btn--extra");
    }
}

	function highlightFocusedInputTextbox(divId) {
	}

	function removeHighlightErrorInputTextbox() {
		$('div[id^="DivToken"]').each(function(index) {
	    	var currentId = $(this).attr('id');
	    	var divErrorId = '#DivErrorToken' + currentId.replace('DivToken', '');
	    	if($(this).hasClass('error')) {        
	        	$(this).removeClass('error');
	        } 
	    });
	}

	function highlightErrorInputTextbox(divId) {
	    $('div[id^="DivToken"]').each(function(index) {
	    	var currentId = $(this).attr('id');
	    	if(currentId == divId) {
	        	if (!$(this).hasClass('error')) {
					$(this).addClass('error');
				} 
	        } 
	    });
	}
	
	function highlightErrorWithoutShowErrorMsg(divId) {		
	    $('div[id^="DivToken"]').each(function(index) {
	    	var currentId = $(this).attr('id');
	        if(currentId == divId) {
	        	if (!$(this).hasClass('error')) {
					$(this).addClass('error');
				}
	        } 
	    });
	}

function showHideHelpPopup(index) {
	var id = '#CheckboxHelp' + index;
	var popupId = '#CheckboxHelpPopup' + index;
	showHidePopup(id,popupId);
}

function showHidePopup(id, popupId) {
	if($(id).attr('aria-expanded') == 'true') {
		$(id).attr('aria-expanded', 'false');
		closePopup(popupId);
	} else {
		if($(id).attr('aria-expanded') == 'false') {
			$(id).attr('aria-expanded', 'true');
			openPopup(popupId);
		}
	}
}

function closePopup(id) {
	if($(id).hasClass('showPopup')) {
		$(id).removeClass('showPopup');
	}
	if(!$(id).hasClass('hidePopup')) {
		$(id).addClass('hidePopup');
	}
}

function openPopup(id) {
	if(!$(id).hasClass('showPopup')) {
		$(id).addClass('showPopup');
	}
	if($(id).hasClass('hidePopup')) {
		$(id).removeClass('hidePopup');
	}
}

function reloadPageWithSelectedLocale(url, locale) {
	if(url.indexOf('?') != -1) {
		url = url + "&"
	} else {
		url = url + "?"
	}
	url = url + locale;
	window.location = url;
}

function setHelpPopupPosition() {
	$('div[id^="CheckboxHelpPopup"]').each(function(index) {
		var ht = parseInt($(this).css('height'));
		var currentId = $(this).attr('id');
		var parentDiv = '#LoginOptionDiv' + currentId.replace('CheckboxHelpPopup', '');
		var width = parseInt($(parentDiv).css('width'));
		if(idbPageVersion == 'v0') {
			ht = -1 * ((ht/2) + 30);
			width = width + 30;
			$(this).css('margin-left', width);
			$(this).css('margin-top', ht);
		} 
		if((idbPageVersion == 'v1') || (idbPageVersion == 'v2')) {
			$(this).css('margin-left', '-7px');
			$(this).css('margin-top', '7px');
		}
	});
}

function setLoginOptionsWidth() {
	var maxWidth = 0;
	$('label[id^="CheckboxLabel"]').each(function(index) {
		var width = parseInt($(this).css('width'));
		if(maxWidth < width) {
			maxWidth = width;
		}
	});
	$('a[id^="LoginOption"]').each(function(index) {
		var width = parseInt($(this).css('width'));
		if(maxWidth < width) {
			maxWidth = width;
		}
	});
	maxWidth = maxWidth + 20;
	$('#LoginOptions').css('width', maxWidth);
}

function setPageVersion(pageVersion) {
	idbPageVersion = pageVersion;
}

function addAudioTag(id) {
	if($.browser.msie || (!!navigator.userAgent.match(/Trident\/7\./))) {
		document.write("<object id=\"");
		document.write(id);
		document.write("\" classid=\"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6\" width=\"0\" height=\"0\" type=\"application/x-oleobject\" style=\"display:none;\">");
		document.write("<param name=\"autoStart\" value=\"-1\" />");
        document.write("</object>");
	} else {
		document.write("<audio id=\"");
		document.write(id);
		document.write("\" src=\"\" type=\"audio/x-wav\">"); 
		document.write("</audio>");
	}
}

$(document).click(function(e) {	
	$('a[id^="CheckboxHelp"]').each(function(index) {
		var alt = "";
		if($(e.target).is('a')){
			if ($(e.target).find('img')[0]) {
				alt = $(e.target).find('img')[0].alt;
			}
		}else{
			alt = e.target.alt;
		}
		if($(this).attr('aria-expanded') == 'true' && alt != $(this).find('img')[0].alt) {
			$(this).attr('aria-expanded', 'false');
			var currentId = $(this).attr('id');
			var popupId = '#CheckboxHelpPopup' + currentId.replace('CheckboxHelp', '');
			closePopup(popupId);
		}
	});
});

function bindFocusInOut(inputObj, placeholder) {
	inputObj.click(function(){
		updatePlaceHolder($(this), '')
	}); 
	inputObj.focusout(function(){
		updatePlaceHolder($(this), placeholder);
	});
}

function updatePlaceHolder(inputObj, val) {
	if (inputObj.val() === '') {
		if((isIE() || isSafari())) {
			inputObj.prev().text(val);
		} else {
			inputObj.attr('placeholder', val);
		}
	}
}

function isIE(){
	return WWF.browser.ie != 0;
}

function isSafari(){
	return WWF.browser.safari;
}

var passwordPolicyInit = function (passwordPolicy) {
	var policyDiv = $("#policyDetails");
	var _policyContent = '<div class="header"><b>' + passwordPolicy['mustcontain'] + '</b></div>';
	if (passwordPolicy['minimumLength']) {
		_policyContent = _policyContent + '<div class="PWMinimumLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumLength']	+ '</div></div></div>';
	}
	if (passwordPolicy['maximumLength']) {
		_policyContent = _policyContent + '<div class="PWMaximumLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['maximumLength']	+ '</div></div></div>';
	}	
	if (passwordPolicy['minimumLow']) {
		_policyContent = _policyContent + '<div class="PWMinLowLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumLow']	+ '</div></div></div>';
	}
	if (passwordPolicy['minimumCap']) {
		_policyContent = _policyContent + '<div class="PWMinCapLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumCap']	+ '</div></div></div>';
	}
	if (passwordPolicy['minimumLetter']) {
		_policyContent = _policyContent + '<div class="PWMinLetterLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumLetter']	+ '</div></div></div>';
	}
	if (passwordPolicy['minimumNumeric']) {
		_policyContent = _policyContent + '<div class="PWMinNumberLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumNumeric']	+ '</div></div></div>';
	}
	if (passwordPolicy['minimumSpecial']) {
		_policyContent = _policyContent + '<div class="PWMinSpecialLength"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['minimumSpecial']	+ '</div></div></div>';
	}	
	
	var _mustNotPolicyContent = "";
	if (passwordPolicy['customize']) {
		_mustNotPolicyContent = _mustNotPolicyContent + '<div class="PWCustomize"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['customize']	+ '</div></div></div>';
	}
	if (passwordPolicy['easyguess']) {
		_mustNotPolicyContent = _mustNotPolicyContent + '<div class="PWEasyguess"><div class="pwd__messages"><div class="message">' +
						passwordPolicy['easyguess']	+ '</div></div></div>';
	}	
	if (_mustNotPolicyContent !== "") {
		_policyContent = _policyContent + '<div class="header"><b>' + passwordPolicy['mustnotcontain'] + '</b></div>';
		_policyContent = _policyContent + _mustNotPolicyContent;
	}
	policyDiv.append(_policyContent);
};

var checkPasswordPoicy = function(userpassword, passwordPolicy) {
	if (userpassword === '') {
		resetPasswordPolicyCheckStatus(passwordPolicy);
		return true;
	}
	var _PWMinimumLength = true;
	if (passwordPolicy['minimumLength']) {
		if (userpassword.length < parseInt(passwordPolicy['minLengthVal'])) {
			$('.PWMinimumLength').removeClass('satisfy');
			_PWMinimumLength = false;
		} else {
			$('.PWMinimumLength').addClass('satisfy');
			_PWMinimumLength = true;
		}
	}
	
	var _PWMaximumLength = true;
	if (passwordPolicy['maximumLength']) {
		if (userpassword.length > parseInt(passwordPolicy['maxLengthVal'])) {
			$('.PWMaximumLength').removeClass('satisfy');
			_PWMaximumLength = false;
		} else {
			$('.PWMaximumLength').addClass('satisfy');
			_PWMaximumLength = true;
		}
	}
	
	var _minumNumberic = 0;
	var _minumLowAlpha = 0;
	var _minumCapAlpha = 0;
	var _minumSpecialChar = 0;
	
	var _specialCharSet = "";
	if (passwordPolicy['specialCharSet']) {
		_specialCharSet = passwordPolicy['specialCharSet'];
	}

	for (var i = 0; i < userpassword.length; i++) {
		var c = userpassword.substr(i, 1);
		if (c <= '9' && c >= '0') {
			_minumNumberic++;
		} else if (c <= 'z' && c >= 'a') {
			_minumLowAlpha++;
		} else if (c <= 'Z' && c >= 'A') {
			_minumCapAlpha++;
		} else {
			if (_specialCharSet !== "" && _specialCharSet.indexOf(c) != -1) {
				_minumSpecialChar++;
			}
		}
	 }
	var _PWMinLowAlpha = true;
	if (passwordPolicy['minimumLow']) {
		if (_minumLowAlpha < parseInt(passwordPolicy['minLowVal'])) {
			$(".PWMinLowLength").removeClass('satisfy');
			_PWMinLowAlpha = false;
		} else {
			$(".PWMinLowLength").addClass('satisfy');
			_PWMinLowAlpha = true;
		}
	}
	
	var _PWMinCapAlpha = true;
	if (passwordPolicy['minimumCap']) {
		if (_minumCapAlpha < parseInt(passwordPolicy['minCapVal'])) {
			$(".PWMinCapLength").removeClass('satisfy');
			_PWMinCapAlpha = false;
		} else {
			$(".PWMinCapLength").addClass('satisfy');
			_PWMinCapAlpha = true;
		}
	}
	
	var _PWMinLetterAlpha = true;
	if (passwordPolicy['minimumLetter']) {
		if ((_minumLowAlpha + _minumCapAlpha) < parseInt(passwordPolicy['minLetterVal'])) {
			$(".PWMinLetterLength").removeClass('satisfy');
			_PWMinLetterAlpha = false;
		} else {
			$(".PWMinLetterLength").addClass('satisfy');
			_PWMinLetterAlpha = true;
		}
	}
	
	var _PWMinNumberAlpha = true;
	if (passwordPolicy['minimumNumeric']) {
		if (_minumNumberic < parseInt(passwordPolicy['minNumericVal'])) {
			$(".PWMinNumberLength").removeClass('satisfy');
			_PWMinNumberAlpha = false;
		} else {
			$(".PWMinNumberLength").addClass('satisfy');
			_PWMinNumberAlpha = true;
		}
	}
	
	var _PWMinSpecialCharSet = true;
	if (passwordPolicy['minimumSpecial']) {
		if (_minumSpecialChar < parseInt(passwordPolicy['minSpecialVal'])) {
			$(".PWMinSpecialLength").removeClass('satisfy');
			_PWMinSpecialCharSet = false;
		} else {
			$(".PWMinSpecialLength").addClass('satisfy');
			_PWMinSpecialCharSet = true;
		}
	}
	
	var _PWNotContainCustomize = true;
	if (passwordPolicy['customize']) {
		var uid = passwordPolicy['uidVal'];
		if (uid && uid !== "") {
			_PWNotContainCustomize = userpassword.indexOf(uid) == -1;
		}
		
		var usercn = passwordPolicy['userCNVal'];
		if (_PWNotContainCustomize && usercn && usercn !== "") {
			_PWNotContainCustomize = userpassword.indexOf(usercn) == -1;
		}
		var usergivenname = passwordPolicy['givenNameVal'];
		if (_PWNotContainCustomize && usergivenname && usergivenname !== "") {
			_PWNotContainCustomize = userpassword.indexOf(usergivenname) == -1;
		}
		if (_PWNotContainCustomize) {
			$(".PWCustomize").addClass('satisfy');
		} else {
			$(".PWCustomize").removeClass('satisfy');
		}
	}
	
	var _PWEasyGuess = true;
	if (passwordPolicy['easyguess']) {
		if (userpassword.toLowerCase().indexOf("cisco") != -1
					|| userpassword.toLowerCase().indexOf("webex") != -1
					|| userpassword.toLowerCase().indexOf("password") != -1) {
			$('.PWEasyguess').removeClass('satisfy');
			_PWEasyGuess = false;
		} else {
			$('.PWEasyguess').addClass('satisfy');
			_PWEasyGuess = true;
		}
	}
	 
	return _PWMinimumLength && _PWMaximumLength && _PWMinLowAlpha && _PWMinCapAlpha && _PWMinLetterAlpha && _PWMinNumberAlpha
	      && _PWMinSpecialCharSet && _PWNotContainCustomize && _PWEasyGuess;
};


var resetPasswordPolicyCheckStatus = function(passwordPolicy) {
	if ($(".PWMinimumLength")) {
		$(".PWMinimumLength").removeClass('satisfy');
	}
	if ($(".PWMaximumLength")) {
		$(".PWMaximumLength").removeClass('satisfy');
	}
	if ($(".PWMinLowLength")) {
		$(".PWMinLowLength").removeClass('satisfy');
	}
	if ($(".PWMinCapLength")) {
		$(".PWMinCapLength").removeClass('satisfy');
	}
	if ($(".PWMinLetterLength")) {
		$(".PWMinLetterLength").removeClass('satisfy');
	}
	if ($(".PWMinNumberLength")) {
		$(".PWMinNumberLength").removeClass('satisfy');
	}
	if ($(".PWMinSpecialLength")) {
		$(".PWMinSpecialLength").removeClass('satisfy');
	}

	if ($(".PWCustomize")) {
		$(".PWCustomize").removeClass('satisfy');
	}
	if ($(".PWEasyguess")) {
		$(".PWEasyguess").removeClass('satisfy');
	}
};
$(document).ready(function() {
    // give some time for saved form fields to get populated. IE/Chrome have some timing issues.
    setTimeout(initializeForm , 100);
    var cookieEnabled=(navigator.cookieEnabled)?true:false;
    if(!cookieEnabled){
    	$('#globalInfo').css('display','block');
    } 
    if((idbPageVersion == 'v1') || (idbPageVersion == 'v2')) {
    	document.oncontextmenu = function() { return false; }
    }else{
    	if($('#dropdown').html()==undefined) return;
	    var menuExpanded = false;
	    var menu = new WWF.Menu({
	    	scrollHeight: 400,
	    	width: 180,
	    	renderTo: '#dropdown',
			fields: ['label', 'Email'],
			data: JSON.parse(localeData),
			onClick: function(data, c){
				reloadPageWithSelectedLocale(redirectUrl, 'locale=' + data.Email);
			},
			onShow: function(){
				$(document.body).bind('click', hideMenu);
			},
			onHide: function(){
				$(document.body).unbind('click', hideMenu);
			}
		});
		$('#languageSelector').bind('click',function(){
			menu.view.css("margin", "10px 0 0 -120px");	    
		    if(!menuExpanded){
				menu.show(this);
				menuExpanded = true;
			}else{
				menu.hide(this);
				menuExpanded = false;
			}
		});	
		function hideMenu(){
			menu.hide();
			menuExpanded = false;
		}
	}
});
