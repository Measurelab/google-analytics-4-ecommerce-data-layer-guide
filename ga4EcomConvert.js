/**
 * Function:  ga4EcomConvert
 * 
 * Version:  1.0 (15th October 2020)
 * 
 * Purpose:  To convert Universal Analytics' Enhanged Ecommerce 'ecommerce' object into Google Analytics 4's new ecommerce schema within Google Tag Manager. This code should be stored as a Custom JavaScript variable.
 * 
 * IMPORTANT:
 *   -  The data layer events holding the Enhanced Ecommerce objects MUST have the same structure and names of nested objects as described here: https://developers.google.com/tag-manager/enhanced-ecommerce
 *   -  Some tweaking will be required if the format is not exact. This variable DOES NOT convert any product-scoped custom dimensions and/or metrics.
 * 
 * Variables to change:
 *   -  ecom:           This should point to Universal Analytics' Enhanced Ecommerce 'ecommerce' object, ideally through a Data Layer Variable in GTM
 *   -  event:          This should point to the 'event' name for each data layer event (Usually GTM's built-in variable Event)
 *   -  ecom_currency:  This will automatically try to extract the currencyCode property from within Universal Analytics' Enhanced Ecommerce 'ecommerce' object, but a default currency code value should be added.
 *   -  ee_* variables: These (10) variables should store the event name of the relevant data layer ecommerce event that will be pushed into the data layer
 * 
 * Author:  Victor Sarker
 * 
 * Measurelab 2020
 * 
 */

