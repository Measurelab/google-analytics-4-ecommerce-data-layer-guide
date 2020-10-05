/**
 * This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.
 * This is the Google Analytics 4 / App + Web equivalent of UA Enhanced Ecommerce's Refund event (https://github.com/Measurelab/gtm-dl-guide/blob/master/ec-refund.js)
 * 
 * Push this event when the confirmation page of a completed FULL refund loads.
 */

dataLayer.push({
    'event': 'refund',
    'ecommerce': {
        'transaction_id': 'BOIS-4815162342',                 // Unique ID for the transaction - required
    }
});

/**
 * Push this event when the confirmation page of a completed PARTIAL refund loads.
 */

dataLayer.push({
    'event': 'refund',
    'ecommerce': {
        'transaction_id': 'BOIS-4815162342',             // Unique ID for the transaction - required
        'items': [{
            'item_name': 'Vulcan - 6 Days',                  
            'item_id': 'VULC6-024059',                       // The unique ID/SKU of the item being refunded - required.
            'price': '799.99',
            'item_brand': 'Federation Cruises',
            'item_category': 'Holidays',
            'item_category_2': 'Trekking',
            'item_variant': 'Week',
            'item_list_name': 'Search Results',
            'item_list_id': 'SR123',
            'index': 1,
            'quantity': '1'                                 // The quantity of the refunded item - required
        }]
    }
});