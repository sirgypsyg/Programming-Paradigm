diff(red, green).
diff(red, blue).
diff(green, red).
diff(green, blue).
diff(blue, red).
diff(blue, green).

color(Podk, Lubl, Mazo, Podl, Warm) :-
    diff(Podk, Lubl),
    diff(Lubl, Mazo),
    diff(Lubl, Podl),
    diff(Mazo,Podl),
   	diff(Mazo,Warm),
    diff(Podl, Warm).
    