(function($) {
    /**
     * Ovverride autocomplete JS to remove image tags on selecting a node.
     */
    Drupal.behaviors.sportsched_participant_field = {
        attach: function(context, settings) {
            Drupal.jsAC.prototype.hidePopup = function(keycode) {
                // Select item if the right key or mousebutton was pressed.
                if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
                    var content = $(this.selected).data('autocompleteValue');
                    content = content.replace(/<img[^>]*>/g, "");
                    var key = content,
                    pieces = key.split('|');
                    key = key.replace(/<img[^>]*>/g, "");
                    this.input.value = key;
                }
                // Hide popup.
                var popup = this.popup;
                if (popup) {
                    this.popup = null;
                    $(popup).fadeOut('fast', function() {
                        $(popup).remove();
                    });
                }
                this.selected = false;
                $(this.ariaLive).empty();
            };
        }
    }
})(jQuery); 