function ga4EcomConvert() {

    var ecom = ENHANCED_ECOMMERCE_OBJECT_FROM_DATA_LAYER // Original Enhanced Ecommerce object store as a data layer variable in GTM (e.g. {{ecommerce}})
    var event = DATA_LAYER_EVENT_NAME; // GTM's built-in Event variable (e.g. {{Event}})
    var ecom_currency = ecom.currencyCode || 'GBP'; // Detect existing currency code or set default (e.g. 'GBP')

    // Data layer event names for each Enhanced Ecommerce event
    // !! REPLACE VALUES WITH RELEVANT DATA LAYER EVENT NAMES !!
    var ee_prod_imp = 'productImpression';
    var ee_prod_click = 'productClick';
    var ee_prod_detail = 'productDetail';
    var ee_add_to_cart = 'addToCart';
    var ee_remove_from_cart = 'removeFromCart';
    var ee_promo_imp = 'promotionImpression';
    var ee_promo_click = 'promotionClick';
    var ee_checkout = 'checkout';
    var ee_purchase = 'purchase';
    var ee_refund = 'refund';

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * !!!!!!!!!!!!!!!!!!!!!!! DO NOT EDIT BELOW THIS LINE !!!!!!!!!!!!!!!!!!!!!!!!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    // Declare new App + Web ecommerce object for output
    var ga4_ecom = {
        ecom_event: event,
        currency: ecom_currency,
        items: []
    };

    var actionFieldObj; // For storing original Enhanced Ecommerce actionField object later

    // select which dataLayer event to re-map
    switch (event) {

        // PRODUCT IMPRESSIONS
        case ee_prod_imp:
            ecom.impressions.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '', // this or ID/SKU is required
                    'item_id': product.id || '', // this or name is required
                    'price': product.price || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': product.list || '',
                    'index': product.position || '',
                    'quantity': product.quantity || ''
                });
            });
            break;

            // PRODUCT CLICKS
        case ee_prod_click:
            ecom.click.actionField ? actionFieldObj = ecom.click.actionField : null

            ecom.click.products.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'price': product.price || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': actionFieldObj ? actionFieldObj.list : '',
                    'index': product.position || ''
                });
            });
            break;

            // PRODUCT DETAIL VIEWS
        case ee_prod_detail:
            ecom.detail.actionField ? actionFieldObj = ecom.detail.actionField : null

            ecom.detail.products.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'price': product.price || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': actionFieldObj ? actionFieldObj.list : '',
                    'index': product.position || '',
                    'quantity': product.quantity || ''
                });
            });
            break;

            // ADD TO CART
        case ee_add_to_cart:
            ecom.add.actionField ? actionFieldObj = ecom.add.actionField : null

            ecom.add.products.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'price': product.price || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': actionFieldObj ? actionFieldObj.list : '',
                    'index': product.position || '',
                    'quantity': product.quantity || ''
                });
            });
            break;

            // REMOVE FROM CART
        case ee_remove_from_cart:
            ecom.remove.actionField ? actionFieldObj = ecom.remove.actionField : null

            ecom.remove.products.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'price': product.price || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': actionFieldObj ? actionFieldObj.list : '',
                    'index': product.position || '',
                    'quantity': product.quantity || ''
                });
            });
            break;

            // PROMOTION IMPRESSIONS
        case ee_promo_imp:
            ecom.promoView.promotions.forEach(function (promo) {
                ga4_ecom.items.push({
                    'promotion_name': promo.name || '',
                    'promotion_id': promo.id || '',
                    'creative_name': promo.creative || '',
                    'creative_slot': promo.position || ''
                });
            });
            break;

            // PROMOTION CLICKS
        case ee_promo_click:
            ecom.promoClick.promotions.forEach(function (promo) {
                ga4_ecom.items.push({
                    'promotion_name': promo.name || '',
                    'promotion_id': promo.id || '',
                    'creative_name': promo.creative || '',
                    'creative_slot': promo.position || ''
                });
            });
            break;

            // CHECKOUT STEP
        case ee_checkout:
            ecom.checkout.actionField ? actionFieldObj = ecom.checkout.actionField : null

            ga4_ecom['checkout_step_no'] = actionFieldObj ? actionFieldObj.step : ''

            ecom.checkout.products.forEach(function (product) {
                ga4_ecom.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': actionFieldObj && actionFieldObj.hasOwnProperty('list') ? actionFieldObj.list : '',
                    'index': product.position || '',
                    'quantity': product.quantity || '',
                    'price': product.price || ''
                });
            });
            break;

            // PURCHASES
        case ee_purchase:
            ga4_ecom = {
                'purchase': ga4_ecom
            };

            ecom.purchase.actionField ? actionFieldObj = ecom.purchase.actionField : null

            ga4_ecom.purchase['transaction_id'] = actionFieldObj.id;
            ga4_ecom.purchase['affiliation'] = actionFieldObj.affiliation;
            ga4_ecom.purchase['value'] = actionFieldObj.revenue;
            ga4_ecom.purchase['tax'] = actionFieldObj.tax;
            ga4_ecom.purchase['shipping'] = actionFieldObj.shipping;
            ga4_ecom.purchase['coupon'] = actionFieldObj.coupon;

            ecom.purchase.products.forEach(function (product) {
                ga4_ecom.purchase.items.push({
                    'item_name': product.name || '',
                    'item_id': product.id || '',
                    'item_brand': product.brand || '',
                    'item_category': product.category || '',
                    'item_variant': product.variant || '',
                    'item_list_name': product.list || '',
                    'index': product.position || '',
                    'quantity': product.quantity || '',
                    'price': product.price || '',
                    'coupon': product.coupon || ''
                });
            });
            break;

            // REFUNDS
        case ee_refund:
            ecom.refund.actionField ? actionFieldObj = ecom.refund.actionField : null

            ga4_ecom['transaction_id'] = actionFieldObj.id;
            if (ecom.refund.products) {
                ecom.refund.products.forEach(function (product) {
                    ga4_ecom.items.push({
                        'item_name': product.name || '',
                        'item_id': product.id || '',
                        'price': product.price || '',
                        'item_brand': product.brand || '',
                        'item_category': product.category || '',
                        'item_variant': product.variant || '',
                        'item_list_name': actionFieldObj ? actionFieldObj.list : '',
                        'index': product.position || '',
                        'quantity': product.quantity || ''
                    });
                });
            } else {
                delete ga4_ecom.items;
            }
            break;
    }


    // Return result!
    return ga4_ecom;
}