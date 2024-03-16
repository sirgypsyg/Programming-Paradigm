#include <iostream>
#include <map>

int znajdzWartoscY(std::map<int, int>& lista, int szukaneX) {

    auto it = lista.find(szukaneX);
    if(it != lista.end()){
        return it->second;
    }
    return -1;
}

int main() {
    std::map<int, int> lista = {{1, 10}, {2, 20}, {3, 30}, {4, 40}, {5, 50}};

    int x = 3;
    int wartoscY = znajdzWartoscY(lista, x);

    if (wartoscY != -1) {
        std::cout << "Wartosc y dla x = " << x << " wynosi: " << wartoscY << std::endl;
    } else {
        std::cout << "Nie znaleziono pasujacego x." << std::endl;
    }
    return 0;
}

