/*
  Hito lib/ toast
  Modified onsen ui notification component.(framework/js/notification.js)
  + added show method to show toast
  - removed codes to show buttons
  - removed alert, confirm and prompt methods
*/
/**********OnsenUI source License*******************************************/
/*
 Copyright 2013-2015 ASIAL CORPORATION
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

window.hito = window.hito||{};
window.hito.toast = (function() {
    var createAlertDialog = function(time,title, message, buttonLabels, primaryButtonIndex, modifier, animation, callback, messageIsHTML, cancelable, promptDialog, autofocus, placeholder) {
        var dialogEl = angular.element('<ons-alert-dialog>'),
            titleEl = angular.element('<div>').addClass('alert-dialog-title').text(title),
            messageEl = angular.element('<div>').addClass('alert-dialog-content'),
            footerEl = angular.element('<div>').addClass('alert-dialog-footer'),
            inputEl;
        if (modifier) {
            dialogEl.attr('modifier', modifier);
        }

        dialogEl.attr('animation', animation);

        //added
        //hide background color
        dialogEl.attr('mask-color',"rgba(0,0,0,0)")

        if (messageIsHTML) {
            messageEl.html(message);
        } else {
            messageEl.text(message);
        }

        dialogEl.append(titleEl).append(messageEl);

        dialogEl.append(footerEl);

        angular.element(document.body).append(dialogEl);
        ons.compile(dialogEl[0]);
        var alertDialog = dialogEl.data('ons-alert-dialog');

        if (buttonLabels.length <= 2) {
            footerEl.addClass('alert-dialog-footer--one');
        }

        //removed codes to show buttons


        alertDialog.show({
            callback: function() {
                if(promptDialog && autofocus) {
                    inputEl[0].focus();
                }
            }
        });

        //added
        //close dialog
        setTimeout(function() {
            alertDialog.destroy();
            alertDialog = null;
            inputEl = null;
        },time);

        dialogEl = titleEl = messageEl = footerEl = null;
    };

    return {
        //added
        show: function(options){
            var defaults = {
                buttonLabel: 'OK',
                animation: 'default',
                title: 'Alert',
                time: 2000,
                callback: function() {}
            };
            options = angular.extend({}, defaults, options);

            createAlertDialog(
                options.time,
                options.title,
                    options.message || options.messageHTML,
                [options.buttonLabel],
                0,
                options.modifier,
                options.animation,
                options.callback,
                !options.message ? true : false,
                false, false, false
            );
        }
        //removed alert,prompt,confirm mothod
    };
})();