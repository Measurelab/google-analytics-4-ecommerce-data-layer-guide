/**
 * This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
 * This is the Google Analytics 4 / App + Web equivalent of UA Enhanced Ecommerce's Promotion Click event (https://github.com/Measurelab/gtm-dl-guide/blob/master/ec-promo-click.js)
 * 
 * Push this event when a user clicks on a promotion.
 */

window.dataLayer.push({
    'event': 'select_promotion',
    'ecommerce': {
        'currency': 'GBP',                               // The local currency of the price that is collected - optional
        'items': [{
                'item_name': 'Vulcan - 6 Days',              // The item's name - required.
                'item_id': 'VULC6-024059',                   // The unique ID/SKU of the item - required.
                'price': '799.99',                           // Purchase price of the item - optional
                'item_brand': 'Federation Cruises',          // Brand of the item - optional
                'item_category': 'Holidays',                 // The (highest-level) category of the item - optional
                'item_category_2': 'Trekking',               // The second highest level of the item’s category or an alternative category (up to 5 categories total) - optional
                'item_variant': 'Week',                      // Variant of the item - optional
                'promotion_id': 'ELADREL_PROMOIV',           // The id of any promotion associated with the event - required
                'promotion_name': 'El-Adrel Sale',           // The name of any promotion associated with the event - required
                'creative_name': 'el_ardel_banner1',         // The name of the creative for the promotion associated with the event - optional
                'creative_slot': 'slot1',                    // The creative slot of the promotion associated with the event when it was presented to the user - optional
                'location_id': 'hero_banner',                // The location of the promotion associated with the event when it was presented to the user - optional
                'index': 1,                                  // The position of the promotion - optional
                'quantity': '1'                              // The quantity of the given item - optional
            }]
    }
});