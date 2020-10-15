# google-analytics-4-ecommerce-data-layer-guide
Data layer examples for ecommerce features for Google Analytics 4 (formerly App + Web)

Ecommerce events covered in this repository:

- [view_item_list (Product Impressions)](/ga4_ec_view_item_list.js)
- [select_item (Product Clicks)](/ga4_ec_select_item.js)
- [view_item (Product Detail Views)](/ga4_ec_view_item.js)
- [add_to_cart (Add To Cart)](/ga4_ec_add_to_cart.js)
- [remove_from_cart (Remove From Cart)](/ga4_ec_remove_from_cart.js)
- [begin_checkout (Initiating Checkout Step/Action)](/ga4_ec_begin_checkout.js)
- [add_payment_info (Payment Checkout Step)](/ga4_ec_add_payment_info.js)
- [purchase (Purchase)](/ga4_ec_purchase.js)
- [refund (Refund Full/Partial)](/ga4_ec_refund.js)
- [view_promotion (Promotion Impressions)](/ga4_ec_view_promotion.js)
- [select_promotion (Promotion Clicks)](/ga4_ec_select_promotion.js)

Code snippets built using previous Star Trek themed values from the old [gtm-dl-guide for ecommerce](https://github.com/Measurelab/gtm-dl-guide) as well as developer guides from Google: [GA](https://developers.google.com/analytics/devguides/collection/app-web/ecommerce#measure_refunds) & [GTM](https://developers.google.com/tag-manager/ecommerce-appweb#measure_refunds)

Custom JS variable for Google Tag Manager for converting Enhanced Ecommerce data layer events into a GA4-compatible format:
- [ga4EcomConvert() (Ecommerce Object Conversion)](/ga4EcomConvert.js)
