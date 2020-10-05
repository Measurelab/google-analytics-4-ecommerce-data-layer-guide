/**
 * This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
 * This is similar to UA Enhanced Ecommerce's Checkout event for step 1 (https://github.com/Measurelab/gtm-dl-guide/blob/master/ec-checkout.js)
 * 
 * Push this event when the checkout process is started, either from clicking on a checkout button or when the first checkout page loads.
 */

dataLayer.push({
    'event': 'begin_checkout',
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
                'item_list_name': 'Search Results',          // The list in which the item was presented to the user (if associated with a list selection) - optional
                'item_list_id': 'SR123',                     // The list id in which the item was presented to the user (if associated with a list selection) - optional
                'index': 1,                                  // The list index (or position) in which the item was presented to the user (if associated with a list selection) - optional
                'quantity': '2'                              // The quantity of the given item - optional
            },
            {
                'item_name': 'Risa - 3 Days',
                'item_id': 'RIS3-027749',
                'price': '299.95',
                'item_brand': 'Federation Cruises',
                'item_category': 'Break',
                'item_category_2': 'Luxury Travel',
                'item_list_name': 'Search Results',
                'item_list_id': 'SR123',
                'index': 2,
                'quantity': '1'
            }]
    }
});