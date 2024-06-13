nwd(X, Y, Nwd) :-
    X = Y,
    Nwd = X.

nwd(X, Y, Nwd) :-
    X > Y, 
    X1 is X - Y,
    nwd(X1, Y, Nwd).

nwd(X, Y, Nwd) :-
    X < Y, 
    Y1 is Y - X,
    nwd(X, Y1, Nwd).