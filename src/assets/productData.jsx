const products = [
    {
        "id": 0,
        "productName": "Strong water from Sweden",
        "productPrice": "9.5",
        "image": 3,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Veal",
            "detail2": "Pepper",
            "detail3": "Veal",
            "detail4": "Spice"
        }
    },
    {
        "id": 1,
        "productName": "Mild water from Sweden",
        "productPrice": "2.75",
        "image": 2,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Spice",
            "detail2": "Pork",
            "detail3": "Pork",
            "detail4": "Pear"
        }
    },
    {
        "id": 2,
        "productName": "Fresh water from Germany",
        "productPrice": "12.65",
        "image": 7,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Yoghurt",
            "detail2": "Spice",
            "detail3": "Cocoa Butter",
            "detail4": "Yoghurt"
        }
    },
    {
        "id": 3,
        "productName": "Excellent water from Netherland",
        "productPrice": "2.5",
        "image": 7,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Cocoa Butter",
            "detail2": "Wine",
            "detail3": "Crab",
            "detail4": "Pastry"
        }
    },
    {
        "id": 4,
        "productName": "Great water from Sweden",
        "productPrice": "6.55",
        "image": 7,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pepper",
            "detail2": "Spice",
            "detail3": "Yoghurt",
            "detail4": "Onions"
        }
    },
    {
        "id": 5,
        "productName": "Fresh water from Sweden",
        "productPrice": "5.5",
        "image": 12,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Veal",
            "detail2": "Yoghurt",
            "detail3": "Soap",
            "detail4": "Beer"
        }
    },
    {
        "id": 6,
        "productName": "Tasty water from Usa",
        "productPrice": "15.90",
        "image": 12,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Food Colouring",
            "detail2": "Flour Dark Rye",
            "detail3": "Cheese",
            "detail4": "Pear"
        }
    },
    {
        "id": 7,
        "productName": "Excellent water from Norway",
        "productPrice": "11.5",
        "image": 12,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork Loin Cutlets",
            "detail2": "Pork Loin Cutlets",
            "detail3": "Pepper",
            "detail4": "Juice"
        }
    },
    {
        "id": 8,
        "productName": "Fresh water from Mexico",
        "productPrice": "4.85",
        "image": 10,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork Loin Cutlets",
            "detail2": "Cocoa Butter",
            "detail3": "Pepper",
            "detail4": "Onions"
        }
    },
    {
        "id": 9,
        "productName": "Mild water from Denmark",
        "productPrice": "8.35",
        "image": 6,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork Loin Cutlets",
            "detail2": "Juice",
            "detail3": "Flour Dark Rye",
            "detail4": "Ostrich - Prime Cut"
        }
    },
    {
        "id": 10,
        "productName": "Fresh water from Usa",
        "productPrice": "6.75",
        "image": 2,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Food Colouring",
            "detail2": "Pork Loin Cutlets",
            "detail3": "Yoghurt",
            "detail4": "Onions"
        }
    },
    {
        "id": 11,
        "productName": "Fresh water from Germany",
        "productPrice": "9.85",
        "image": 11,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pate",
            "detail2": "Straws",
            "detail3": "Pate",
            "detail4": "Pear"
        }
    },
    {
        "id": 12,
        "productName": "Excellent water from Mexico",
        "productPrice": "6.90",
        "image": 4,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork Loin Cutlets",
            "detail2": "Food Colouring",
            "detail3": "Soup",
            "detail4": "Wine"
        }
    },
    {
        "id": 13,
        "productName": "Tasty water from Denmark",
        "productPrice": "7.40",
        "image": 8,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Flour Dark Rye",
            "detail2": "Tendrils",
            "detail3": "Beer",
            "detail4": "Food Colouring"
        }
    },
    {
        "id": 14,
        "productName": "Excellent water from Usa",
        "productPrice": "9.80",
        "image": 4,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Tendrils",
            "detail2": "Carbonated Water",
            "detail3": "Pear",
            "detail4": "Crab"
        }
    },
    {
        "id": 15,
        "productName": "Mild water from Denmark",
        "productPrice": "17.30",
        "image": 2,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Tendrils",
            "detail2": "Onions",
            "detail3": "Flour Dark Rye",
            "detail4": "Wine"
        }
    },
    {
        "id": 16,
        "productName": "Fresh water from Denmark",
        "productPrice": "17.35",
        "image": 11,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine ",
            "detail2": "Pork Loin Cutlets",
            "detail3": "Pepper",
            "detail4": "Wine "
        }
    },
    {
        "id": 17,
        "productName": "Mild water from Germany",
        "productPrice": "9.80",
        "image": 8,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Food Colouring",
            "detail2": "Beer",
            "detail3": "Carbonated Water",
            "detail4": "Yoghurt"
        }
    },
    {
        "id": 18,
        "productName": "Mild water from Ireland",
        "productPrice": "15.25",
        "image": 8,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Carbonated Water",
            "detail2": "Beer",
            "detail3": "Pineapple",
            "detail4": "Soup"
        }
    },
    {
        "id": 19,
        "productName": "Great water from Usa",
        "productPrice": "20.10",
        "image": 4,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine ",
            "detail2": "Wine",
            "detail3": "Crab",
            "detail4": "Cheese"
        }
    },
    {
        "id": 20,
        "productName": "Strong water from Netherland",
        "productPrice": "9.20",
        "image": 1,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Yokaline",
            "detail2": "Carbonated Water",
            "detail3": "Crab",
            "detail4": "Straws"
        }
    },
    {
        "id": 21,
        "productName": "Tasty water from Germany",
        "productPrice": "15.40",
        "image": 12,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Veal",
            "detail2": "Pate",
            "detail3": "Wine",
            "detail4": "Wine"
        }
    },
    {
        "id": 22,
        "productName": "Strong water from Ireland",
        "productPrice": "2.30",
        "image": 11,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Yokaline",
            "detail2": "Pate",
            "detail3": "Pear",
            "detail4": "Wine"
        }
    },
    {
        "id": 23,
        "productName": "Excellent water from Mexico",
        "productPrice": "10.90",
        "image": 1,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Juice",
            "detail2": "Food Colouring",
            "detail3": "Carbonated Water",
            "detail4": "Straws"
        }
    },
    {
        "id": 24,
        "productName": "Great water from Usa",
        "productPrice": "13.35",
        "image": 4,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Cheese",
            "detail2": "Pork",
            "detail3": "Onions",
            "detail4": "Pear"
        }
    },
    {
        "id": 25,
        "productName": "Excellent water from Ireland",
        "productPrice": "13.80",
        "image": 3,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine ",
            "detail2": "Pear",
            "detail3": "Soap",
            "detail4": "Onions"
        }
    },
    {
        "id": 26,
        "productName": "Mild water from Finland",
        "productPrice": "1.90",
        "image": 11,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Juice",
            "detail2": "Veal",
            "detail3": "Juice",
            "detail4": "Yokaline"
        }
    },
    {
        "id": 27,
        "productName": "Tasty water from Ireland",
        "productPrice": "17.30",
        "image": 11,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Soap",
            "detail2": "Cocoa Butter",
            "detail3": "Straws",
            "detail4": "Wine "
        }
    },
    {
        "id": 28,
        "productName": "Mild water from Ireland",
        "productPrice": "18.25",
        "image": 7,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Crab",
            "detail2": "Wine",
            "detail3": "Onions",
            "detail4": "Wine"
        }
    },
    {
        "id": 29,
        "productName": "Excellent water from Mexico",
        "productPrice": "19.85",
        "image": 9,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Veal",
            "detail2": "Flour Dark Rye",
            "detail3": "Food Colouring",
            "detail4": "Beer"
        }
    },
    {
        "id": 30,
        "productName": "Great water from Germany",
        "productPrice": "10.85",
        "image": 6,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Soup",
            "detail2": "Juice",
            "detail3": "Onions",
            "detail4": "Pate"
        }
    },
    {
        "id": 31,
        "productName": "Fresh water from Netherland",
        "productPrice": "3.65",
        "image": 6,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork",
            "detail2": "Juice",
            "detail3": "Juice",
            "detail4": "Soap"
        }
    },
    {
        "id": 32,
        "productName": "Mild water from Ireland",
        "productPrice": "17.35",
        "image": 6,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork",
            "detail2": "Ostrich - Prime Cut",
            "detail3": "Pate",
            "detail4": "Juice"
        }
    },
    {
        "id": 33,
        "productName": "Tasty water from Mexico",
        "productPrice": "19.10",
        "image": 8,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Spice",
            "detail2": "Pate",
            "detail3": "Cocoa Butter",
            "detail4": "Pork"
        }
    },
    {
        "id": 34,
        "productName": "Strong water from Denmark",
        "productPrice": "8.70",
        "image": 7,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork",
            "detail2": "Food Colouring",
            "detail3": "Juice",
            "detail4": "Soap"
        }
    },
    {
        "id": 35,
        "productName": "Mild water from Norway",
        "productPrice": "7.55",
        "image": 5,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine",
            "detail2": "Pork",
            "detail3": "Crab",
            "detail4": "Pear"
        }
    },
    {
        "id": 36,
        "productName": "Mild water from Netherland",
        "productPrice": "18.25",
        "image": 8,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Straws",
            "detail2": "Flour Dark Rye",
            "detail3": "Soap",
            "detail4": "Pineapple"
        }
    },
    {
        "id": 37,
        "productName": "Excellent water from Finland",
        "productPrice": "19.60",
        "image": 1,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Cheese",
            "detail2": "Cocoa Butter",
            "detail3": "Veal",
            "detail4": "Yoghurt"
        }
    },
    {
        "id": 38,
        "productName": "Excellent water from Netherland",
        "productPrice": "15.10",
        "image": 1,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Juice",
            "detail2": "Yokaline",
            "detail3": "Soap",
            "detail4": "Pear"
        }
    },
    {
        "id": 39,
        "productName": "Mild water from Mexico",
        "productPrice": "9.10",
        "image": 1,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Beer",
            "detail2": "Wine",
            "detail3": "Wine ",
            "detail4": "Onions"
        }
    },
    {
        "id": 40,
        "productName": "Excellent water from Finland",
        "productPrice": "8.20",
        "image": 7,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Spice",
            "detail2": "Soup",
            "detail3": "Yokaline",
            "detail4": "Pastry"
        }
    },
    {
        "id": 41,
        "productName": "Tasty water from Usa",
        "productPrice": "19.35",
        "image": 9,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine",
            "detail2": "Juice",
            "detail3": "Juice",
            "detail4": "Beer"
        }
    },
    {
        "id": 42,
        "productName": "Mild water from Netherland",
        "productPrice": "1.10",
        "image": 4,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Food Colouring",
            "detail2": "Crab",
            "detail3": "Pork",
            "detail4": "Pork Loin Cutlets"
        }
    },
    {
        "id": 43,
        "productName": "Fresh water from Netherland",
        "productPrice": "17.50",
        "image": 2,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Flour Dark Rye",
            "detail2": "Pork Loin Cutlets",
            "detail3": "Straws",
            "detail4": "Wine"
        }
    },
    {
        "id": 44,
        "productName": "Great water from Denmark",
        "productPrice": "18.90",
        "image": 1,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Tendrils",
            "detail2": "Wine",
            "detail3": "Spice",
            "detail4": "Wine "
        }
    },
    {
        "id": 45,
        "productName": "Great water from Netherland",
        "productPrice": "4.35",
        "image": 4,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Ostrich - Prime Cut",
            "detail2": "Pork Loin Cutlets",
            "detail3": "Spice",
            "detail4": "Straws"
        }
    },
    {
        "id": 46,
        "productName": "Great water from Netherland",
        "productPrice": "11.25",
        "image": 5,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pate",
            "detail2": "Cocoa Butter",
            "detail3": "Pork",
            "detail4": "Juice"
        }
    },
    {
        "id": 47,
        "productName": "Strong water from Sweden",
        "productPrice": "20.95",
        "image": 9,
        "rating": 5,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine ",
            "detail2": "Pear",
            "detail3": "Juice",
            "detail4": "Cocoa Butter"
        }
    },
    {
        "id": 48,
        "productName": "Strong water from Denmark",
        "productPrice": "14.5",
        "image": 6,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Veal",
            "detail2": "Tendrils",
            "detail3": "Wine",
            "detail4": "Carbonated Water"
        }
    },
    {
        "id": 49,
        "productName": "Fresh water from Mexico",
        "productPrice": "1.45",
        "image": 3,
        "rating": 3,
        "quantity": 1,
        "productDetails": {
            "detail1": "Soap",
            "detail2": "Juice",
            "detail3": "Food Colouring",
            "detail4": "Wine"
        }
    },
    {
        "id": 50,
        "productName": "Fresh water from Finland",
        "productPrice": "12.60",
        "image": 8,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Spice",
            "detail2": "Pineapple",
            "detail3": "Ostrich - Prime Cut",
            "detail4": "Cocoa Butter"
        }
    },
    {
        "id": 51,
        "productName": "Tasty water from Norway",
        "productPrice": "4.60",
        "image": 2,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Cheese",
            "detail2": "Straws",
            "detail3": "Wine",
            "detail4": "Juice"
        }
    },
    {
        "id": 52,
        "productName": "Tasty water from Norway",
        "productPrice": "15.65",
        "image": 12,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Tendrils",
            "detail2": "Wine ",
            "detail3": "Wine ",
            "detail4": "Carbonated Water"
        }
    },
    {
        "id": 53,
        "productName": "Excellent water from Germany",
        "productPrice": "4.55",
        "image": 5,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Yokaline",
            "detail2": "Pineapple",
            "detail3": "Veal",
            "detail4": "Juice"
        }
    },
    {
        "id": 54,
        "productName": "Excellent water from Denmark",
        "productPrice": "1.20",
        "image": 8,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Crab",
            "detail2": "Juice",
            "detail3": "Juice",
            "detail4": "Spice"
        }
    },
    {
        "id": 55,
        "productName": "Great water from Finland",
        "productPrice": "5.65",
        "image": 2,
        "rating": 2,
        "quantity": 1,
        "productDetails": {
            "detail1": "Pork",
            "detail2": "Juice",
            "detail3": "Flour Dark Rye",
            "detail4": "Juice"
        }
    },
    {
        "id": 56,
        "productName": "Fresh water from Finland",
        "productPrice": "8.5",
        "image": 9,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Wine",
            "detail2": "Pastry",
            "detail3": "Pate",
            "detail4": "Beer"
        }
    },
    {
        "id": 57,
        "productName": "Fresh water from Usa",
        "productPrice": "14.25",
        "image": 3,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Juice",
            "detail2": "Wine",
            "detail3": "Wine",
            "detail4": "Wine"
        }
    },
    {
        "id": 58,
        "productName": "Fresh water from Denmark",
        "productPrice": "15.70",
        "image": 10,
        "rating": 1,
        "quantity": 1,
        "productDetails": {
            "detail1": "Ostrich - Prime Cut",
            "detail2": "Soap",
            "detail3": "Pineapple",
            "detail4": "Cheese"
        }
    },
    {
        "id": 59,
        "productName": "Mild water from Sweden",
        "productPrice": "11.20",
        "image": 8,
        "rating": 4,
        "quantity": 1,
        "productDetails": {
            "detail1": "Tendrils",
            "detail2": "Juice",
            "detail3": "Spice",
            "detail4": "Wine"
        }
    }
]

export {products}