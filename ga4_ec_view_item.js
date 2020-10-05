/**
 * This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
 * This is the Google Analytics 4 / App + Web equivalent of UA Enhanced Ecommerce's Product Detail View event (https://github.com/Measurelab/gtm-dl-guide/blob/master/ec-detail.js)
 * 
 * Push this event when a product detail page loads.
 */

dataLayer.push({
    'event': 'view_item',
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
                'quantity': '1'                              // The quantity of the given item - optional
            }]
    }
});