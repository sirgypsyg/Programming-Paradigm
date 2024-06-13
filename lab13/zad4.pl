produkt(p1).
produkt(p2).
produkt(p2).
skladnik(s1).
skladnik(s2).
skladnik(s3).
skladnik(s4).

zawiera(p1, s1).
zawiera(p1, s2).
dostepny(s1).

potrzebuje(X, Y) :-
    zawiera(X, Y).

moznaProdukowac(X) :-
	produkt(X),
    forall(zawiera(X,S), dostepny(S)).
    
    





