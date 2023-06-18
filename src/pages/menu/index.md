---
heading: Great coffee with a conscience
path: /menu
templateKey: menu-page
title: Our Menu
image: /img/pizza-twists.jpg
main:
  menu_sections:
    - title: Snacks
      width: 100%
      items:
      - name: Coconut Shrimp
        price: '17'
      - name: 'Tuna Poke Crisps*'
        price: '19'
      - name: Lump Crab Ceviche
        price: '24'
      - name: Sweet Pea Hummus
        price: '14'
    
    - title: French Fry Baskets
      width: 100%
      base_price: '9'
      orientation: horizontal
      subsections:
        - items:
            - name: Just Fries
              price: '10'
            - name: Crispy Chicken
              price: '19'
            - name: Grilled Chicken
              price: '20'
            - name: Lump Crab
              price: '24'
            - name: Short Rib
              price: '25'
            - name: Crispy Cod
              price: '20'
            - name: Truffle Parm
              price: '14'
        - title: Seasonings
          items:
            - name: Sea Salt
            - name: Malt Vinegar
            - name: Cracked Pepper
            - name: Old Bay
        - title: Sauces
          items:
            - name: Garlic Aioli
            - name: Zippy Aioli
            - name: Ranch
            - name: Blue Cheese

    - title: Salads
      width: 50%
      items:
        - name: Greek Salad
          description: feta, olives, pepperoncini, artichoke, cucumber, scallion, naan, BC greens, Greek vin
          price: '17'
        - name: Caesar
          description: romaine, parm, crouton
          price: '14'
        - name: Summer Tabbouleh
          description: farro, tomato, cucumber, summer squash, scallion, BC greens, radish, mint, red wine vin
          price: '17'
        - name: Apres Simple
          description: tomato, radish, scallion, BC Farms greens, red wine vin
          price: '10'
      subsections:
        - title: Salad Proteins
          orientation: horizontal
          items:
            - name: Lump Crab
              price: '16'
            - name: Salmon*
              price: '14'
            - name: Tuna Poke*
              price: '12'
            - name: Crispy Chicken
              price: '9'
            - name: Grilled Chicken
              price: '10'

    - title: Sandwiches
      width: 50%
      items:
        - name: Crab Roll
          description: lump crab salad, bacon, romaine, split top bun
          price: '25'
        - name: Hatch Green Chile Burger
          description: Beemster hatch chile gouda, mild chiles, garlic aioli, arugula, brioche bun
          price: '20'
          price2: + add bacon {+3}
        - name: BLT
          description: bacon, lettuce, tomato, ciabatta
          price: '17'
        - name: Teriyaki Chicken
          description: marinated grilled chicken, avocado, crispy onions, BC greens, telera bun
          price: '19'
      subsections:
        - title: Sides
          orientation: horizontal
          items:
            - name: Denver Co Chips
              price: '3'
            - name: Small Fries
              price: '4'
            - name: Apres Small Simple
              price: '4'

    - title: Pizzas
      width: 100%
      subtitle: starting @ 3PM
      items:
        - name: Pepperoni
          price: '20'
          description: mozzarella, red sauce
        - name: Meatzza
          price: '26'
          description: short rib, sausage, red sauce
        - name: Shiitake Truffle
          price: '26'
          description: mushrooms, mozzarella, onion, garlic, spinach, arugula, truffle
        - name: Cheese
          price: '18'
          description: cheese blend, red sauce
        - name: Down on the Farm
          price: '24'
          description: grilled chicken, bacon, cheddar, scallion, jalapeno, BBQ, ranch
        - name: Orange Crush
          price: '23'
          description: crispy chicken, buffalo sauce, cheddar, mozzarella, scallion
        - name: Margherita
          price: '22'
          description: tomato, mozzarella, parm, basil, red sauce, EVOO
        
  
    - title: BYOP
      width: 100%
      subtitle: Build Your Own Pizza
      base_price: '18'
      orientation: horizontal
      subsections:
        - title: Sauce
          items:
            - name: Red Sauce
            - name: Pesto
            - name: Olive Oil
            - name: Truffle Oil
              price: '+4'
        - title: Cheese
          items:
            - name: Mozzarella
            - name: Cheddar
            - name: Feta
        - title: Meats
          base_price: '+3'
          items:
            - name: Grilled Chicken
            - name: Pepperoni
            - name: Sausage
            - name: Short Rib
              price: '+5'
        - title: Veggies
          base_price: '+1'
          items:
            - name: Mushrooms
            - name: Olives
            - name: Jalapenos
            - name: Tomatoes
            - name: Pepperoncini
            - name: Onions
            - name: Basil
            - name: Spinach

    - title: Garlic Knots
      width: 100%
      subtitle: starting @ 3PM
      items:
        - name: garlic butter, parm, herbs
          price: '12'

    - title: Something Sweet
      width: 100%
      items:
        - name: Dark Chocolate Peanut Butter Brownie
          price: '6'
        - name: Strawberry Poundcake
          price: '9'
        - name: Ice Cream Bar
          price: '6'

    - title: Kids Stuff
      width: 100%
      subtitle: with fries or chips
      base_price: '15'
      items:
        - name: Crispy Tenders
        - name: Kids Cheeseburger
        - name: Crispy Cod
        - name: Grilled Cheese

    - title: Cocktails
      width: 100%
      items:
        - name: Exit 180
          price: '12'
          description: Rye Old Fashioned
        - name: Real Dill Michelada
          price: '10'
          description: Modelo, Bloody Mix, Tabasco & Worcestshire
        - name: Idleade
          price: '10'
          description: Gin, Vodka, Cucumber, Lemon, Lime, Agave, Grenadine
        - name: Simple Marg
          price: '13'
          description: Tequila, Cointreau, Lime, Sugar, add Gran Marnier {+3}
        - name: Bloody Mary
          price: '12'
          description: Vodka, Bloody Mix, Worcestershire, Pickle
        - name: Courtside Daily
          price: '13'
          description: Vodka, Lemonade, Iced Tea, Mango

    - title: Wine & Beer
      width: 100%
      orientation: horizontal
      subsections:
        - items:
          - name: Segura Brut Cava
            price: '10'
          - name: Deltetto Langhe Rose "Suasi"
            price: '12'
          - name: Allan Scott Sauvignon Blanc
            price: '14'
          - name: La Folliette Chardonnay
            price: '14'
          - name: Ramsay Pinot Noir
            price: '14'
          - name: Avignonese Cantaloro
            price: '12'
          - name: Cantena Malbec
            price: '12'
          - name: Murphy Goode Cabernet
            price: '15'
        - items:
          - name: Coors Banquet
            price: '5'
          - name: Coors Light
            price: '5'
          - name: Modelo
            price: '5'
          - name: VBC Blonde 16oz
            price: '8'
          - name: VBC Gore Creek IPA 16oz
            price: '8'
          - name: VBC Hazy IPA Rotating 16oz
            price: '9'
          - name: Boulevard Unfiltered Wheat
            price: '5'
          - name: Left Hand Nitro Stout
            price: '5'
          - name: Heineken 0.0 NA
            price: '6'

    - title: N/A Beverages
      width: 100%
      orientation: horizontal
      subsections:
        - items:
          - name: Pepsi
            price: '3'
          - name: Diet Pepsi
            price: '3'
          - name: Dr. Pepper
            price: '3'
          - name: Mountain Dew
            price: '3'
          - name: Ginger Ale
            price: '3'
          - name: Sierra Mist
            price: '3'
          - name: Pellegrino
            price: '6'
          - name: Red Bull
            price: '5'
        - items:
          - name: Iced Tea
            price: '4'
          - name: Lemonade
            price: '4'
          - name: Arnold Palmer
            price: '4'
        - title: Dram CBD Sodas
          base_price: '6'
          items:
            - name: Lemongrass
            - name: Gingergrass
        - title: Rocky Mountain Sodas
          base_price: '4'
          items:
            - name: Root Beer
            - name: Orange Cream
        - title: Big B's Juice
          base_price: '6'
          items:
            - name: Matcha Mint Lemonade
            - name: Apple Juice

    - title: Buckets
      width: 100%
      subtitle: for the pool/patio/courts or take it to your room
      items:
        - name: Domestic 6pack
          price: '26'
        - name: VBC Mix 4pack
          price: '28'
        - name: High Noon 4pack
          price: '28'
        - name: Idleade 4pack
          price: '35'
        - name: Canned Wine 4pack
          price: '20'

    - title: Wines by the Bottle
      width: 100%
      orientation: vertical
      subsections:
        - title: Bubbles
          items:
            - name: Segura Viudas Cava NV, Spain
              price: '38'
            - name: Doletetta Rose 375ml Laurant Perrier
              price: '75'
        - title: White
          items:
            - name: 2020 La Foillette Chardonnay
              price: '54'
            - name: 2020 Sonoma Cutrer Chardonnay
              price: '60'
            - name: 2017 Novellum Chardonnay
              price: '45'
            - name: 2019 Gassier Viogner Embruns
              price: '40'
            - name: 2020 Allan Scott Sauvignon Blanc
              price: '52'
            - name: 2020 Domaine Chatelain Sancerre
              price: '85'
            - name: 2021 Peritico Pinot Grigio
              price: '40'
            - name: 2019 Pine Ridge Chenin Blanc
              price: '46'
        - title: Red
          items:
            - name: 2020 Ramsey Pinot Noir
              price: '46'
            - name: 2021 Ken Wright Pinot Noir
              price: '75'
            - name: 2018 Aurelien Verdet Le Prieure
              price: '135'
            - name: 2019 Catena Malbec
              price: '40'
            - name: 2019 Tres Picos Garnacha
              price: '50'
            - name: 2018 Murphey Goode Cabernet Sauvignon
              price: '55'
            - name: 2016 Ramey Cabernet Sauvignon
              price: '90'
            - name: 2015 Jordan Cabernet Sauvignon
              price: '100'
            - name: 2015 Silver Oak Alexander Valley Cabernet Sauvignon
              price: '225'
            - name: 2019 Vietti Perbacco Nebbiolo
              price: '70'
---
