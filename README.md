## How to Run
- The Driver class has created a conservatory object into which 17 birds of mixed species are inserted, into 5 separate aviaries. 
- Conditions like 5 birds per aviary, maximum of 20 aviaries and not mixing of waterfowl, flightless birds and birds of prey are checked. 

## The Conservatory Class
- The conservatory is of the form of a HashMap, where the key is the aviary and the value is of type List, where all the Birds pertaining to  that aviary are stored.
- The insertIntoConservatory method checks all the conditions given in the assignment description before inserting the bird into an aviary.
- The lookup method is used to find the location of a specific bird.
- The indexBirds methods gives a list of all the birds in the conservatory with their location.
- The getDirectory method lists all the aviaries and the birds they contain.

## The Bird Interface
- Lists all the methods to be used by all Bird Classes

## The BirdAbstract Class
- Implements the Bird Interface and defines all the common methods used by every Bird class.
- It is of type abstract.

## The Concrete Classes
- All the concrete classes like Pigeons, Shorebirds, etc extend the BirdAbstract class and inherit it's methods. 
-  Some special methods like favouriteSaying in the case of Parrot class and waterBody in the case of Waterfowl are used only in their specific classes.


