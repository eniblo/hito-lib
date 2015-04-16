/*
 Hito lib/ popover menu
 */

window.hito = window.hito || {};
window.hito.popoverMenu = (function () {
    var popoverEl;
    var createMenu = function (page,target, menues) {
        popoverEl = angular.element('<ons-popover>');
        popoverEl.attr('var', "hito_menu_popover");
        popoverEl.attr('cancelable', "");
        listEL = angular.element('<ons-list>');
        for (var i = 0, len = menues.length; i < len; i++) {
            var menuEL = angular.element('<ons-list-item>');
            menuEL.attr('modifier', "chevron");
            menuEL.attr('ng-click', "hito_menu_popover.hide();"+menues[i].func);
            var iconEl = angular.element('<ons-icon>').attr({'icon': menues[i].icon, "fixed-width": "true"});
            menuEL.append(iconEl).append(menues[i].title);
            listEL.append(menuEL);
        }
        popoverEl.append(listEL);

        page.element.append(popoverEl);
//        angular.element(document.body).append(popoverEl);
        ons.compile(popoverEl[0]);

        //TODO bad
        setTimeout(function () {
            hito_menu_popover.once("posthide", function () {
                destroyMenu();
            });
            hito_menu_popover.show(target);
        }, 0);

        return;
    };
    var destroyMenu = function () {
        //TODO Bad can't use destroy....
        //hito_menu_popover.destroy();
        popoverEl.remove();
        popoverEl = null;
    };

    return {
        show: function (page,target, menues, options) {
            if (popoverEl != null) {
                destroyMenu();
                return;
            }

            //no options but...
            var defaults = {
            };
            options = angular.extend({}, defaults, options);

            createMenu(
                page,
                target,
                menues
            );
        },
        hide: function () {
            hito_menu_popover.hide();
        }
    };
})();