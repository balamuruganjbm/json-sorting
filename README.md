# json-sorting
It helps to sort the json file either ascending or descending order using the desired key.
> Before using this function first parse the json file and make it as a single array containing the series of objects.Before using this function first parse the json file and make it as a single array containing the series of objects.

## Installation
   	npm install --save json-sorting

## Syntax


    jsonSorting(array_name, key_path, value_type, sort_order);
    
    Parameters : 
    array_name = Parsed json array;
    key_path = String datatype - give the key position int that array // name.first
    value_type = String data type - give the value type whether it is int or string
    
    Optional parameter :
    sort_order = string type - choose sort order ascending or descending by using asc or desc
	
> **Note : By default it will sort in ascending order**

## Usage
```javascript
const fs = require("fs");
const { jsonSorting } = require("json-sorting");

// first read and parse the json file 
const file = fs.readFileSync("./src/user.json");
const usersArray = JSON.parse(file);

// Now use the sort function

let ascending_order = jsonSorting(usersArray, "name.first", "string", "asc");
let descending_order = jsonSorting(usersArray, "name.first", "string", "desc");
```

**Example 1 :**
```javascript
//install and import the package
const { jsonSorting } = require("json-sorting");

// example parsed json file
var json = [{
    "name": "misty",
    "id": 8
}, {
    "name": "ash",
    "id": 6
}, {
    "id": 1
}];

let result = jsonSorting( json, "name", "string");
console.log(result);

// output
	[{
		"name": "ash",
		"id": 6
	}, {
		"name": "misty",
		"id": 8
	}, {
		"id": 1
	}];
```

In the above example it is sorted using the key - name since all the name are string datatype we are giving string as third parameter. If we notice we didnt give forth parameter by default it is arranged in ascending order

> Note if an object doesnt have tht key all the undefined keys objects will be go atlast in the sortingNote if an object doesnt have tht key all the undefined keys objects will be go atlast in the sorting

**Example 2 : **
```javascript
const { jsonSorting } = require("json-sorting");

var json = [{
    "name": {
      "first": "anita",
      "last": "turner"
    },
    "email": "anita.turner36@example.com"
  },
  {
    "name": {
      "first": "oscar",
      "last": "wells"
    },
    "email": "oscar.wells37@example.com"
  },
  {
    "name": {
      "first": "george",
      "last": "young"
    },
    "email": "george.young96@example.com"
  }
 ];

let result = jsonSorting( json, "name.first", "string","desc");
console.log(result);

// output
[{
  {
    "name": {
      "first": "oscar",
      "last": "wells"
    },
    "email": "oscar.wells37@example.com"
  },
  {
    "name": {
      "first": "george",
      "last": "young"
    },
    "email": "george.young96@example.com"
  },
  "name": {
      "first": "anita",
      "last": "turner"
    },
    "email": "anita.turner36@example.com"
  }
 ];
```

## Author and contributor
Balamurugan J
[GitHub](https://github.com/balamuruganjbm?tab=repositories "GitHub")
[Linked In](www.linkedin.com/in/balamurugan-j-42160916b "LinkedIn")

### License
MIT
