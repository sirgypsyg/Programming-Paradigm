%{
#include <stdio.h>
int counter = 0;
%}

%%
[a-zA-Z]+ {counter += 1;}
.         { }
%%

int main(int argc, char **argv){
    FILE* file = fopen(argv[1], "r");
    yyin = file;
    yylex();
    printf("%d words", counter);
    fclose(file);
    return 0;
}