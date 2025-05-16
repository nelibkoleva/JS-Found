function gladitorInventory(arr) {

    let inventory = arr.shift().split(' ');  // ['SWORD', 'Shield', 'Spear']
        
    for ( command of arr) {
        let [action, item] = command.split(' '); // ['Buy', 'Bag']  // ['Trash', 'Shield'] // ['Repair', 'Spear'] // ['Upgrade', 'SWORD-Steel']}
        if (action === 'Buy') {            
            if (!inventory.includes(item)) {            
                    inventory.push(item);
            }
        } else if (action === 'Trash') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
            }
        }  else if (action === 'Repair') {
             if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
                inventory.push(item);
             }
        } else if (action === 'Upgrade') {


                     let [itemName, upgrade] = item.split('-');
                if (inventory.includes(itemName)) {
                   
                    inventory.splice(inventory.indexOf(itemName) + 1, 0, `${itemName}:${upgrade}`); 
                
          
            }
        }
        }
    console.log(inventory.join(' '));
    }
    

gladitorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])

  
