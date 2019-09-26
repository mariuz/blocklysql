# BlocklySQL - a block-based editor for SQL
This is a block-based editor for SQL (on the basis of Google's blockly (https://github.com/google/blockly)). 

![BlocklySQL example snippet](example.JPG)

This first example uses a weather database and returns the number of locations where more than five gale-force winds have been recorded. It is equivalent to the following SELECT-statement in SQL:

```
SELECT Wetterstation.Standort, Wettermessung.Max_Windgeschwindigkeit AS '#Orkanböen'
FROM Wetterstation 
JOIN Wettermessung ON Wetterstation.S_ID = Wettermessung.Standort_ID
WHERE Wettermessung.Max_Windgeschwindigkeit > 32.7
GROUP BY Wetterstation.Standort 
HAVING COUNT Wettermessung.Max_Windgeschwindigkeit > 5
ORDER BY Wettermessung.Max_Windgeschwindigkeit DESC;
```

## Elements

We have created many blocky to build SQL queries. So far the following blocks have been introduced:


