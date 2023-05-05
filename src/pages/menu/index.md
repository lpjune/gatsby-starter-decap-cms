---
heading: Great coffee with a conscience
path: /menu
templateKey: menu-page
title: Our Menu
image: /img/jumbotron.jpg
main:
  menu_sections:
    snacks:
      - name: Lobster Bisque
        price: '12'
      - name: Shrimp Cocktail
        price: 1/2lb 15
        price2: 1lb 27
      - name: 'Tuna Poke Crisps*'
        price: '19'
      - name: Coconut Shrimp
        price: '17'
      - name: Bison Chili
        price: '14'
    
    french_fries:
      base_price: '9'
      sections:
        - title: Seasoning
          items:
            - name: Sea Salt
            - name: Malt Vinegar
            - name: Cracked Pepper
            - name: Old Bay
            - name: Truffle
              price: '+4'
        - title: Sauce
          items:
            - name: Garlic Aioli
            - name: Zippy
            - name: Ranch
            - name: Blue Cheese
            - name: Cheesy
              price: '+4'
        - title: Protein
          items:
            - name: Crispy or Grilled Chicken
              price: '+10'
            - name: Bison Chili
              price: '+10'
            - name: Crispy Cod
              price: '+10'

    salads:
      items:
        - name: Greek Salad
          description: feta, olives, pepperoncini, artichoke, cucumber, scallion, crostini, BC greens, Greek vin
          price: '17'
        - name: Caesar
          description: romaine, parm, crouton
          price: '14'
        - name: Beet Salad
          description: honey granola, orange, blue cheese, BC Farms greens, poppyseed vin
          price: '17'
        - name: Apres Simple
          description: tomato, radish, scallion, BC Farms greens, red wine vin
          price: '10'
      salad_proteins:
        - name: Crab
          price: '16'
        - name: Salmon*
          price: '14'
        - name: Shrimp
          price: '12'
        - name: Crispy or Grilled Chicken
          price: '10'

    sandwiches:
      items:
        - name: Crab Roll
          description: crab salad, bacon, romaine, split top bun
          price: '25'
        - name: French Onion Burger
          description: braised onions, gruyere, greens, pretzel bun
          price: '20'
        - name: BLT
          description: bacon, lettuce, tomato, ciabatta
          price: '17'
        - name: Chicken Melt
          description: herbed chicken, prosciutto, manchego, pesto aioli, telera bun
          price: '20'
      sides:
        - name: Denver Co Chips
          price: '3'
        - name: Small Fries
          price: '4'
        - name: Apres Small Simple
          price: '4'

    pizza:
      - name: Pepperoni
        price: '20'
        description: mozzarella, red sauce
      - name: Cubano Style
        price: '24'
        description: prosciutto, black forest ham, mozzarella, pickle, french dijon, EVOO
      - name: Shiitake Truffle
        price: '26'
        description: mushrooms, mozzarella, onion, garlic, spinach, arugula, truffle
      - name: Margherita Pizza
        price: '21'
        description: tomato, mozzarella, parm, basil, EVOO
      - name: Cheese
        price: '18'
        description: cheese blend, red sauce
      - name: Down on the Farm
        price: '24'
        description: grilled chicken, bacon, cheddar, scallion, jalapeno, BBQ, ranch
      - name: Orange Crush
        price: '23'
        description: crispy chicken, buffalo sauce, cheddar, mozzarella, scallion

    byop:
      base_price: '18'
      sections:
        - header:
            title: Sauce
          items:
            - name: Red Sauce
            - name: Pesto
            - name: EVOO
            - name: Truffle
              price: '+4'
        - header:
            title: Cheese
          items:
            - name: Mozzarella
            - name: Cheddar
            - name: Feta
        - header:
            title: Meats
            price: '+2'
          items:
            - name: Grilled Chicken
            - name: Pepperoni
            - name: Sausage
            - name: Ham
        - header:
            title: Veggies
            price: '+1'
          items:
            - name: Mushrooms
            - name: Olives
            - name: Jalapenos
            - name: Tomatoes
            - name: Pepperoncini
            - name: Onions
            - name: Basil
            - name: Spinach

    garlic_knots:
      - name: Garlic Oil, Parm, Herbs
        price: '12'

    something_sweet:
      - name: Peanut Butter Brownie
        price: '5'
      - name: Berry Crisp
        price: '9'
      - name: Ice Cream Bar
        price: '5'

    kids_stuff:
      base_price: '15'
      items:
        - name: Chicken Tenders
        - name: Kids Cheeseburger
        - name: Crispy Cod
        - name: Grilled Cheese
        - name: Kid Pasta - red sauce or butter
          price: '10'

    cocktails:
      - name: Exit 180
        price: '12'
        description: Rye Old Fashioned
      - name: Real Dill Michelada
        price: '9'
        description: Modelo, Bloody Mix, Tabasco & Worcestshire
      - name: Simple Marg
        price: '13'
        description: Tequila, Cointreau, Simple, add Gran Marnier {+3}
      - name: Hot Toddy
        price: '10'
        description: Four Roses Bourbon, Lemon, Spiced Honey
      - name: Irish Coffee
        price: '10'
        description: Jameson, Coffee, Cane Sugar, Whippy

    wine_beer:
      wine:
        - name: Segura Brut Cava
          price: '9'
        - name: Pere Mata Rose Cava
          price: '14'
        - name: Allan Scott Sauvignon Blanc
          price: '13'
        - name: La Folliette Chardonnay
          price: '14'
        - name: Domaine Gassier Viognier
          price: '11'
        - name: Ramsay Pinot Noir
          price: '12'
        - name: Avignonese Cantaloro
          price: '12'
        - name: Cantena Malbec
          price: '12'
        - name: Murphy Goode Cabernet
          price: '14'




    # title: French Fries
    #   menu_items:
    #     - name: Sea Salt
    #     - name: Malt Vinegar
    #     - name: Cracked Pepper
    #     - name: Old Bay
    #     - name: Truffle
    #       price: '+4'
    
    # - title: Salads
    #   menu_items:
    #     - name: Greek Salad
    #       description: feta, olives, pepperoncini, artichoke, cucumber, scallion, crostini, BC greens, Greek vin
    #       price: '17'
    #     - name: Caesar
    #       description: romaine, parm, crouton
    #       price: '14'
    #     - name: Beet Salad
    #       description: honey granola, orange, blue cheese, BC Farms greens, poppyseed vin
    #       price: '17'
    #     - name: Apres Simple
    #       description: tomato, radish, scallion, BC Farms greens, red wine vin
    #       price: '10'

    # - title: Sandwiches
    #   menu_items:
    #     - name: Crab Roll
    #       description: crab salad, bacon, romaine, split top bun
    #       price: '25'
    #     - name: French Onion Burger
    #       description: braised onions, gruyere, greens, pretzel bun
    #       price: '20'
    #     - name: BLT
    #       description: bacon, lettuce, tomato, ciabatta
    #       price: '17'
    #     - name: Chicken Melt
    #       description: herbed chicken, prosciutto, manchego, pesto aioli, telera bun
    #       price: '20'

