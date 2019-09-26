# BlocklySQL - a block-based editor for SQL
This is a block-based editor for SQL (on the basis of Google's blockly (https://github.com/google/blockly)). We build this editor for the use in Computer Science (CS) classrooms. 

![BlocklySQL example snippet](example.JPG)

This first example uses a weather database and returns the number of locations where more than five gale-force winds have been recorded. It is equivalent to the following SELECT-statement in SQL:

```
SELECT Wetterstation.Standort, Wettermessung.Max_Windgeschwindigkeit AS #Orkanböen
FROM Wetterstation 
JOIN Wettermessung ON Wetterstation.S_ID = Wettermessung.Standort_ID
WHERE Wettermessung.Max_Windgeschwindigkeit > 32.7
GROUP BY Wetterstation.Standort 
HAVING COUNT Wettermessung.Max_Windgeschwindigkeit > 5
ORDER BY Wettermessung.Max_Windgeschwindigkeit DESC;
```

## Elements

We have created many blocky to build SQL queries. So far the following blocks have been introduced:

## Example projects

So far our editor has been included in the project "dbup2date" (https://dbup2date.uni-bayreuth.de/blocklysql/index.html) by the University of Bayreuth, Germany. This project provides daily updated databases (football, weather) to use in CS classrooms. Go and check it out!

## Installing

You are welcome to use our editor for educational purposes. 

## Developing

In case you want to extend or adapt our editor go ahead and fork this repo. We are interested in your ideas so please let us know about your them and show us what you have done. 
