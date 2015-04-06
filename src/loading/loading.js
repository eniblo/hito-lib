/*
 Hito lib/ loadin
 */

window.hito = window.hito||{};
window.hito.loading = (function() {
    var modalEl;
    var createLoading = function(title, message, icon) {
        modalEl = angular.element('<ons-modal>');
        modalEl.attr('var', "hito_loading_modal");
        var iconEl = angular.element('<ons-icon>').attr({'icon':icon,"spin":"true"});
        var titleEl = angular.element('<span>').text(title);
        var messageEl = angular.element('<span>').text(message);
        //append multiple items?
        modalEl.append(iconEl).append('<br><br>').append(titleEl).append('<br>').append(message);
        angular.element(document.body).append(modalEl);
        ons.compile(modalEl[0]);
        hito_loading_modal.show();

        return;
    };
    var destroyLoading = function(){
        hito_loading_modal.hide();
        modalEl.remove();
        modalEl = null;
    };

    return {
        show: function(options){
            var defaults = {
                icon: 'ion-load-c',
                title: '',
                message: ''
            };
            options = angular.extend({}, defaults, options);

            createLoading(
                options.title,
                options.message,
                options.icon
            );
        },
        hide: function(){
            destroyLoading();
        }
    };
})();