  Menus 
    ex breakfast menu, dessert, wine
  
  Menu 
    title string

    has many items 

  Item 
    item_name string
    price float
    menu_id fk

    belongs to menu

  breakfast menu
    muffin $12.22 1
    egg $ 2.33 1 
