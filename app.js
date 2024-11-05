import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

const resList = [
  {
    type: "restaurant",
    info: {
      resId: 19093236,
      name: "Kuttichira Biriyani Centre",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/19093236/09e7e40ef2591f14cf7649dfe2a4fddf_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/19093236/09e7e40ef2591f14cf7649dfe2a4fddf_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "6,822",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "26",
            reviewTextSmall: "26 Reviews",
            subtext: "26 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "6,796",
            reviewTextSmall: "6,796 Reviews",
            subtext: "6,796 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Kuttichira, Kozhikode",
        address: "12/50, South Beach, Kuttichira, Kozhikode",
        localityUrl: "kozhikode/kuttichira-restaurants",
      },
      timing: {
        text: "Opens in 2 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "18 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kuttichira-biriyani-centre-kuttichira/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kuttichira-biriyani-centre-kuttichira/order",
      clickActionDeeplink: "",
    },
    distance: "1.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19093236","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20326350,
      name: "Salkara Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/20326350/317ab923a05dd32b0ff163ffd83ecdbd_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20326350/317ab923a05dd32b0ff163ffd83ecdbd_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,109",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "2,109",
            reviewTextSmall: "2,109 Reviews",
            subtext: "2,109 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹350 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address: "28/1672, Govindapuram, Mini Bypass, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "23 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/salkara-restaurant-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/salkara-restaurant-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20326350","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21065869,
      name: "Kuttichira Biriyani Centre",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/21065869/940ee9796228bf8e686c78cb0a01a0ff_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/21065869/940ee9796228bf8e686c78cb0a01a0ff_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "328",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "328",
            reviewTextSmall: "328 Reviews",
            subtext: "328 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address: "35/2522, Near MIMS Hospital, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "20 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kuttichira-biriyani-centre-1-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kuttichira-biriyani-centre-1-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21065869","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Flat 10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19577577,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/18856196/5092c6b0d8980fc9a41576e6d46db585_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/18856196/5092c6b0d8980fc9a41576e6d46db585_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,354",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "57",
            reviewTextSmall: "57 Reviews",
            subtext: "57 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "4,297",
            reviewTextSmall: "4,297 Reviews",
            subtext: "4,297 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "Shop 5/3410 T, Ground Floor, RP Mall, Mavoor Road, Survey 1216/2, 6A, Kasaba Village, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/rolls/",
          name: "Rolls",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "25 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kfc-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kfc-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19577577","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Free French Fries - Medium",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20535147,
      name: "Vinayaka The Premium Veg",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/20535147/0bdf8af7e67ed15e1e412c3709bf8ff6_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/20535147/0bdf8af7e67ed15e1e412c3709bf8ff6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,273",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "1,270",
            reviewTextSmall: "1,270 Reviews",
            subtext: "1,270 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "59/3249, 3250, 3251, 3252, 3253, 3254, 3255, Near Kandamkulam Jubliee Hall, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/juices/",
          name: "Juices",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/vinayaka-the-premium-veg-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/vinayaka-the-premium-veg-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20535147","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹50 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19971633,
      name: "Mayflower Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/3/19971633/56ed24c2a43a10069e50784c6b4955ae_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/3/19971633/56ed24c2a43a10069e50784c6b4955ae_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "3,946",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.1",
            reviewCount: "7",
            reviewTextSmall: "7 Reviews",
            subtext: "7 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "3,939",
            reviewTextSmall: "3,939 Reviews",
            subtext: "3,939 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "4.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹750 for two",
      },
      cfo: {
        text: "₹300 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "5/1238, 65/4037 F3 & F6, Yas Tower, Wayanad Road, Near C H Masjid, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/sea-food/",
          name: "Seafood",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹300 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/mayflower-restaurant-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/mayflower-restaurant-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19971633","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Flat 15% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19644216,
      name: "Hotel New Malabar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/19644216/eb2335a14ab5e357c24a84192df31468_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/19644216/eb2335a14ab5e357c24a84192df31468_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "9,719",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "19",
            reviewTextSmall: "19 Reviews",
            subtext: "19 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "9,700",
            reviewTextSmall: "9,700 Reviews",
            subtext: "9,700 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "2/264-ABC, Karaparamba, North Circle, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/hotel-new-malabar-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/hotel-new-malabar-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19644216","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20353105,
      name: "M Grill",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20353105/b33c7372b859ed4b3dfd16ebc799a178_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20353105/b33c7372b859ed4b3dfd16ebc799a178_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.6",
        rating_text: "4.6",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "3,668",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.7",
            reviewCount: "3,665",
            reviewTextSmall: "3,665 Reviews",
            subtext: "3,665 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "800",
                  },
                  rating: "4.7",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.5",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹300 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "17/401-d1, D24, D25, D26, D27, D28, D29 & D30, Focus Mall, Rajaji Road, Poputhiyara, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/momos/",
          name: "Momos",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹300 for one",
      },
    },
    order: {
      deliveryTime: "32 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/m-grill-1-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/m-grill-1-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20353105","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 21105964,
      name: "Hotel Sagar & Gourmet Store",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/21105964/6a1ce3b1d9ae15a9033dfeb166821cbc_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/21105964/6a1ce3b1d9ae15a9033dfeb166821cbc_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "549",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "549",
            reviewTextSmall: "549 Reviews",
            subtext: "549 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "4.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "500",
                  },
                  rating: "3.4",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "26/315, Kottooli, Kuthiravattom, Kozhikode North Circle, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹400 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/hotel-sagar-gourmet-store-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/hotel-sagar-gourmet-store-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.7 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21105964","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19736241,
      name: "Alankar Family Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/19736241/1476784e9f9889736c4e4d04b29fb7ca_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/19736241/1476784e9f9889736c4e4d04b29fb7ca_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,832",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "13",
            reviewTextSmall: "13 Reviews",
            subtext: "13 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "2,819",
            reviewTextSmall: "2,819 Reviews",
            subtext: "2,819 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "71/968, Chungam Junction, West Hill PO, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/alankar-family-restaurant-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/alankar-family-restaurant-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "6.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19736241","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19706217,
      name: "Clock Tower Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19706217/c3aa503d5c7ccf2cb3faa9f3c9337fc9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/19706217/c3aa503d5c7ccf2cb3faa9f3c9337fc9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,530",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "14",
            reviewTextSmall: "14 Reviews",
            subtext: "14 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "5,516",
            reviewTextSmall: "5,516 Reviews",
            subtext: "5,516 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹800 for two",
      },
      cfo: {
        text: "₹350 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address: "70/1980, Karaparamba, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQyXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/turkish/",
          name: "Turkish",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹350 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/clock-tower-restaurant-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/clock-tower-restaurant-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19706217","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹50 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19098594,
      name: "ChicKing",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19098594/4e7ea47a8a66ca4648939e523ef76207_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/4/19098594/4e7ea47a8a66ca4648939e523ef76207_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,247",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "15",
            reviewTextSmall: "15 Reviews",
            subtext: "15 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "4,232",
            reviewTextSmall: "4,232 Reviews",
            subtext: "4,232 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹250 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "5/3418 B, Bridge view arcade, Near Big Bazar, Mavoor Road, Kozhikode, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "34 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/chicking-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/chicking-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"24d496da-0f0c-4273-b6c4-b154e9cf1eb6","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19098594","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹150 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20946634,
      name: "Kappi Koottam",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20946634/506a8755a4bdff34050e523ca779ed05_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20946634/506a8755a4bdff34050e523ca779ed05_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "593",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "593",
            reviewTextSmall: "593 Reviews",
            subtext: "593 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "500",
                  },
                  rating: "3.5",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Vellayil, Kozhikode",
        address:
          "62/2815, 62/2815A, 62/2816, South Circle, YMCA Cross Road, Vellayil, Kozhikode",
        localityUrl: "kozhikode/vellayil-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "26 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kappi-koottam-vellayil/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kappi-koottam-vellayil/order",
      clickActionDeeplink: "",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20946634","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20783075,
      name: "Kaapi Koottam",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20783075/79ca82ac5a5d6ca3ce2c5c132ffb9bb8_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20783075/79ca82ac5a5d6ca3ce2c5c132ffb9bb8_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.7",
        rating_text: "4.7",
        rating_subtitle: "Excellent",
        rating_color: "3F7E00",
        votes: "262",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.8",
            reviewCount: "262",
            reviewTextSmall: "262 Reviews",
            subtext: "262 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "800",
                  },
                  rating: "4.8",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Kuttichira, Kozhikode",
        address: "61/9751, CSI Complex, Bank Road, Kuttichira, Kozhikode",
        localityUrl: "kozhikode/kuttichira-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kaapi-koottam-kuttichira/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kaapi-koottam-kuttichira/order",
      clickActionDeeplink: "",
    },
    distance: "2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20783075","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19644216,
      name: "Hotel New Malabar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/19644216/eb2335a14ab5e357c24a84192df31468_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/19644216/eb2335a14ab5e357c24a84192df31468_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "9,719",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "19",
            reviewTextSmall: "19 Reviews",
            subtext: "19 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "9,700",
            reviewTextSmall: "9,700 Reviews",
            subtext: "9,700 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "2/264-ABC, Karaparamba, North Circle, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/hotel-new-malabar-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/hotel-new-malabar-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19644216","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19817704,
      name: "Hotel Rubi",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19817704/00078c3a5782b1367a6cdfcc03f710a9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19817704/00078c3a5782b1367a6cdfcc03f710a9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,627",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "4 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "1,623",
            reviewTextSmall: "1,623 Reviews",
            subtext: "1,623 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Malaparamba, Kozhikode",
        address: "33/4905, A-7, Chevarambalam, Malaparamba, Kozhikode",
        localityUrl: "kozhikode/malaparamba-malaparamba-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/hotel-rubi-malaparamba/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/hotel-rubi-malaparamba/order",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19817704","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19736241,
      name: "Alankar Family Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/1/19736241/1476784e9f9889736c4e4d04b29fb7ca_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/1/19736241/1476784e9f9889736c4e4d04b29fb7ca_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,832",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "13",
            reviewTextSmall: "13 Reviews",
            subtext: "13 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "2,819",
            reviewTextSmall: "2,819 Reviews",
            subtext: "2,819 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "71/968, Chungam Junction, West Hill PO, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/alankar-family-restaurant-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/alankar-family-restaurant-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "6.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19736241","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20544012,
      name: "Shree Krishna Coffee House",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/20544012/0bdf8af7e67ed15e1e412c3709bf8ff6_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/20544012/0bdf8af7e67ed15e1e412c3709bf8ff6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "228",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.5",
            reviewCount: "228",
            reviewTextSmall: "228 Reviews",
            subtext: "228 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.5",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.5",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹100 for two",
      },
      cfo: {
        text: "₹40 for one",
      },
      locality: {
        name: "Kuttichira, Kozhikode",
        address: "59/3891, Chalappuram, PV Swami Road, Kuttichira, Kozhikode",
        localityUrl: "kozhikode/kuttichira-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹40 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/shree-krishna-coffee-house-kuttichira/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/shree-krishna-coffee-house-kuttichira/order",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20544012","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19469699,
      name: "McDonald's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/19469699/2469f5027c5c2241be45878f75039896_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/19469699/2469f5027c5c2241be45878f75039896_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,981",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "35",
            reviewTextSmall: "35 Reviews",
            subtext: "35 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "3,946",
            reviewTextSmall: "3,946 Reviews",
            subtext: "3,946 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "4.0",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Ummalathoor, Kozhikode",
        address:
          "Shop 3005 - 3008, 3rd Floor, 2/1149, C290 - V293, Hilite Mall, Thondayad Bypass, Ummalathoor, Kozhikode",
        localityUrl: "kozhikode/ummalathoor-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/cafes/",
          name: "Cafe",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "39 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/mcdonalds-ummalathoor/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/mcdonalds-ummalathoor/order",
      clickActionDeeplink: "",
    },
    distance: "5.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19469699","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19555642,
      name: "Kovilakam Residency",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/19555642/5cd0c80ca6be03d44715d4f8e4343c05_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/19555642/5cd0c80ca6be03d44715d4f8e4343c05_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "2,687",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "10",
            reviewTextSmall: "10 Reviews",
            subtext: "10 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "2,677",
            reviewTextSmall: "2,677 Reviews",
            subtext: "2,677 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.3",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.0",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹1,000 for two",
      },
      cfo: {
        text: "₹400 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "26/286 B, C, Opp Aster Mims, P O Govindapuram, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "Closes in 8 minutes",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTM3XCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/middle-eastern/",
          name: "Middle Eastern",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/european/",
          name: "European",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/oriental/",
          name: "Oriental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹400 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/kovilakam-residency-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/kovilakam-residency-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19555642","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹200 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19706217,
      name: "Clock Tower Restaurant",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19706217/c3aa503d5c7ccf2cb3faa9f3c9337fc9_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/19706217/c3aa503d5c7ccf2cb3faa9f3c9337fc9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,530",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "14",
            reviewTextSmall: "14 Reviews",
            subtext: "14 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "5,516",
            reviewTextSmall: "5,516 Reviews",
            subtext: "5,516 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.7",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.6",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹800 for two",
      },
      cfo: {
        text: "₹350 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address: "70/1980, Karaparamba, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQyXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/turkish/",
          name: "Turkish",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹350 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/clock-tower-restaurant-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/clock-tower-restaurant-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "5.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19706217","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹50 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20475229,
      name: "Hotel Anhar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20475229/d6c29df5de14e360b0eb921e37744487_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/20475229/d6c29df5de14e360b0eb921e37744487_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "778",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "775",
            reviewTextSmall: "775 Reviews",
            subtext: "775 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹600 for two",
      },
      cfo: {
        text: "₹250 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "18/531, 532, 533, 525, 526, Poonthanam Building, MM Ali Road, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/kerala/",
          name: "Kerala",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/arabian/",
          name: "Arabian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹250 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/hotel-anhar-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/hotel-anhar-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20475229","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20998520,
      name: "Bentoz Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/20998520/5f01a8522f4db051ad01479a5693926e_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/20998520/5f01a8522f4db051ad01479a5693926e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "178",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "178",
            reviewTextSmall: "178 Reviews",
            subtext: "178 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.4",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.2",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹200 for two",
      },
      cfo: {
        text: "₹100 for one",
      },
      locality: {
        name: "Bilathikkulam, Kozhikode",
        address:
          "1270 C, Ground Floor, Kolloth Arcade, Eranhipalam, Rarichan Road, Bilathikkulam, Kozhikode",
        localityUrl: "kozhikode/bilathikkulam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/kozhikode/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹100 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/bentoz-pizza-bilathikkulam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/bentoz-pizza-bilathikkulam/order",
      clickActionDeeplink: "",
    },
    distance: "3.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20998520","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "20% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19661843,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/19532256/9979d1d417e4516c475045031bb9b4b1_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/chains/6/19532256/9979d1d417e4516c475045031bb9b4b1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,277",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "93",
            reviewTextSmall: "93 Reviews",
            subtext: "93 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "4,184",
            reviewTextSmall: "4,184 Reviews",
            subtext: "4,184 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
            bucketRatings: {
              buckets: [
                {
                  title: "Under 4 km",
                  bgColor: {
                    type: "green",
                    tint: "700",
                  },
                  rating: "4.1",
                },
                {
                  title: "4 km to 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.9",
                },
                {
                  title: "Above 7 km",
                  bgColor: {
                    type: "green",
                    tint: "600",
                  },
                  rating: "3.8",
                },
              ],
              tooltip: {
                title: "For orders under 4 km",
                bgColor: {
                  type: "green",
                  tint: "050",
                },
                borderColor: {
                  type: "green",
                  tint: "300",
                },
              },
            },
          },
        },
      },
      cft: {
        text: "₹600 for two",
      },
      cfo: {
        text: "₹250 for one",
      },
      locality: {
        name: "Palayam, Kozhikode",
        address:
          "Ground Floor, Noble Building, Indira Gandhi Road, Kozhikode, Palayam, Kozhikode",
        localityUrl: "kozhikode/palayam-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/kozhikode/restaurants/italian/",
          name: "Italian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹250 for one",
      },
    },
    order: {
      deliveryTime: "31 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/kozhikode/pizza-hut-palayam/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/kozhikode/pizza-hut-palayam/order",
      clickActionDeeplink: "",
    },
    distance: "2.5 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"ea1e1746-e95e-47ec-a4dc-664b7d8fecb2","location_type":"delivery_cell","location_id":"4298220835732193280","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19661843","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹125 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="log">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, image, cuisine, rating } = resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
      <h4>{rating.aggregate_rating}</h4>
      <h4>{resData.order.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

// Component Composition
const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
