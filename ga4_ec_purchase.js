/**
 * This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
 * This is the Google Analytics 4 / App + Web equivalent of UA Enhanced Ecommerce's Purchase event (https://github.com/Measurelab/gtm-dl-guide/blob/master/ec-transaction.js)
 * 
 * Push this event when the transaction confirmation page loads.
 */

dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
        'transaction_id': 'BOIS-4815162342',             // Unique ID for the transaction - required
        'affiliation': 'Federation Cruises',             // The store or affiliation from which this transaction occurred - optional
        'value': 1827.94,                                // Value (i.e., revenue) associated with the transaction - optional
        'tax': '380.00',                                 // Tax associated with the transaction - optional
        'shipping': '5.00',                              // Shipping costs associated with the transaction - optional
        'currency': 'GBP',                               // The local currency of the price that is collected - optional
        'coupon': 'PICARDDAY',                           // Coupon used for the transaction (if any) - optional
        'items': [{
            'item_name': 'Vulcan - 6 Days',                  // The item's name - required.
            'item_id': 'VULC6-024059',                       // The unique ID/SKU of the item - required.
            'price': '799.99',                               // Purchase price of the item - optional
            'item_brand': 'Federation Cruises',              // Brand of the item - optional
            'item_category': 'Holidays',                     // The (highest-level) category of the item - optional
            'item_category_2': 'Trekking',                   // The second highest level of the item’s category or an alternative category (up to 5 categories total) - optional
            'item_variant': 'Week',                          // Variant of the item - optional
            'quantity': '2',                                 // The quantity of the given item - optional
            'item_coupon': ''                                // Coupon associated specifically with the product (if any) - optional
        },
        {
            'item_name': 'Risa - 3 Days',
            'item_id': 'RIS3-027749',
            'price': '299.95',
            'item_brand': 'Federation Cruises',
            'item_category': 'Break',
            'item_category_2': 'Luxury Travel',
            'quantity': '1',
            'item_coupon': ''
        }]
    }
});