# pricing:
#   heading: Monthly subscriptions
#   description: We make it easy to make great coffee a part of your life. Choose
#     one of our monthly subscription plans to receive great coffee at your
#     doorstep each month. Contact us about more details and payment info.
#   plans:
#     - description: Perfect for the drinker who likes to enjoy 1-2 cups per day.
#       items:
#         - 3 lbs of coffee per month
#         - Green or roasted beans"
#         - One or two varieties of beans"
#       plan: Small
#       price: "50"
#     - description: Great for avid drinkers, java-loving couples and bigger crowds
#       items:
#         - 6 lbs of coffee per month
#         - Green or roasted beans
#         - Up to 4 different varieties of beans
#       plan: Big
#       price: "80"
#     - description: Want a few tiny batches from different varieties? Try our custom plan
#       items:
#         - Whatever you need
#         - Green or roasted beans
#         - Unlimited varieties
#       plan: Custom
#       price: ??
# full_image: /img/products-full-width.jpg
# intro:
#   blurbs:
#     - image: /img/coffee.png
#       text: >
#         We sell green and roasted coffee beans that are sourced directly from
#         independent farmers and farm cooperatives. We’re proud to offer a
#         variety of coffee beans grown with great care for the environment and
#         local communities. Check our post or contact us directly for current
#         availability.
#     - image: /img/coffee-gear.png
#       text: >
#         We offer a small, but carefully curated selection of brewing gear and
#         tools for every taste and experience level. No matter if you roast your
#         own beans or just bought your first french press, you’ll find a gadget
#         to fall in love with in our shop.
#     - image: /img/tutorials.png
#       text: >
#         Love a great cup of coffee, but never knew how to make one? Bought a
#         fancy new Chemex but have no clue how to use it? Don't worry, we’re here
#         to help. You can schedule a custom 1-on-1 consultation with our baristas
#         to learn anything you want to know about coffee roasting and brewing.
#         Email us or call the store for details.
#     - image: /img/meeting-space.png
#       text: >
#         We believe that good coffee has the power to bring people together.
#         That’s why we decided to turn a corner of our shop into a cozy meeting
#         space where you can hang out with fellow coffee lovers and learn about
#         coffee making techniques. All of the artwork on display there is for
#         sale. The full price you pay goes to the artist.
#   heading: What we offer
#   description: >
#     Kaldi is the ultimate spot for coffee lovers who want to learn about their
#     java’s origin and support the farmers that grew it. We take coffee
#     production, roasting and brewing seriously and we’re glad to pass that
#     knowledge to anyone. This is an edit via identity...
# testimonials:
#   - author: Elisabeth Kaurismäki
#     quote: The first time I tried Kaldi’s coffee, I couldn’t even believe that was
#       the same thing I’ve been drinking every morning.
#   - author: Philipp Trommler
#     quote: Kaldi is the place to go if you want the best quality coffee. I love
#       their stance on empowering farmers and transparency.
# title: Our Menu
# main:
#   heading: Great coffee with no compromises
#   description: >
#     We hold our coffee to the highest standards from the shrub to the cup.
#     That’s why we’re meticulous and transparent about each step of the coffee’s
#     journey. We personally visit each farm to make sure the conditions are
#     optimal for the plants, farmers and the local environment.
#   image1:
#     alt: A close-up of a paper filter filled with ground coffee
#     image: /img/products-grid3.jpg
#   image2:
#     alt: A green cup of a coffee on a wooden table
#     image: /img/products-grid2.jpg
#   image3:
#     alt: Coffee beans
#     image: /img/products-grid1.jpg
# image: /img/jumbotron.jpg
# description: Kaldi is the ultimate spot for coffee lovers who want to learn
#   about their java’s origin and support the farmers that grew it. We take coffee
#   production, roasting and brewing seriously and we’re glad to pass that
#   knowledge to anyone.
---
